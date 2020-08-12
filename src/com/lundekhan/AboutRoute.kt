package com.lundekhan

import com.lundekhan.gui.HtmlTemplates.Card
import com.lundekhan.gui.HtmlTemplates.respondHtmlShell
import io.ktor.application.call
import io.ktor.routing.Route
import io.ktor.routing.get
import kotlinx.html.*

fun Route.aboutRoute(): Route = get("/about") {
    call.respondHtmlShell {
        header {
            h2 { +"About Londogard" }
            p { +"We aim to have fun and as a starter the goal is to provide Natural Language Processing (NLP) solutions for the Raspberry Pi!" }
        }
        section {
            Card("Hampus Londögård", {
                p { +"The main contributor, MsC Computer Science @ Lunds Tekniska Högskola." }
                p { +"In love with NLP, Functional Programming (especially types) & optimizations." }
            }, image = "hampus")
            Card("Dennis Londögård", {
                p { +"Fresh out of Lunds Tekniska Högskola (MsC Computer Science)." }
                p { +"Has a big interest in finance, working out and of course coding!" }
            })
        }
    }
}