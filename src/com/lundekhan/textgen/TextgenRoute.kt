package com.lundekhan.textgen

import com.londogard.textgen.LanguageModel
import com.lundekhan.resultResponse
import io.ktor.application.call
import io.ktor.request.receive
import io.ktor.response.respond
import io.ktor.routing.Route
import io.ktor.routing.post
import io.ktor.routing.route
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import kotlinx.serialization.ImplicitReflectionSerializer
import org.koin.ktor.ext.inject

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
}

data class TextGenInput(val text: String)