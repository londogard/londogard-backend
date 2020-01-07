package com.lundekhan.textgen

import com.londogard.textgen.LanguageModel
import com.lundekhan.htmltemplates.respondHtmlDefault
import com.lundekhan.resultResponse
import io.ktor.application.call
import io.ktor.request.receive
import io.ktor.response.respond
import io.ktor.routing.Route
import io.ktor.routing.get
import io.ktor.routing.post
import io.ktor.routing.route
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import kotlinx.html.*
import kotlinx.serialization.ImplicitReflectionSerializer
import org.koin.ktor.ext.inject
import kotlin.system.measureTimeMillis

@ImplicitReflectionSerializer
fun Route.textgenRoute(): Route = route("/textgen") {
    val languageModel by inject<LanguageModel>()

    post {
        val seedText = call.receive<TextGenInput>().text
        val genText = withContext(Dispatchers.Default) {
            languageModel.generateText(seedText, 150, 0.3)
        }

        call.respond(resultResponse(genText))
    }

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
            val articleText = call.receive<TextGenInput>().text
            val result = languageModel.generateText(articleText, 150)
            return@post call.respondHtmlDefault("textgen.", 3) {
                pre { +result }
            }
        }
    }
}

data class TextGenInput(val text: String)