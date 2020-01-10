package com.lundekhan.blog

import io.ktor.auth.authenticate
import io.ktor.routing.Route
import io.ktor.routing.get
import io.ktor.routing.route

fun Route.blogRoute(): Route = route("/blog") {
    get {

    }
    route("/{id}") {

    }
    authenticate {
        route("/create") {

        }

    }
}