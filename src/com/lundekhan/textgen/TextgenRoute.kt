package com.lundekhan.textgen

import com.lundekhan.InvalidInputException
import com.lundekhan.htmltemplates.respondHtmlDefault
import io.ktor.application.call
import io.ktor.request.receiveParameters
import io.ktor.routing.Route
import io.ktor.routing.get
import io.ktor.routing.post
import io.ktor.routing.route
import kotlinx.html.*
import kotlinx.serialization.ImplicitReflectionSerializer
import org.koin.ktor.ext.inject

@ImplicitReflectionSerializer
fun Route.textgenRoute(): Route = route("/textgen") {
    val languageModel by inject<LanguageModel>()

    route("/ui"){
        get {
            call.respondHtmlDefault("textgen.", 3) {
                p { +"Generate text (Shakespearean)" }
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
            val articleText = call
                .receiveParameters()["text"] ?: throw InvalidInputException("POST /textgen/ui requires text in parameters.")
            val result = languageModel.generateTextByChar(articleText)
            return@post call.respondHtmlDefault("textgen.", 3) {
                pre { +result }
            }
        }
    }
}