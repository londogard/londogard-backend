package com.londogard

import com.londogard.gui.HtmlTemplates.copyScript
import com.londogard.gui.HtmlTemplates.respondHtmlShell
import io.ktor.application.call
import io.ktor.request.receiveParameters
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

    fun SECTION.urlForm(url: String? = null): Unit = form(method = FormMethod.post) {
        header {
            style = "padding:0;"
            h3 { +"urlshort." }
            small { +"Shorten urls and use them to send smaller urls to your favorite webpages!" }
        }
        section {
            textInput {
                name = "url"
                placeholder = "url (e.g. https://londogard.com)"
                if (url != null) value = url
            }
            postButton { +"Shorten" }
        }
    }

    get { call.respondHtmlShell("URL Shortener") { section { urlForm() } } }

    post {
        val params = call.receiveParameters()
        val url = params["url"]!!
        val hash = url.hashHexify()

        redirections.putIfAbsent(hash, url)
        launch(Dispatchers.IO) {
            db.urlQueries.select(url).executeAsOneOrNull() ?: db.urlQueries.insert(url, hash)
        }
        call.respondHtmlShell("URL Shortener") {
            section { urlForm(url) }
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

    get("/{short}") {
        val shortened = call.parameters["short"] ?: ""
        val fullUrl = withContext(Dispatchers.IO) {
            redirections[shortened] ?: db.urlQueries.selectByHash(shortened).executeAsOneOrNull()?.full_url
        }

        call.respondRedirect(fullUrl ?: "/#/url")
    }
}

data class UrlInput(val url: String)