package com.lundekhan

import com.fasterxml.jackson.databind.SerializationFeature
import com.lundekhan.api.apiRoute
import com.lundekhan.auth.JwtConfig
import com.lundekhan.auth.authRoute
import com.lundekhan.blog.blogOverview
import com.lundekhan.blog.indexRoute
import com.lundekhan.gui.HtmlTemplates.respondHtmlShell
import com.lundekhan.gui.frontendRoute
import com.lundekhan.jwtauth.UserSource
import com.lundekhan.jwtauth.UserSourceImpl
import io.ktor.application.Application
import io.ktor.application.ApplicationCall
import io.ktor.application.call
import io.ktor.application.install
import io.ktor.auth.Authentication
import io.ktor.auth.jwt.JWTPrincipal
import io.ktor.auth.jwt.jwt
import io.ktor.features.*
import io.ktor.http.CacheControl
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.content.CachingOptions
import io.ktor.http.content.resource
import io.ktor.http.content.static
import io.ktor.jackson.jackson
import io.ktor.locations.KtorExperimentalLocationsAPI
import io.ktor.response.respondRedirect
import io.ktor.routing.Routing
import io.ktor.routing.get
import io.ktor.routing.routing
import io.ktor.util.InternalAPI
import io.ktor.util.KtorExperimentalAPI
import io.ktor.util.toLocalDateTime
import kotlinx.serialization.ExperimentalSerializationApi
import org.koin.ktor.ext.Koin
import org.koin.ktor.ext.inject
import java.time.LocalDateTime


fun main(args: Array<String>): Unit = io.ktor.server.netty.EngineMain.main(args)

/**
 * Session of this site, that just contains the [userId].
 */
data class LundeNetSession(val userId: String)


@ExperimentalSerializationApi
@KtorExperimentalAPI
@KtorExperimentalLocationsAPI
@InternalAPI
@Suppress("unused") // Referenced in application.conf
fun Application.module() {
    install(DefaultHeaders)     // Automatic Date & Server Head to each response. Possible to config additional headers
    install(CallLogging)        // This uses use the logger to log every call (request/response)
    install(ConditionalHeaders) // Automatic '304 Not Modified' Responses
    install(PartialContent)     // Supports for Range, Accept-Range and Content-Range headers

    val redirectionMap = mutableMapOf<String, String>() // Something like cache really
    val lines = javaClass.getResourceAsStream("/fuzzy-filenames.txt").bufferedReader().readLines()

    install(Koin) {
        if (environment.config.propertyOrNull("ktor.deployment.environment")?.getString() == "test")
            modules(testModule)
        else modules(backendModule)
    }

    install(CORS) {
        header(HttpHeaders.Authorization)
        allowCredentials = true
        anyHost()
    }

    install(StatusPages) { getExceptionResponses() }

    val db by inject<Database>()
    val userSource: UserSource = UserSourceImpl(db.userQueries)
    JwtConfig.initAlgo(environment.config.propertyOrNull("security.secret")?.getString())

    install(Authentication) {
        /**
         * Setup the JWT authentication to be used in [Routing].
         * If the token is valid, the corresponding [JWTPrincipal] is fetched from the database.
         * The [JWTPrincipal] can then be accessed in each [ApplicationCall].
         */
        jwt {
            verifier(JwtConfig.verifier)
            realm = "londogard.com"
            validate { credential ->
                val isValid = LocalDateTime.now().isBefore(credential.payload.expiresAt.toLocalDateTime())

                if (isValid && credential.payload.claims["id"]?.asLong()?.let(userSource::findUserById) != null)
                    JWTPrincipal(credential.payload) // TODO perhaps we'd prefer to use User or something
                else null
            }
        }
    }

    install(ContentNegotiation) { jackson { enable(SerializationFeature.INDENT_OUTPUT) } }

    if (environment.config.propertyOrNull("ktor.deployment.sslPort") != null) {
        install(HttpsRedirect)
        install(HSTS)
    }

    install(CachingHeaders) {
        options { outgoingContent ->
            when (outgoingContent.contentType?.withoutParameters()) {
                ContentType.Text.CSS -> CachingOptions(CacheControl.MaxAge(maxAgeSeconds = 24 * 60 * 60))
                ContentType.Application.Rss -> CachingOptions(CacheControl.MaxAge(maxAgeSeconds = 24 * 60 * 60))
                ContentType.Image.XIcon -> CachingOptions(CacheControl.MaxAge(maxAgeSeconds = 24 * 60 * 60))
                else -> null
            }
        }
    }

    routing {
        indexRoute()
        get("/github") { call.respondRedirect("https://github.com/londogard/") }
        get("/apps") { call.respondRedirect("https://play.google.com/store/apps/developer?id=Londogard") }

        apiRoute(redirectionMap)
        frontendRoute(redirectionMap, lines)
        authRoute(userSource)

        static {
            resource("favicon.ico", "favicon.ico")
            resource("rss.svg", "rss.svg")
            resource("css", "mvp.css")
            resource("hampus", "hampus.jpg")
        }
    }
}
