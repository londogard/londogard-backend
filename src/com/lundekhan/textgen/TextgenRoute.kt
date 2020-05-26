package com.lundekhan.textgen

import com.londogard.textgen.LanguageModel
import com.londogard.textgen.PretrainedModels
import com.lundekhan.InvalidRouteException
import com.lundekhan.gui.HtmlTemplates.respondHtmlShell
import io.ktor.application.call
import io.ktor.request.receiveParameters
import io.ktor.routing.Route
import io.ktor.routing.get
import io.ktor.routing.post
import io.ktor.routing.route
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import kotlinx.html.*
import kotlinx.serialization.ImplicitReflectionSerializer
import org.koin.ktor.ext.inject

internal data class TextGenInput(val text: String, val temperature: Double = 0.3, val tokens: Int = 150)

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

    fun MAIN.textgenForm(selectedItem: String, currentText: String?, temperature: String, tokens: String = "10"): Unit =
        section {
            form(method = FormMethod.post) {
                acceptCharset = "utf-8"
                header {
                    style = "padding:0"
                    h3 { +"textgen." }
                    p { +"Generate text from pre-built models!" }
                    small { +"Tokens is the number of words to generate. Temperature is how crazy you'd like it (1.0 = maximum)" }
                }
                section {
                    label { +"Model | Tokens | Temperature" }
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
                    numberInput(name = "tokens") {
                        min = "0"
                        step = "10"
                        value = tokens
                    }
                    numberInput(name = "temperature") {
                        min = "0"
                        max = "1"
                        step = "0.05"
                        value = temperature
                    }
                }
                label { +"Seed:" }
                textInput(name = "seed") {
                    placeholder = "Seed (e.g. 'Help the princess')"
                    if (currentText != null) value = currentText
                }
                postButton { +"Generate" }
            }
        }

    get { call.respondHtmlShell { textgenForm(models.first(), null, "0.2") } }
    post {
        val params = call.receiveParameters()
        val modelName = params["model"]
        if (currentModel != modelName && modelName != null) {
            currentModel = modelName
            val model = PretrainedModels
                .values()
                .find { it.name == modelName }
                ?: throw InvalidRouteException("Model '${call.parameters["model"]}' does not exist.")
            languageModel.changeModelToPretrained(model)
        }

        val generatedText = withContext(Dispatchers.Default) {
            languageModel.generateText(params["seed"]!!, params["tokens"]!!.toInt(), params["temperature"]!!.toDouble())
        }
        call.respondHtmlShell { // TODO make nullable inputs and default in template
            textgenForm(params["model"]!!, params["seed"]!!, params["temperature"]!!, params["tokens"]!!)
            section {
                aside {
                    style = "width:var(--width-card-wide)"
                    h3 { +"Generated Text" }
                    span {
                        style = "white-space: pre-wrap"
                        +generatedText
                    }
                }
            }
        }
    }
}