package com.lundekhan

import com.lundekhan.htmltemplates.respondHtmlDefault
import io.ktor.application.call
import io.ktor.http.HttpStatusCode
import io.ktor.request.receiveParameters
import io.ktor.response.respond
import io.ktor.response.respondRedirect
import io.ktor.routing.Route
import io.ktor.routing.get
import io.ktor.routing.post
import io.ktor.routing.route
import io.ktor.util.InternalAPI
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.html.*
import org.koin.ktor.ext.inject


fun Route.urlShort(redirections: MutableMap<String, String>): Route = route("/url") {
    val db by inject<Database>()

    post {
        val url = call.receiveParameters()["url"] ?: throw InvalidInputException("POST /url - URL must be supplied")
        val hash = url.hashHexify()
        redirections.putIfAbsent(hash, url)
        launch(Dispatchers.IO) { db.urlQueries.select(url).executeAsOneOrNull() ?: db.urlQueries.insert(url, hash) }

        call.respond(resultResponse(hash))
    }

    get("/{short}") {
        val shortened = call.parameters["short"] ?: ""
        val fullUrl = redirections[shortened]

        call.respondRedirect(fullUrl ?: "/url-short")
    }
    route("/ui") {
        get {
            call.respondHtmlDefault("Url-Short", 1) {
                h1 { +"Url-Short" }
                p { +"Add url to shorten" }
                form(encType = FormEncType.applicationXWwwFormUrlEncoded, method = FormMethod.post) {
                    input {
                        type = InputType.url
                        name = "url"
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
            val url = call.receiveParameters()["url"] ?: throw InvalidInputException("POST /url - URL must be supplied")
            val hash = url.hashHexify()
            redirections.putIfAbsent(hash, url)
            launch(Dispatchers.IO) { db.urlQueries.select(url).executeAsOneOrNull() ?: db.urlQueries.insert(url, hash) }

            call.respondHtmlDefault("Url-Short", 1) {
                h1 { +"Url-Short" }
                p { +"Shortend URL:" }
                input {
                    type = InputType.url
                    name = "shortened-url"
                    value = "londogard.hopto.org/url/$hash"
                }
                br()
                p { +hash }
            }
        }
    }
}