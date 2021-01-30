package com.londogard

import com.londogard.api.apiRoute
import com.londogard.auth.JwtConfig
import com.londogard.auth.authRoute
import com.londogard.blog.indexRoute
import com.londogard.gui.frontendRoute
import com.londogard.jwtauth.UserSource
import com.londogard.jwtauth.UserSourceImpl
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.auth.jwt.*
import io.ktor.features.*
import io.ktor.http.*
import io.ktor.http.cio.websocket.*
import io.ktor.http.content.*
import io.ktor.locations.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.serialization.*
import io.ktor.util.*
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.InternalSerializationApi
import kotlinx.serialization.json.Json
import kweb.Kweb
// import kweb.Kweb
import org.koin.ktor.ext.Koin
import org.koin.ktor.ext.inject
// import java.time.Duration
import java.time.LocalDateTime
import io.ktor.websocket.WebSockets
import org.slf4j.event.Level
import java.time.Duration

fun main(args: Array<String>): Unit = io.ktor.server.netty.EngineMain.main(args)

/**
 * Session of this site, that just contains the [userId].
 */
data class LundeNetSession(val userId: String)


@InternalSerializationApi
@ExperimentalStdlibApi
@ExperimentalSerializationApi
@KtorExperimentalAPI
@KtorExperimentalLocationsAPI
@InternalAPI
@Suppress("unused") // Referenced in application.conf
fun Application.module() {
    install(DefaultHeaders)     // Automatic Date & Server Head to each response. Possible to config additional headers
    install(CallLogging) {        // This uses use the logger to log every call (request/response)
//        level = Level.DEBUG
    }
    install(ConditionalHeaders) // Automatic '304 Not Modified' Responses
    //install(WebSockets) {
    //    pingPeriod = Duration.ofSeconds(10)
    //    timeout = Duration.ofSeconds(30)
    //}
    install(PartialContent)     // Supports for Range, Accept-Range and Content-Range headers
    install(Locations)
    // install(Kweb)
    install(Compression)

    val redirectionCache = mutableMapOf<String, String>()
    val lines = javaClass.getResourceAsStream("/fuzzy-filenames.txt").bufferedReader().readLines()

    install(Koin) {
        if (environment.config.propertyOrNull("ktor.deployment.environment")?.getString() == "test")
            modules(testModule)
        else modules(backendModule)
    }

    // Default: [Accept, AcceptLanguages, ContentLanguage, ContentType]
    install(CORS) {
        anyHost()
        method(HttpMethod.Options)
        allowNonSimpleContentTypes = true
        allowCredentials = true
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

    install(ContentNegotiation) {
        json(Json {
            prettyPrint = true
            isLenient = true
        })
    }

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

        apiRoute(redirectionCache)
        frontendRoute(redirectionCache, lines)
        authRoute(userSource)

        static {
            resource("favicon.ico", "favicon.ico")
            resource("rss.svg", "rss.svg")
            resource("css", "mvp.css")
            resource("hampus", "hampus.jpg")
        }
    }
}
