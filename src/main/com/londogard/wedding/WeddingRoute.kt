package com.londogard.wedding

import com.londogard.Database
import com.londogard.MarkdownHelper
import com.londogard.UserCreationException
import com.londogard.jwtauth.simplePrincipal
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.http.HttpStatusCode.Companion.Created
import io.ktor.http.HttpStatusCode.Companion.OK
import io.ktor.locations.*
import io.ktor.request.*
import io.ktor.response.*
import kotlinx.serialization.Serializable
import org.koin.ktor.ext.inject
import org.mindrot.jbcrypt.BCrypt
import java.sql.SQLException
import kotlin.random.Random
import io.ktor.locations.post
import io.ktor.routing.Route
import io.ktor.routing.route


@Serializable
data class WeddingCreator(val data: Data, val userPws: List<UserData>)

// TODO create auth-tester under Auth

@KtorExperimentalLocationsAPI
fun Route.weddingRoute() {
    val db by inject<Database>()

    get<Wedding> {   // /wedding
        val userId = call.simplePrincipal?.id ?: throw IllegalArgumentException("Require userId")

        call.respond(WeddingHelper.getWeddingForGuest(userId, db, minified = true))
    }

    get<Wedding.Full> {   // /wedding
        val userId = call.simplePrincipal?.id ?: throw IllegalArgumentException("Require userId")

        call.respond(WeddingHelper.getWeddingForGuest(userId, db, minified = false))
    }

    post<Wedding.Create> {  // /wedding/create
        val weddingData = call.receive<Data>()
        val (data, userPws) = WeddingHelper.createWedding(weddingData, db, call.simplePrincipal?.id!!)

        call.respond(Created, WeddingCreator(data, userPws))
    }

    post<Wedding.Modify> { pathData ->   // /wedding/modify?weddingId={id}
        val weddingInfo = call.receive<Information>()

        db.weddingInfoQueries.update(weddingInfo.content, weddingInfo.date, pathData.p.weddingId)
        call.respond(OK)
    }

    timelineRoute()
    giftRoute()
    contactRoute()
    guestRoute()
    customRoutes()
}

// TODO add auth based by weddingId
@KtorExperimentalLocationsAPI
fun Route.timelineRoute() {
    val db by inject<Database>()

    // TODO add weddingId requirement
    post<Wedding.Timeline.Modify> { // /wedding/timeline/modify?weddingId={id}
        val timeline = call.receive<TimelineElement>()
        val id = timeline.timelineid ?: throw IllegalArgumentException("Timelineid must not be null to modify")
        db.timelineQueries.modify(timeline.time, timeline.title, timeline.description, id)
        call.respond(OK)
    }

    post<Wedding.Timeline.Add> { pathData ->   // /wedding/timeline/add?weddingId={id}
        val timeline = call.receive<TimelineElement>()

        db.timelineQueries.insert(pathData.timeline.p.weddingId, timeline.time, timeline.title, timeline.description)
        call.respond(OK)
    }

    post<Wedding.Timeline.Delete> { pathData ->
        db.timelineQueries.delete(pathData.timelineId)
        call.respond(OK)
    }
}

@KtorExperimentalLocationsAPI
fun Route.giftRoute() {
    val db by inject<Database>()

    authenticate("auth-wedding-admin") {
        // TODO("Add Admin routes here!")
    }

    post<Wedding.Gift.Check> { pathData -> // /wedding/gift/check?weddingId={id}
        val giftData = call.receive<Gift>()
        db.giftQueries.transaction {
            giftData.checkedGiftById.forEach { (checked, giftId) ->
                db.giftQueries.check(checked, giftId)
            }
        }

        call.respond(OK)
    }

    // TODO require admin
    delete<Wedding.Gift.Delete> { pathData -> // /wedding/gift/delete?weddingId={id}&giftId={id}
        db.giftQueries.delete(pathData.giftId)
        call.respond(OK)
    }

    post<Wedding.Gift.Add> { pathData -> // /wedding/gift/add?weddingId={id}
        val gift = call.receive<Gift>()
        db.transaction {
            val weddingInfo = db.weddingInfoQueries.selectById(pathData.p.p.weddingId).executeAsOne()

            db.giftQueries.insert(
                weddingInfo.gifteryid,
                gift.title,
                gift.description,
                gift.img,
                gift.links,
                gift.checkable
            )
        }
        call.respond(OK)
    }


    post<Wedding.Gift.Modify> { // /wedding/gift/modify?weddingId={id}
        val gift = call.receive<Gift>()
        db.transaction {
            gift.checkedGiftById
                .forEach { (checked, giftId) ->
                    db.giftQueries.update(gift.title, gift.description, checked, gift.links, gift.checkable, giftId)
                }
        }

        call.respond(OK)
    }
}

fun Route.contactRoute() = route("/contact/{weddingId}") {
    val db by inject<Database>()

    //post("/add") {
    //    val weddingId = call.parameters["weddingId"]?.toLong() ?: throw IllegalArgumentException("Require weddingId")
    //    val contacts = call.receive<ContactWrapper>()
//
    //    db.weddingContactQueries.transaction {
    //        contacts.entries.forEach { entry ->
    //            db.weddingContactQueries.insert(
    //                weddingId,
    //                contacts.title,
    //                entry.name,
    //                entry.telephone,
    //                entry.email,
    //                entry.address
    //            )
    //        }
    //    }
    //}
    //post("/edit/{title}") {
    //    val weddingId = call.parameters["weddingId"]?.toLong() ?: throw IllegalArgumentException("Require weddingId")
    //    val title = call.parameters["title"] ?: throw IllegalArgumentException("Require title")
    //    val contacts = call.receive<ContactWrapper>()
//
    //    db.weddingContactQueries.transaction {
    //        contacts.entries.forEach { entry ->
    //            db.weddingContactQueries.update(
    //                contacts.title,
    //                entry.name,
    //                entry.telephone,
    //                entry.email,
    //                entry.address,
    //                weddingId,
    //                title
    //            )
    //        }
    //    }
    //}
//
    //post("/delete/{title}") {
    //    val weddingId = call.parameters["weddingId"]?.toLong() ?: throw IllegalArgumentException("Require weddingId")
    //    val title = call.parameters["title"] ?: throw IllegalArgumentException("Require title")
//
    //    db.weddingContactQueries.delete(weddingId, title)
    //}
}

@KtorExperimentalLocationsAPI
fun Route.guestRoute() {
    val db by inject<Database>()

    post<Wedding.Guest.Add> {
        val weddingId = call.parameters["weddingId"]?.toLong() ?: throw IllegalArgumentException("Require weddingId")
        val guest = call.receive<Guest>()
        // TODO make a try-catch and rerun a few times.
        val userPw = db.userQueries.transactionWithResult<UserData> {
            val username = guest.rsvps.map(RsvpGuest::name).joinToString("-") { name -> name.take(3).lowercase() }
            val password = "${WeddingHelper.wf[Random.nextInt(WeddingHelper.wf.size)]}-${
                WeddingHelper.wf[Random.nextInt(
                    WeddingHelper.wf.size
                )]
            }-${Random.nextInt(1000)}"
            val pw = BCrypt.hashpw(password, BCrypt.gensalt())

            try {
                db.userQueries.insert(username, pw)
                UserData(username, password, db.userQueries.rowid().executeAsOne())
            } catch (exception: SQLException) {
                throw UserCreationException()
            }
        }
        // 4b. Add Guests to data
        db.transaction {
            db.weddingGuestQueries.insert(weddingId, userPw.id)
            val guestid = db.weddingGuestQueries.rowid().executeAsOne()
            guest.rsvps.forEach { guestName ->
                db.weddingRsvpQueries.insert(guestid, guestName.name)
            }
        }
        call.respond(userPw)
    }
    post<Wedding.Guest.Remove> {
        val weddingId = call.parameters["weddingId"]?.toLong() ?: throw IllegalArgumentException("Require weddingId")
        val guest = call.receive<Guest>()

        db.transaction {
            db.weddingGuestQueries.remove(weddingId, guest.userid)
            db.userQueries.remove(guest.userid)
        }
    }
    post<Wedding.Guest.Rsvp> { dataPath ->
        val weddingId = dataPath.p.p.weddingId
        val guests = call.receive<Guest>()

        val updatedGuest = db.weddingGuestQueries.transactionWithResult<Guest> {
            val extraPre = guests.extra.entries.joinToString("&") { (key, value) -> "$key=$value" } ?: ""

            db.weddingGuestQueries.updateGuestInfo(guests.comment, extraPre, weddingId, guests.userid)

            if (guests.rsvps.count(RsvpGuest::isComing) in listOf(0, guests.rsvps.size)) {
                db.weddingRsvpQueries.isComingAll(guests.rsvps.first().isComing, guests.guestid, weddingId)
            } else {
                guests.rsvps.forEach { rsvp ->
                    db.weddingRsvpQueries.isComing(rsvp.isComing, guests.guestid, rsvp.name)
                }
            }

            val guest = db.weddingGuestQueries.selectByGuestId(guests.guestid).executeAsOne()
            val rsvps = db.weddingRsvpQueries.selectById(guests.guestid).executeAsList()
            val extra = guest.extra
                ?.split('&')
                ?.filter(String::isNotEmpty)
                ?.associate { keyValue ->
                    val split = keyValue.split('=')
                    split[0] to (split[1].toBooleanStrictOrNull() ?: false)
                } ?: emptyMap()

            Guest(guest.userid, guest.guestid, rsvps.map { RsvpGuest(it.name, it.coming) }, extra, guest.comment ?: "")
        }

        call.respond(updatedGuest)
    }
}

@Serializable
data class CustomContent(val title: String, val mdContent: String)

@KtorExperimentalLocationsAPI
fun Route.customRoutes() {
    val db by inject<Database>()

    get<Wedding.Custom> { pathData ->
        call.respond(
            db.weddingExtraInfoQueries.selectAllByWeddingId(pathData.p.weddingId)
                .executeAsList()
                .map { e -> CustomContent(e.title, e.description) }
        )
    }

    post<Wedding.Custom.Add> { pathData ->
        val weddingId = pathData.p.p.weddingId
        val customContent = call.receive<CustomContent>()
        db.weddingExtraInfoQueries
            .insert(weddingId, customContent.title, MarkdownHelper.markdownToHtml(customContent.mdContent))

        call.respond(OK)
    }
    post<Wedding.Custom.Modify> {
        TODO("")
    }

    post<Wedding.Custom.Delete> { pathData ->
        val weddingId = pathData.p.p.weddingId
        val customContent = call.receive<CustomContent>()
        db.weddingExtraInfoQueries.delete(weddingId, customContent.title)

        call.respond(OK)
    }
}