package com.lundekhan

import com.lundekhan.gui.HtmlTemplates.Shell
import com.lundekhan.gui.HtmlTemplates.copyScript
import io.ktor.application.call
import io.ktor.html.respondHtml
import io.ktor.request.receive
import io.ktor.request.receiveParameters
import io.ktor.response.respond
import io.ktor.response.respondRedirect
import io.ktor.routing.Route
import io.ktor.routing.get
import io.ktor.routing.post
import io.ktor.routing.route
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import kotlinx.html.*
import org.koin.ktor.ext.inject


fun Route.urlShort(redirections: MutableMap<String, String>): Route = route("/url") {
    val db by inject<Database>()

    fun SECTION.urlForm(url: String = "", hash: String? = null): Unit = form(method = FormMethod.post) {
        textInput {
            name = "url"
            if (url.isEmpty()) placeholder = "https://londogard.com"
            else value = url
        }
        submitInput { }
    }
    //  // <input type="text" value="Hello World" id="myInput">
    //                            // <button onclick="myFunction()">Copy text</button>

    get {
        call.respondHtml {
            Shell() {
                section { urlForm() }
            }
        }
    }

    post {
        val params = call.receiveParameters()
        val url = params["url"]!!
        val hash = url.hashHexify()

        redirections.putIfAbsent(hash, url)
        launch(Dispatchers.IO) {
            db.urlQueries.select(url).executeAsOneOrNull() ?: db.urlQueries.insert(url, hash)
        }
        call.respondHtml {
            Shell() {
                section { urlForm(url, hash) }
                br { }
                section {
                    hash.let { nonNullHash ->
                        textInput() {
                            id = "myInput"
                            value = "https://londogard.com/url/$nonNullHash"
                        }
                        button {
                            style = "margin-bottom:1rem"
                            onClick = "myFunction()"
                            +"\uD83D\uDCCB"
                        }
                    }
                }
                copyScript()
            }
        }
    }

    get("/{short}") {
        val shortened = call.parameters["short"] ?: ""
        val fullUrl = withContext(Dispatchers.IO) {
            redirections[shortened] ?: db.urlQueries.selectByHash(shortened).executeAsOneOrNull()?.full_url
        }

        call.respondRedirect(fullUrl ?: "/#/url")
    }

    route("/api") {
        post {
            val url = call.receive<UrlInput>().url
            val hash = url.hashHexify()

            redirections.putIfAbsent(hash, url)
            launch(Dispatchers.IO) {
                db.urlQueries.select(url).executeAsOneOrNull() ?: db.urlQueries.insert(url, hash)
            }

            call.respond(resultResponse(hash))
        }
    }
}

data class UrlInput(val url: String)