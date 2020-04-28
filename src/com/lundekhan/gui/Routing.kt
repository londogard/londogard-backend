package com.lundekhan.gui

import io.ktor.application.call
import io.ktor.html.respondHtml
import io.ktor.routing.Route
import io.ktor.routing.get
import io.ktor.routing.post
import io.ktor.routing.route
import kotlinx.html.head

fun Route.routing(): Route = route("/") {
    post(""){
        call.respondHtml{
            head{}
        }
    }
}