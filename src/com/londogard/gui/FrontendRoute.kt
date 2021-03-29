package com.londogard.gui

import com.londogard.aboutRoute
import com.londogard.billsplitter.billsplit
import com.londogard.fuzzyRoute
import com.londogard.gui.HtmlTemplates.respondHtmlShell
import com.londogard.stokkRoute
import com.londogard.summarizer.summarizerRoute
import com.londogard.textgen.textgenRoute
import com.londogard.urlShort
import io.ktor.application.*
import io.ktor.routing.*
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
    billsplit()
    urlShort(redirectionMap)
    aboutRoute()
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