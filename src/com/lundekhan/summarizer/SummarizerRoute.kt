package com.lundekhan.summarizer

import com.londogard.summarize.summarizers.Summarizer
import com.lundekhan.ResultResponseArray
import com.lundekhan.resultResponse
import io.ktor.application.call
import io.ktor.request.receive
import io.ktor.response.respond
import io.ktor.routing.Route
import io.ktor.routing.get
import io.ktor.routing.post
import io.ktor.routing.route
import org.koin.core.qualifier.named
import org.koin.ktor.ext.inject

fun Route.summarizerRoute(): Route = route("/smry") {
    val summarizer by inject<Summarizer>(named("tfidf"))
    val embeddSummarizer by inject<Summarizer>(named("embedding"))
    val tfidf = "TfIdf"
    val embeddingClustering = "EmbeddingClustering"
    val models = listOf(tfidf, embeddingClustering)

    fun getModel(model: String?): Summarizer = when (model) {
        embeddingClustering -> embeddSummarizer
        else -> summarizer
    }

    fun summarize(summarizeReq: SummarizeReq, summarizeModel: Summarizer) = when {
        summarizeReq.ratio is Double -> summarizeModel.summarize(summarizeReq.text, summarizeReq.ratio)
        summarizeReq.lines is Int -> summarizeModel.summarize(summarizeReq.text, summarizeReq.lines)
        else -> summarizeModel.summarize(summarizeReq.text, 0.2)
    }

    post {
        val summarizeReq = call.receive<SummarizeReq>()
        val summary = summarize(summarizeReq, summarizer)
        call.respond(resultResponse(summary))
    }

    post("/{model}") {
        val summarizeModel = getModel(call.parameters["model"])
        val summarizeReq = call.receive<SummarizeReq>()
        val summary = summarize(summarizeReq, summarizeModel)
        call.respond(resultResponse(summary))
    }

    get("/models") {
        call.respond(ResultResponseArray(models))
    }
}

data class SummarizeReq(val text: String, val ratio: Double?, val lines: Int?)