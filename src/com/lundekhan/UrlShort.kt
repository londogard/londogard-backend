package com.lundekhan

import io.ktor.application.call
import io.ktor.request.receive
import io.ktor.response.respond
import io.ktor.response.respondRedirect
import io.ktor.routing.Route
import io.ktor.routing.get
import io.ktor.routing.post
import io.ktor.routing.route
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import org.koin.ktor.ext.inject


fun Route.urlShort(redirections: MutableMap<String, String>): Route = route("/url") {
    val db by inject<Database>()

    post {
        val url = call.receive<UrlInput>().url
        val hash = url.hashHexify()

        redirections.putIfAbsent(hash, url)
        launch(Dispatchers.IO) {
            db.urlQueries.select(url).executeAsOneOrNull() ?: db.urlQueries.insert(url, hash)
        }

        call.respond(resultResponse(hash))
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