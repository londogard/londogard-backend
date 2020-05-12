package com.lundekhan.gui

import com.lundekhan.Database
import com.lundekhan.blog.blogOverview
import com.lundekhan.gui.HtmlTemplates.Shell
import com.lundekhan.summarizer.summarizerRoute
import io.ktor.application.call
import io.ktor.html.respondHtml
import io.ktor.response.respondBytes
import io.ktor.routing.Route
import io.ktor.routing.Routing
import io.ktor.routing.get
import io.ktor.routing.route
import org.koin.ktor.ext.inject

fun Routing.routing(): Route = route("") {
    val db by inject<Database>()
    get {
        call.respondHtml{ Shell(true) { blogOverview(db) } }
    }
    get("/favicon.ico") {
        call.respondBytes(javaClass.getResourceAsStream("/favicon.ico").readBytes())
    }

    // summarizerRoute()
}