package com.londogard.summarizer

import com.londogard.BackendModule
import com.londogard.summarize.summarizers.Summarizer
import com.londogard.gui.HtmlTemplates.respondHtmlShell
import io.ktor.server.application.call
import io.ktor.server.request.receiveParameters
import io.ktor.server.routing.Route
import io.ktor.server.routing.get
import io.ktor.server.routing.post
import io.ktor.server.routing.route
import kotlinx.html.*
import kotlinx.serialization.Serializable

fun summarize(summarizeReq: SummarizeReq, summarizeModel: Summarizer) = when {
    summarizeReq.ratio is Double -> summarizeModel.summarize(summarizeReq.text, summarizeReq.ratio / 100.0)
    summarizeReq.lines is Int -> summarizeModel.summarize(summarizeReq.text, summarizeReq.lines)
    else -> summarizeModel.summarize(summarizeReq.text, 0.2)
}

fun Route.summarizerRoute(): Route = route("/smry") {
    val summarizer = BackendModule.tfidf
    val embeddSummarizer = BackendModule.embedding
    val tfidf = "TfIdf"
    val embeddingClustering = "EmbeddingClustering"
    val models = listOf(tfidf, embeddingClustering)

    fun getModel(model: String?): Summarizer = when (model) {
        embeddingClustering -> embeddSummarizer
        else -> summarizer
    }

    // TODO make reduction & model be on one line if possible (FLEX / section)
    fun SECTION.summarizeForm(selectedItem: String, currentText: String?, reduction: String = "25") {
        form(method = FormMethod.post) {
            acceptCharset = "utf-8"
            header {
                style = "padding:0"
                h3 { +"smry." }
                p { +"Summarize your articles." }
                small { +"Select model & reduction where reduction is the approximate % you want to keep." }
            }
            section {
                label { +"Model | Reduction (%)" }
            }
            section {
                select {
                    name = "model"
                    (listOf(selectedItem) + models.filterNot { it == selectedItem }).forEach { modelName ->
                        option {
                            value = modelName
                            +modelName
                        }
                    }
                }

                numberInput(name = "reduction") {
                    min = "0"
                    max = "100"
                    step = "5"
                    value = reduction
                }
            }
            label { +"Input:" }
            textArea(rows = "3") {
                placeholder = "Insert article to summarize"
                name = "text"
                if (currentText != null) +currentText
            }

            postButton { +"Summarize" }
        }
    }

    get {
        call.respondHtmlShell("Summarizer 'Summarize Articles'") {
            section {
                summarizeForm(models.first(), null)
            }
        }
    }
    fun Double.round(decimals: Int = 2): Double = "%.${decimals}f".format(this).toDouble()

    post {
        val params = call.receiveParameters()
        val summary = summarize(SummarizeReq(params["text"]!!, params["reduction"]!!.toDouble(), null), getModel(params["model"]))
        val percentage = (summary.length.toDouble() * 100 / params["text"]!!.length).round(1)
        call.respondHtmlShell("Summarizer 'Summarize Articles'") {
            section {
                summarizeForm(params["model"]!!, params["text"]!!, params["reduction"]!!)
                aside {
                    style = "width:var(--width-card-wide)"
                    h3 { +"Summarized Article ($percentage %)" }
                    span {
                        style = "white-space: pre-wrap"
                        +summary
                    }
                }
            }
        }
    }
}

@Serializable data class SummarizeReq(val text: String, val ratio: Double? = null, val lines: Int? = null)