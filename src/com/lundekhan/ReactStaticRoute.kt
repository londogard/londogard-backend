package com.lundekhan

import io.ktor.http.content.default
import io.ktor.http.content.resource
import io.ktor.http.content.resources
import io.ktor.http.content.static
import io.ktor.routing.Route

fun Route.reactStaticRoute(): Unit {
    resource("","londogard-frontend/build/index.html")
    static("/static") {
        resources("londogard-frontend/build/static")
    }
    static("/") {
        resources("londogard-frontend/build/")
        default("londogard-frontend/build/index.html")
    }
}