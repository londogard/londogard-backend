package com.londogard

import com.londogard.gui.HtmlTemplates.respondHtmlShell
import io.ktor.server.application.call
import io.ktor.server.request.receive
import io.ktor.server.request.receiveParameters
import io.ktor.server.response.respond
import io.ktor.server.routing.Route
import io.ktor.server.routing.get
import io.ktor.server.routing.post
import io.ktor.server.routing.route
import kotlinx.html.*

fun Route.fuzzyRoute(lines: List<String>): Route = route("/fuzsearch") {
    val fuzzyMatcher = BackendModule.fuzzyMatcher

    fun MAIN.fuzzyForm(text: String?): Unit = section {
        form(method = FormMethod.post) {
            header {
                style = "padding:0"
                h3 { +"fuzsearch." }
                p { +"Fuzzy search C-files." }
                small { +"Example: 'IDK' would find '[I]ntense[D]eep[K]nowledge', '[idk]' or '[i]we[dk]' & so on." }
            }
            section {
                textInput(name = "keyword") {
                    placeholder = "Search (try IDK out!)"
                    if (text != null) value = text
                }
                postButton { +"Search" }
            }
        }
    }

    get { call.respondHtmlShell("Fuzzy Search") { fuzzyForm(null) } }

    post {
        val keyword = call.receiveParameters()["keyword"]
        val fuzzyMatches = fuzzyMatcher
            .fuzzyMatch(lines, keyword ?: "")
            .mapNotNull { it.text }
        call.respondHtmlShell("") {
            fuzzyForm(keyword)
            section {
                aside {
                    p { fuzzyMatches.forEach { match ->
                        +match
                        br {  }
                    } }
                }
            }
        }
    }

    route("/api") {
        post {
            val keyword = call.receive<SearchPost>().keyword
            val fuzzyMatches = fuzzyMatcher
                .fuzzyMatch(lines, keyword)
                .mapNotNull { it.text }

            call.respond(ResultResponseArray(fuzzyMatches))
        }
    }
}

data class SearchPost(val keyword: String)