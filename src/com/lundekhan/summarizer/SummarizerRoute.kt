package com.lundekhan.summarizer

import com.londogard.summarize.summarizers.TfIdfSummarizer
import com.lundekhan.resultResponse
import io.ktor.application.call
import io.ktor.request.receive
import io.ktor.response.respond
import io.ktor.routing.Route
import io.ktor.routing.post
import io.ktor.routing.route
import org.koin.ktor.ext.inject

fun Route.summarizerRoute(): Route = route("/smry") {
    val summarizer by inject<TfIdfSummarizer>()

    post {
        val articleText = call.receive<PostText>()
        call.respond(resultResponse(summarizer.summarize(articleText.text, 0.2)))
    }
}
data class PostText(val text: String) // TODO add ratio or sentences to this!