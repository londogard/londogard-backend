package com.londogard.gui

import com.londogard.*
import com.londogard.billsplitter.billsplit
import com.londogard.gui.HtmlTemplates.respondHtmlShell
import com.londogard.summarizer.summarizerRoute
import com.londogard.textgen.textgenRoute
import io.ktor.server.application.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.util.*
import kotlinx.html.iframe
import kotlinx.serialization.ExperimentalSerializationApi

@InternalAPI
@ExperimentalStdlibApi
@ExperimentalSerializationApi
fun Routing.frontendRoute(
    redirectionMap: MutableMap<String, String>,
    lines: List<String>
): Route = route("") {
    aboutRoute()
    listOf("smry", "textgen", "fuzsearch", "ner").forEach { path ->
        get(path) { call.respondRedirect("projects/$path", permanent = true) }
    }

    route("/projects") {
        projectRoute()
        billsplit()
        urlShort(redirectionMap)
        summarizerRoute()
        textgenRoute()
        fuzzyRoute(lines)
        stokkRoute()

        get("ner") {
            call.respondHtmlShell("Swedish NER") {
                iframe {
                    src="https://share.streamlit.io/londogard/swedish-ner/main/main.py"
                    width="100%"
                    height="1080px"
                }
            }
        }
    }


}