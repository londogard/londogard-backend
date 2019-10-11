package com.lundekhan.summarizer

import com.lundekhan.htmltemplates.respondHtmlDefault
import io.ktor.application.call
import io.ktor.http.HttpStatusCode
import io.ktor.request.receiveParameters
import io.ktor.response.respond
import io.ktor.routing.Route
import io.ktor.routing.get
import io.ktor.routing.post
import io.ktor.routing.route
import kotlinx.html.*

fun Route.SummarizerRoute() {
    val summarizer = TfIdfSummarizer()

    route("/smry") {
        get {
            call.respondHtmlDefault("smry.", 2) {
                p { +"Smry. Summarize your text here (currently only support simple-version of smry)" }
                form(encType = FormEncType.applicationXWwwFormUrlEncoded, method = FormMethod.post) {
                    input {
                        type = InputType.text
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
            val personAmount = call
                .receiveParameters()["text"] ?: return@post call.respond(
                HttpStatusCode.BadRequest,
                "Need to supply text."
            )
            val result = summarizer.parse(personAmount)
            return@post call.respondHtmlDefault("smry.", 2) {
                p { +result }
            }
        }
    }
}
