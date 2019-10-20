package com.lundekhan.textgen

import io.ktor.routing.Route
import io.ktor.routing.route

fun Route.textgenRoute(): Route = route("/textgen") {


    route("/ui"){

    }
}