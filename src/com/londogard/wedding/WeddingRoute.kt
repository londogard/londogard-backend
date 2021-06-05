package com.londogard.wedding

import com.londogard.Database
import com.londogard.UserCreationException
import com.londogard.jwtauth.simplePrincipal
import io.bkbn.kompendium.Notarized.notarizedGet
import io.bkbn.kompendium.Notarized.notarizedPost
import io.bkbn.kompendium.models.meta.MethodInfo
import io.bkbn.kompendium.models.meta.ResponseInfo
import io.ktor.application.*
import io.ktor.http.*
import io.ktor.http.HttpStatusCode.Companion.Created
import io.ktor.http.HttpStatusCode.Companion.OK
import io.ktor.locations.*
import io.ktor.request.*
import io.ktor.response.*
import io.ktor.routing.*
import kotlinx.serialization.Serializable
import org.koin.ktor.ext.inject
import org.mindrot.jbcrypt.BCrypt
import java.sql.SQLException
import kotlin.random.Random


@Serializable
data class WeddingCreator(val data: Data, val userPws: List<UserData>)

@KtorExperimentalLocationsAPI
fun Route.weddingRoute() = route("/wedding") {
    val db by inject<Database>()

    route("/create") {
        notarizedPost(MethodInfo.PostInfo<Data, Data, WeddingCreator>(
            summary = "Create a Wedding"
        )) {
            val weddingData = call.receive<Data>()
            val (data, userPws) = WeddingHelper.createWedding(weddingData, db, call.simplePrincipal?.id!!)

            call.respond(Created, WeddingCreator(data, userPws))
        }
    }

    post("/modify/{weddingId}") {
        val weddingId =
            call.parameters["weddingId"]?.toLong() ?: throw IllegalArgumentException("Require weddingId")
        val weddingInfo = call.receive<Information>()

        db.weddingInfoQueries.update(weddingInfo.content, weddingInfo.date, weddingId)
    }

    notarizedGet(
        MethodInfo.GetInfo<Unit, String>(
            summary = "Test Auth",
            responseInfo = ResponseInfo(status = OK, description = "Returns 'Hello World!' - a good way to test auth")
        )
    ) {
        call.respondText("Hello World!")
    }

    get("/user") {
        val userId = call.simplePrincipal?.id ?: throw IllegalArgumentException("Require userId")

        call.respond(WeddingHelper.getWeddingForGuest(userId, db))
    }

    timelineRoute()
    giftRoute()
    contactRoute()
    guestRoute()
}

// TODO add auth based by weddingId
fun Route.timelineRoute() = route("/timeline") {
    val db by inject<Database>()
    post("/modify/{weddingId}") {
//        val weddingId = call.parameters["weddingId"]?.toLong() ?: throw IllegalArgumentException("Require weddingId")
        val timeline = call.receive<TimelineElement>()
        val id = timeline.timelineid ?: throw IllegalArgumentException("Timelineid must not be null to modify")
        db.timelineQueries.modify(timeline.time, timeline.title, timeline.description, id)
    }

    post("/add/{weddingId}") {
        val weddingId = call.parameters["weddingId"]?.toLong() ?: throw IllegalArgumentException("Require weddingId")
        val timeline = call.receive<TimelineElement>()

        db.timelineQueries.insert(weddingId, timeline.time, timeline.title, timeline.description)
        call.respond(OK)
    }

    post("/delete/{timelineId}") {
        val timelineId = call.parameters["timelineId"]?.toLong() ?: throw IllegalArgumentException("Require timelineId")
        db.timelineQueries.delete(timelineId)
    }
}

fun Route.giftRoute() = route("/gift") {
    val db by inject<Database>()

    post("/check/{giftId}/{check}") {
        val giftId = call.parameters["giftId"]?.toLong() ?: throw IllegalArgumentException("Require giftId")
        val check = call.parameters["check"]?.toBoolean() ?: true
        db.giftQueries.check(check, giftId)

        call.respondText(true.toString())
    }

    // TODO require admin
    post("/delete/{giftId}") {
        val giftId = call.parameters["giftId"]?.toLong() ?: throw IllegalArgumentException("Require giftId")
        db.giftQueries.delete(giftId)
    }
    post("/add/{weddingId}") {
        val weddingId = call.parameters["weddingId"]?.toLong() ?: throw IllegalArgumentException("Require weddingId")
        val gift = call.receive<Gift>()
        db.transaction {
            val weddingInfo = db.weddingInfoQueries.selectById(weddingId).executeAsOne()

            db.giftQueries.insert(
                weddingInfo.gifteryid,
                gift.title,
                gift.description,
                gift.img,
                gift.links,
                gift.checkable
            )
        }
    }
    post("/modify/{weddingId}") {
        val weddingId = call.parameters["weddingId"]?.toLong() ?: throw IllegalArgumentException("Require weddingId")
        val gift = call.receive<Gift>()
        db.giftQueries.update(gift.title, gift.description, gift.checked, gift.links, gift.checkable, gift.giftId)
    }
}

fun Route.contactRoute() = route("/contact/{weddingId}") {
    val db by inject<Database>()

    post("/add") {
        val weddingId = call.parameters["weddingId"]?.toLong() ?: throw IllegalArgumentException("Require weddingId")
        val contacts = call.receive<ContactWrapper>()

        db.weddingContactQueries.transaction {
            contacts.entries.forEach { entry ->
                db.weddingContactQueries.insert(
                    weddingId,
                    contacts.title,
                    entry.name,
                    entry.telephone,
                    entry.email,
                    entry.address
                )
            }
        }
    }
    post("/edit/{title}") {
        val weddingId = call.parameters["weddingId"]?.toLong() ?: throw IllegalArgumentException("Require weddingId")
        val title = call.parameters["title"] ?: throw IllegalArgumentException("Require title")
        val contacts = call.receive<ContactWrapper>()

        db.weddingContactQueries.transaction {
            contacts.entries.forEach { entry ->
                db.weddingContactQueries.update(
                    contacts.title,
                    entry.name,
                    entry.telephone,
                    entry.email,
                    entry.address,
                    weddingId,
                    title
                )
            }
        }
    }

    post("/delete/{title}") {
        val weddingId = call.parameters["weddingId"]?.toLong() ?: throw IllegalArgumentException("Require weddingId")
        val title = call.parameters["title"] ?: throw IllegalArgumentException("Require title")

        db.weddingContactQueries.delete(weddingId, title)
    }
}

fun Route.guestRoute() = route("/guest") {
    val db by inject<Database>()

    post("/create/{weddingId}") {
        val weddingId = call.parameters["weddingId"]?.toLong() ?: throw IllegalArgumentException("Require weddingId")
        val guest = call.receive<Guest>()
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
    post("/delete/{weddingId}") {
        val weddingId = call.parameters["weddingId"]?.toLong() ?: throw IllegalArgumentException("Require weddingId")
        val guest = call.receive<Guest>()

        db.transaction {
            db.weddingGuestQueries.remove(weddingId, guest.userid)
            db.userQueries.remove(guest.userid)
        }
    }
    post("/rsvp/{weddingId}") {
        val weddingId = call.parameters["weddingId"]?.toLong() ?: throw IllegalArgumentException("Require weddingId")
        val guests = call.receive<Guest>()

        val updatedGuest = db.weddingGuestQueries.transactionWithResult<Guest> {
            val extraPre = guests.extra?.entries?.joinToString("&") { (key, value) -> "$key=$value" } ?: ""

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
                ?.map { keyValue ->
                    val split = keyValue.split('=')
                    split[0] to (split[1].toBooleanStrictOrNull() ?: false)
                }?.toMap() ?: emptyMap()

            Guest(guest.userid, guest.guestid, rsvps.map { RsvpGuest(it.name, it.coming) }, extra, guest.comment)
        }

        call.respond(updatedGuest)
    }
}