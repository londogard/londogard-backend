package com.lundekhan.gui

import com.lundekhan.Database
import com.lundekhan.blog.blogOverview
import com.lundekhan.gui.HtmlTemplates.Shell
import com.lundekhan.gui.HtmlTemplates.respondHtmlShell
import io.ktor.application.call
import io.ktor.html.respondHtml
import io.ktor.http.content.resource
import io.ktor.http.content.static
import io.ktor.routing.Route
import io.ktor.routing.Routing
import io.ktor.routing.get
import io.ktor.routing.route
import org.koin.ktor.ext.inject

fun Routing.routing(): Route = route("") {
    val db by inject<Database>()
    get {
        call.respondHtmlShell(markdownSupport = true) { blogOverview(db) }
    }

    // TODO add js etc
    static {
        resource("/favicon.ico", "favicon.ico")
        resource("/css", "mvp.css")
    }
}