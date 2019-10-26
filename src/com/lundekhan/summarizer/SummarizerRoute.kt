package com.lundekhan.summarizer

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
        call.respond(resultResponse(summarizer.parse(articleText.text)))
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
            val result = summarizer.parse(articleText)
            return@post call.respondHtmlDefault("smry.", 2) {
                pre { +result }
            }
        }

    }
}
data class PostText(val text: String)