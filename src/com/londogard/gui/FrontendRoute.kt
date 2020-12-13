package com.londogard.gui

import com.londogard.aboutRoute
import com.londogard.billsplitter.billsplit
import com.londogard.fuzzyRoute
import com.londogard.stokkRoute
import com.londogard.summarizer.summarizerRoute
import com.londogard.textgen.textgenRoute
import com.londogard.urlShort
import io.ktor.application.*
import io.ktor.response.*
import io.ktor.routing.*
import kotlinx.serialization.ExperimentalSerializationApi

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
    // get("/blog") { call.respondRedirect("https://blog.londogard.com", permanent = true) }
    // get("/rss") { call.respondRedirect("https://blog.londogard.com/feed.xml") }
}