package com.lundekhan.gui

import com.lundekhan.aboutRoute
import com.lundekhan.billsplitter.billsplit
import com.lundekhan.blog.blogRoute
import com.lundekhan.blog.tilRoute
import com.lundekhan.fuzzyRoute
import com.lundekhan.stokkRoute
import com.lundekhan.rssfeed.rssFeedRoute
import com.lundekhan.summarizer.summarizerRoute
import com.lundekhan.textgen.textgenRoute
import com.lundekhan.urlShort
import io.ktor.routing.Route
import io.ktor.routing.Routing
import io.ktor.routing.route
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
    blogRoute()
    tilRoute()
    fuzzyRoute(lines)
    stokkRoute()
    rssFeedRoute()
}