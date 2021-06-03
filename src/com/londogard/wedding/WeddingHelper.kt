package com.londogard.wedding

import com.londogard.Database
import com.londogard.UserCreationException
import com.londogard.data.Wedding_rsvp
import com.londogard.nlp.utils.LanguageSupport
import com.londogard.nlp.wordfreq.WordFrequencies
import io.ktor.server.engine.*
import kotlinx.serialization.Serializable
import org.mindrot.jbcrypt.BCrypt
import java.sql.SQLException
import kotlin.random.Random

@Serializable
data class UserData(val username: String, val password: String, val id: Long)

object WeddingHelper {
    val wf = (WordFrequencies.getAllWordFrequenciesOrNull(LanguageSupport.sv) ?: emptyMap())
        .entries
        .filter { (key, _) -> key.length <= 5 }
        .sortedByDescending { it.value }
        .take(250) // TODO don't limit this...
        .map { it.key }

    fun getWeddingForGuest(userid: Long, db: Database): Data {
        val allData = getWedding(userid, db)
        return allData.copy(guests = listOf(allData.guests.first { it.userid == userid }))
    }

    fun getWedding(userid: Long, db: Database): Data {
        return db.transactionWithResult {
            val weddingInfo = db.weddingInfoQueries.selectByUserId(userid).executeAsOneOrNull()
                ?: db.weddingInfoQueries.selectByGuestUserId(userid).executeAsOne()
            val timeline =
                db.timelineQueries.selectSimple(weddingInfo.weddingid) { time, title, description, timelineid ->
                    TimelineElement(
                        title,
                        description,
                        time,
                        timelineid
                    )
                }
                    .executeAsList()
                    .sortedBy { if (it.time > "06:00") it.time else "24:00" + it.time }
            val contacts = db.weddingContactQueries.selectSimple(weddingInfo.weddingid)
                .executeAsList()
                .groupBy { it.title }
                .map { (key, value) ->
                    ContactWrapper(
                        key,
                        value.map { contact ->
                            ContactEntry(
                                contact.name,
                                contact.telephone ?: "",
                                contact.email,
                                contact.address
                            )
                        })
                }
            val guests = db.weddingGuestQueries.transactionWithResult<List<Guest>> {
                val guests = db.weddingRsvpQueries.selectByWeddingId(weddingInfo.weddingid)
                    .executeAsList()
                    .groupBy(Wedding_rsvp::guestid)
                val guestWrapper = db.weddingGuestQueries
                    .selectByWeddingId(weddingInfo.weddingid) { guestId, _, userId, extra, comment ->
                        val guests = guests.getOrDefault(guestId, emptyList())
                        val extraMap = extra
                            ?.split('&')
                            ?.filter(String::isNotEmpty)
                            ?.map { keyValue ->
                                val split = keyValue.split('=')
                                split[0] to (split[1].toBooleanStrictOrNull() ?: false)
                            }?.toMap()
                        Guest(userId, guestId, guests.map { RsvpGuest(it.name, it.coming) }, extraMap, comment)
                    }
                    .executeAsList()
                guestWrapper
            }
            val gift = db.gifteryListQueries.selectById(weddingInfo.gifteryid).executeAsOne()
            val gifts =
                db.giftQueries.selectByGifteryId(weddingInfo.gifteryid) { giftid, _, title, description, img, checked, links, checkable ->
                    Gift(title, description, img, links, checked, checkable, giftid)
                }.executeAsList()

            Data(
                contact = Contacts(contacts),
                information = Information(weddingInfo.description, weddingInfo.date, timeline),
                guests = guests,
                gift = GifteryList(gift.title, gift.description, gifts),
                weddingInfo.weddingid
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
            db.weddingInfoQueries.insert(userid, gifteryId, info.content, info.date)
            db.weddingInfoQueries.rowid().executeAsOne()
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
        val range = ('a'..'z') + ('A'..'Z') + ('0'..'9')
        val userPws = db.userQueries.transactionWithResult<List<UserData>> {
            data.guests.map { guest ->
                val username = (guest.rsvps.map(RsvpGuest::name) + "${range.random()}${range.random()}")
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