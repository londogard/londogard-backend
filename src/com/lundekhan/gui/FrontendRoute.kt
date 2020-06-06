package com.lundekhan.gui

import com.lundekhan.billsplitter.billsplit
import com.lundekhan.blog.blogRoute
import com.lundekhan.fuzzyRoute
import com.lundekhan.rssfeed.rssFeedRoute
import com.lundekhan.stockRoute
import com.lundekhan.summarizer.summarizerRoute
import com.lundekhan.textgen.textgenRoute
import com.lundekhan.urlShort
import io.ktor.routing.Route
import io.ktor.routing.Routing
import io.ktor.routing.route
import kotlinx.serialization.ImplicitReflectionSerializer

@ImplicitReflectionSerializer
fun Routing.frontendRoute(
    redirectionMap: MutableMap<String, String>,
    lines: List<String>
): Route = route("") {
    billsplit()
    urlShort(redirectionMap)
    summarizerRoute()
    textgenRoute()
    blogRoute()
    fuzzyRoute(lines)
    stockRoute()
    rssFeedRoute()
}