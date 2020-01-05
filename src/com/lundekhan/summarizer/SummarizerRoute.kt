package com.lundekhan.summarizer

import com.londogard.summarize.summarizers.TfIdfSummarizer
import com.lundekhan.InvalidInputException
import com.lundekhan.htmltemplates.respondHtmlDefault
import com.lundekhan.resultResponse
import io.ktor.application.call
import io.ktor.request.receive
import io.ktor.request.receiveParameters
import io.ktor.response.respond
import io.ktor.routing.Route
import io.ktor.routing.get
import io.ktor.routing.post
import io.ktor.routing.route
import kotlinx.html.*
import org.koin.ktor.ext.inject

fun Route.summarizerRoute(): Route = route("/smry") {
    val summarizer by inject<TfIdfSummarizer>()

    post {
        val articleText = call.receive<PostText>()
        call.respond(resultResponse(summarizer.summarize(articleText.text, 0.2)))
    }

    route("/ui") {
        get {
            call.respondHtmlDefault("smry.", 2) {
                p { +"Smry. Summarize your text here (currently only support simple-version of smry)" }
                form(encType = FormEncType.applicationXWwwFormUrlEncoded, method = FormMethod.post) {
                    hardTextArea {
                        //type = InputType.text
                        name = "text"
                    }
                    br
                    input {
                        type = InputType.submit
                        value = "submit"
                    }
                }
            }
        }
        post {
            val articleText = call
                .receiveParameters()["text"] ?: throw InvalidInputException("POST /smry/ui requires text in parameters.")
            val result = summarizer.summarize(articleText, 0.2)
            return@post call.respondHtmlDefault("smry.", 2) {
                pre { +result }
            }
        }

    }
}
data class PostText(val text: String) // TODO add ratio or sentences to this!