
package com.londogard.textgen

import com.londogard.textgen.search.TopKSampleSearch
import com.londogard.gui.HtmlTemplates.respondHtmlShell
import com.londogard.textgen.LanguageModelHelper.LanguageModels
import io.ktor.application.*
import io.ktor.request.*
import io.ktor.routing.Route
import io.ktor.routing.get
import io.ktor.routing.post
import io.ktor.routing.route
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import kotlinx.html.*
import kotlinx.serialization.ExperimentalSerializationApi

internal data class TextGenInput(val text: String, val temperature: Double = 0.3, val tokens: Int = 150)

@ExperimentalSerializationApi
fun Route.textgenRoute(): Route = route("/textgen") {
    val topKSample = TopKSampleSearch(5)
    fun MAIN.textgenForm(selectedItem: String, currentText: String?, temperature: String, tokens: String = "250"): Unit =
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
                        (listOf(selectedItem) + LanguageModels.filterNot { it == selectedItem }).forEach { modelName ->
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

    get { call.respondHtmlShell("Text Generation") { textgenForm(LanguageModels.first(), null, "0.2") } }

    post {
        val params = call.receiveParameters()
        val modelName = params["model"] ?: LanguageModels.first()
        val languageModel = LanguageModelHelper.getRelevantLanguageModel(modelName)

        val generatedText = withContext(Dispatchers.Default) {
            val numTokens = params["tokens"]?.let(String::toIntOrNull) ?: 250
            val seed = params["seed"] ?: ""
            val temperature = params["temperature"]?.let(String::toDoubleOrNull) ?: 0.2

            SimpleTextGeneration
                .generateText(languageModel, numTokens = numTokens, temperature = temperature, seed = seed, searchTechnique = topKSample)
                .joinToString()
        }
        call.respondHtmlShell("Text Generation") { // TODO make nullable inputs and default in template
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