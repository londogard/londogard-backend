package com.londogard.wedding

import io.ktor.server.locations.*


@KtorExperimentalLocationsAPI
@Location("/wedding")
class Wedding(val weddingId: Long = 0) {
    @Location("/admin")
    class Admin(val p: Wedding) {
        @Location("/rsvps")
        class Rsvps(val p: Admin)
    }

    @Location("/unauthorized")
    class Unauthorized(val p: Wedding)

    @Location("/full")
    class Full(val p: Wedding)

    @Location("/create")
    class Create(val p: Wedding)
    @Location("/modify")
    data class Modify(val p: Wedding)
    @Location("/timeline")
    class Timeline(val p: Wedding) {
        @Location("/modify")
        class Modify(val timeline: Timeline)
        @Location("/add")
        class Add(val timeline: Timeline)
        @Location("/delete")
        class Delete(val timeline: Timeline, val timelineId: Long)
    }

    @Location("/gift")
    class Gift(val p: Wedding) {
        @Location("/check")
        data class Check(val p: Gift)
        @Location("/delete")
        data class Delete(val p: Gift, val giftId: Long)
        @Location("/add")
        class Add(val p: Gift)
        @Location("/modify")
        class Modify(val p: Gift)
    }

    @Location("/contact")
    class Contact {}
    @Location("/guest")
    class Guest(val p: Wedding) {
        @Location("/add")
        class Add(val p: Guest)
        @Location("/remove")
        class Remove(val p: Guest)
        @Location("/rsvp")
        class Rsvp(val p: Guest)
    }

    @Location("/custom")
    class Custom(val p: Wedding) {
        @Location("/add")
        class Add(val p: Custom)
        @Location("/modify")
        class Modify(val p: Custom)
        @Location("/delete")
        class Delete(val p: Custom)
    }
}

@KtorExperimentalLocationsAPI
@Location("/wedding")
class WeddingStart

@KtorExperimentalLocationsAPI
@Location("/wedding/create")
class WeddingCreate

@KtorExperimentalLocationsAPI
@Location("/wedding/{weddingId}")
data class WeddingId(val weddingId: Long)