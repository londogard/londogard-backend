package com.londogard.wedding

import com.londogard.Database
import com.londogard.MarkdownHelper
import com.londogard.UserCreationException
import com.londogard.data.SelectById
import com.londogard.data.Wedding_guest
import com.londogard.data.Wedding_rsvp
import com.londogard.nlp.utils.LanguageSupport
import com.londogard.nlp.wordfreq.WordFrequencies
import com.londogard.wedding.WeddingUtils.extraToMap
import io.ktor.server.engine.*
import kotlinx.serialization.Serializable
import org.intellij.markdown.flavours.gfm.GFMFlavourDescriptor
import org.intellij.markdown.parser.MarkdownParser
import org.mindrot.jbcrypt.BCrypt
import java.sql.SQLException
import kotlin.math.min
import kotlin.random.Random

@Serializable
data class UserData(val username: String, val password: String, val id: Long)

object WeddingHelper {
    val asciiRange = ('a'..'z') + ('A'..'Z') + ('0'..'9')
    val wf = (WordFrequencies.getAllWordFrequenciesOrNull(LanguageSupport.sv) ?: emptyMap())
        .entries
        .asSequence()
        .filter { (key, _) -> key.length <= 5 }
        .sortedByDescending { it.value }
        .map { it.key.lowercase() }
        .map { it
            .replace('å', 'a')
            .replace('ä', 'a')
            .replace('ö', 'o')
        }
        .filter { key -> key.all { it in asciiRange } }
        .distinct()
        .take(250)
        .toList() // TODO don't limit this...

    fun getWeddingForGuest(userid: Long, db: Database, minified: Boolean): Data {
        return getWedding(userid, db, minified)
    }

    fun getWedding(userid: Long, db: Database, minified: Boolean = false): Data {
        return db.transactionWithResult {
            val weddingInfo = db.weddingInfoQueries.selectByUserId(userid).executeAsOneOrNull()
                ?: db.weddingInfoQueries.selectByGuestUserId(userid).executeAsOne()
            val timeline =
                db.timelineQueries.selectSimple(weddingInfo.weddingid) { time, title, description, timelineid ->
                    TimelineElement(title, description, time, timelineid)
                }
                    .executeAsList()
                    .sortedBy { if (it.time > "06:00") it.time else "24:00" + it.time }
            val extraSections = db.weddingExtraInfoQueries
                .selectById(weddingInfo.weddingid)
                .executeAsList()
                .associate { row -> row.title to row.description }

            val contacts = db.weddingContactQueries.selectSimple(weddingInfo.weddingid)
                .executeAsList()
                .groupBy { it.title }
                .map { (key, value) ->
                    ContactWrapper(
                        key,
                        value.map { contact ->
                            ContactEntry(contact.name, contact.telephone ?: "", contact.email, contact.address)
                        }
                    )
                }

            val guests = db.weddingGuestQueries.transactionWithResult<List<Guest>> {
                val (guestData, rsvpData) = if (minified) {
                    val guestData = db.weddingGuestQueries.selectByUserId(userid).executeAsOne()
                    val rsvpData = db.weddingRsvpQueries.selectById(guestData.guestid).executeAsList()
                    listOf(guestData) to rsvpData
                } else {
                    val guestData = db.weddingGuestQueries.selectByWeddingId(weddingInfo.weddingid).executeAsList()
                    val rsvpData = db.weddingRsvpQueries.selectByWeddingId(weddingInfo.weddingid).executeAsList()
                    guestData to rsvpData
                }
                val groupedGuests = guestData.associateBy(Wedding_guest::guestid)
                val groupedRsvps = rsvpData.groupBy(Wedding_rsvp::guestid)
                groupedGuests
                    .map { (id, guest) ->
                        val rsvps = groupedRsvps[id]?.map { rsvp -> RsvpGuest(rsvp.name, rsvp.coming) } ?: emptyList()
                        val extraMap = guest.extra?.extraToMap() ?: emptyMap()
                        Guest(guest.userid, guest.guestid, rsvps, extraMap, guest.comment ?: "")
                    }
            }
            val gift = db.gifteryListQueries.selectById(weddingInfo.gifteryid).executeAsOne()
            val gifts =
                db.giftQueries.selectByGifteryId(weddingInfo.gifteryid)
                    .executeAsList()
                    .groupBy { it.title }
                    .values
                    .map { items ->
                        val gift = items.first()
                        Gift(
                            gift.title,
                            gift.description,
                            gift.img,
                            gift.links,
                            gift.checkable,
                            items.map { it.checked to it.giftid })
                    }
                    .filter { gift -> minified && !gift.checkedGiftById.all { (checked, _) -> checked } }

            Data(
                contact = Contacts(contacts),
                information = Information(weddingInfo.description, weddingInfo.date, timeline),
                guests = guests,
                gift = GifteryList(gift.title, gift.description, gifts),
                weddingInfo.weddingid,
                customMarkdownSections = extraSections
            )
        }
    }

    // TODO make sure username don't break DB (or retry if it does)
    // TODO make turn everything into a single transaction
    fun createWedding(data: Data, db: Database, userid: Long): Pair<Data, List<UserData>> {
        val info = data.information

        // 0. Create Giftery
        val gifteryId = db.gifteryListQueries.transactionWithResult<Long> {
            db.gifteryListQueries.insert(data.gift.title, data.gift.description)
            db.gifteryListQueries.rowid().executeAsOne()
        }

        // 1. Create WeddingHolder
        val weddingId = db.weddingInfoQueries.transactionWithResult<Long> {
            db.weddingInfoQueries.insert(userid, gifteryId, MarkdownHelper.markdownToHtml(info.content), info.date)
            db.weddingInfoQueries.rowid().executeAsOne()
        }

        db.transaction {
            data.customMarkdownSections?.forEach { (title, descr) ->
                db.weddingExtraInfoQueries.insert(weddingId, title, MarkdownHelper.markdownToHtml(descr))
            }
        }


        // 2. Create timeline
        db.timelineQueries.transaction {
            info.timeline.forEach { timelineElement ->
                db.timelineQueries.insert(
                    weddingId,
                    timelineElement.time,
                    timelineElement.title,
                    timelineElement.description
                )
            }
        }

        // 3. Add Contacts
        db.weddingContactQueries.transaction {
            data.contact.entries.forEach { contact ->
                contact.entries.forEach { entry ->
                    db.weddingContactQueries.insert(
                        weddingId,
                        contact.title,
                        entry.name,
                        entry.telephone,
                        entry.email,
                        entry.email
                    )
                }
            }
        }

        // 4. Add Guests
        // 4a. Create Guest User - TODO extract createUser part.
        val userPws = db.userQueries.transactionWithResult<List<UserData>> {
            data.guests.map { guest ->
                val username = (guest.rsvps.map(RsvpGuest::name).filterNot { it.contains("+1") }.take(2) + "${asciiRange.random()}${asciiRange.random()}")
                    .joinToString("-") { name -> name.take(3).lowercase() }
                val password = "${wf[Random.nextInt(wf.size)]}-${wf[Random.nextInt(wf.size)]}-${Random.nextInt(1000)}"
                val pw = BCrypt.hashpw(password, BCrypt.gensalt())

                try {
                    db.userQueries.insert(username, pw)
                    UserData(username, password, db.userQueries.rowid().executeAsOne())
                } catch (exception: SQLException) {
                    exception.printStackTrace()
                    throw UserCreationException()
                }
            }
        }

        // 4b. Add Guests to data
        db.weddingGuestQueries.transaction {
            data.guests.zip(userPws).forEach { (guest, userdata) ->
                db.weddingGuestQueries.insert(weddingId, userdata.id)
                guest.rsvps.forEach { guestName ->
                    val guestId = db.weddingGuestQueries.rowid().executeAsOne()
                    db.weddingRsvpQueries.insert(guestId, guestName.name)
                }
            }
        }

        // 5. Add Gifts
        db.giftQueries.transaction {
            data.gift.gifts.forEach { gift ->
                db.giftQueries.insert(gifteryId, gift.title, gift.description, gift.img, gift.links, gift.checkable)
            }
        }

        return getWedding(userid, db) to userPws
    }
}