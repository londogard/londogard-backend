package com.lundekhan.textgen

import com.londogard.textgen.LanguageModel
import com.londogard.textgen.PretrainedModels
import com.lundekhan.InvalidRouteException
import com.lundekhan.ResultResponseArray
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
import kotlinx.serialization.ImplicitReflectionSerializer
import org.koin.ktor.ext.inject

@ImplicitReflectionSerializer
fun Route.textgenRoute(): Route = route("/textgen") {
    val languageModel by inject<LanguageModel>()
    var currentModel: String = PretrainedModels.SHAKESPEARE.name
    val models by lazy {
        PretrainedModels
            .values()
            .filterNot { it == PretrainedModels.CUSTOM }
            .map { it.name }
    }

    post {
        val seedText = call.receive<TextGenInput>().text
        val genText = withContext(Dispatchers.Default) {
            languageModel.generateText(seedText, 150, 0.3)
        }

        call.respond(resultResponse(genText))
    }

    post("/{model}") {
        val seed = call.receive<TextGenInput>()
        val modelName = call.parameters["model"]

        if (currentModel != modelName && modelName != null) {
            currentModel = modelName
            val model = PretrainedModels
                .values()
                .find {  it.name == modelName } ?: throw InvalidRouteException("Model '${call.parameters["model"]}' does not exist.")
            languageModel.changeModelToPretrained(model)
        }

        val generatedText = withContext(Dispatchers.Default) {
            languageModel.generateText(seed.text, seed.tokens, seed.temperature)
        }

        call.respond(resultResponse(generatedText))
    }

    get("/models") {
        call.respond(ResultResponseArray(models))
    }
}

data class TextGenInput(val text: String, val temperature: Double = 0.3, val tokens: Int = 150)