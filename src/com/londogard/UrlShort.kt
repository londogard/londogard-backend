package com.londogard

import com.londogard.gui.HtmlTemplates.copyScript
import com.londogard.gui.HtmlTemplates.respondHtmlShell
import io.ktor.server.request.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import kotlinx.html.*
import kotlinx.serialization.Serializable


fun Route.urlShort(redirections: MutableMap<String, String>): Route = route("/url") {
    val db = BackendModule.db

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

    get { context.respondHtmlShell("URL Shortener") { section { urlForm() } } }

    post {
        val params = context.receiveParameters()
        val url = params["url"]!!
        val hash = url.hashHexify()

        redirections.putIfAbsent(hash, url)
        launch(Dispatchers.IO) {
            db.urlQueries.select(url).executeAsOneOrNull() ?: db.urlQueries.insert(url, hash)
        }
        context.respondHtmlShell("URL Shortener") {
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
        val shortened = context.parameters["short"] ?: ""
        val fullUrl = withContext(Dispatchers.IO) {
            redirections[shortened] ?: db.urlQueries.selectByHash(shortened).executeAsOneOrNull()?.full_url
        }

        context.respondRedirect(fullUrl ?: "/#/url")
    }
}

@Serializable data class UrlInput(val url: String)