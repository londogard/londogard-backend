package com.lundekhan

import com.londogard.fuzzymatch.FuzzyMatcher
import io.ktor.application.call
import io.ktor.request.receive
import io.ktor.response.respond
import io.ktor.routing.Route
import io.ktor.routing.post
import io.ktor.routing.route
import org.koin.ktor.ext.inject

fun Route.fuzzyRoute(lines: List<String>): Route = route("/fuzzy") {
    val fuzzyMatcher by inject<FuzzyMatcher>()

    post {
        val keyword = call.receive<SearchPost>().keyword
        val fuzzyMatches = fuzzyMatcher
            .fuzzyMatch(lines, keyword)
            .mapNotNull { it.text }

        call.respond(ResultResponseArray(fuzzyMatches))
    }
}

data class SearchPost(val keyword: String)