package com.lundekhan.summarizer

import com.londogard.summarize.summarizers.Summarizer
import com.lundekhan.ResultResponseArray
import com.lundekhan.gui.HtmlTemplates
import com.lundekhan.gui.HtmlTemplates.Shell
import com.lundekhan.resultResponse
import io.ktor.application.call
import io.ktor.html.respondHtml
import io.ktor.request.receive
import io.ktor.request.receiveParameters
import io.ktor.response.respond
import io.ktor.routing.Route
import io.ktor.routing.get
import io.ktor.routing.post
import io.ktor.routing.route
import kotlinx.html.*
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
    // TODO make reduction & model be on one line if possible (FLEX / section)
    fun SECTION.summarizeForm(selectedItem: String?, currentText: String?) {
        form(method = FormMethod.post) {
            acceptCharset = "utf-8"
            header {
                style = "padding:0"
                h3 { +"smry." }
                p { +"Summarize your articles" }
            }
            label { +"Model:" }
            select {
                name = "model"
                models.forEach {
                    option {
                        value = it
                        +it
                    }
                }
            }
            label { +"Input:" }
            textArea(rows = "3", cols = "28") {
                name = "text"
                currentText?.let { +it }
            }
            label { +"Reduction (X = lines, 0.Y = percentage)" }
            numberInput(name="reduction") { min = "0" }

            submitInput { value = "Summarize" }
        }
    }


    get {
        call.respondHtml {
            Shell() { section { summarizeForm(null, null) } }
        }
    }
    post {
        val params = call.receiveParameters()
        call.respondHtml { Shell() { section {
            summarizeForm(params["model"], params["text"])
            aside {
                style = "width:var(--width-card-wide)"
                + summarize(SummarizeReq(params["text"]!!, 0.25, null), getModel(params["model"]))
            }
        } } }
    }



    route("/api") {
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
}
data class SummarizeReq(val text: String, val ratio: Double?, val lines: Int?)