package com.lundekhan.textgen

import com.londogard.textgen.LanguageModel
import com.londogard.textgen.PretrainedModels
import com.lundekhan.InvalidRouteException
import io.ktor.application.ApplicationCall
import io.ktor.application.call
import io.ktor.util.pipeline.PipelineContext
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext

internal data class TextGenInput(val text: String, val temperature: Double = 0.3, val tokens: Int = 150)
// TODO extract into there.
// internal suspend fun PipelineContext<Unit, ApplicationCall>.summarize(currentModel: String, languageModel: LanguageModel): String {
//     val modelName = call.parameters["model"]
//     if (currentModel != modelName && modelName != null) {
//         // currentModel = modelName
//         val model = PretrainedModels
//             .values()
//             .find {  it.name == modelName } ?: throw InvalidRouteException("Model '${call.parameters["model"]}' does not exist.")
//         languageModel.changeModelToPretrained(model)
//     }
//
//     val generatedText = withContext(Dispatchers.Default) {
//         languageModel.generateText(seed.text, seed.tokens, seed.temperature)
//     }
// }
