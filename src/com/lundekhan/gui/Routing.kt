package com.lundekhan.gui

import com.lundekhan.Database
import com.lundekhan.blog.BlogHelper
import com.lundekhan.blog.blogOverview
import com.lundekhan.gui.HtmlTemplates.Card
import com.lundekhan.gui.HtmlTemplates.Shell
import io.ktor.application.call
import io.ktor.html.respondHtml
import io.ktor.routing.Route
import io.ktor.routing.Routing
import io.ktor.routing.get
import io.ktor.routing.route
import kotlinx.html.MAIN
import kotlinx.html.h2
import kotlinx.html.header
import kotlinx.html.section
import org.koin.ktor.ext.inject

fun Routing.routing(): Route = route("") {
    val db by inject<Database>()
    get {
        call.respondHtml{ Shell(true, body = blogOverview(db)) }
    }

    get("/smry") {
        //call.respondHtml { Shell() }
    }
}