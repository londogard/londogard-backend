package com.lundekhan

import com.fasterxml.jackson.databind.SerializationFeature
import com.lundekhan.auth.JwtConfig
import com.lundekhan.auth.authRoute
import com.lundekhan.billsplitter.billsplit
import com.lundekhan.blog.blogRoute
import com.lundekhan.gui.routing
import com.lundekhan.jwtauth.UserSource
import com.lundekhan.jwtauth.UserSourceImpl
import com.lundekhan.jwtauth.principal
import com.lundekhan.summarizer.summarizerRoute
import com.lundekhan.textgen.textgenRoute
import io.ktor.application.Application
import io.ktor.application.ApplicationCall
import io.ktor.application.call
import io.ktor.application.install
import io.ktor.auth.Authentication
import io.ktor.auth.authenticate
import io.ktor.auth.jwt.JWTPrincipal
import io.ktor.auth.jwt.jwt
import io.ktor.features.*
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpStatusCode
import io.ktor.jackson.jackson
import io.ktor.locations.KtorExperimentalLocationsAPI
import io.ktor.response.respond
import io.ktor.response.respondRedirect
import io.ktor.routing.*
import io.ktor.util.InternalAPI
import io.ktor.util.KtorExperimentalAPI
import io.ktor.util.toLocalDateTime
import kotlinx.serialization.ImplicitReflectionSerializer
import org.koin.ktor.ext.Koin
import org.koin.ktor.ext.inject
import java.sql.SQLException
import java.time.LocalDateTime


fun main(args: Array<String>): Unit = io.ktor.server.netty.EngineMain.main(args)

/**
 * Session of this site, that just contains the [userId].
 */
data class LundeNetSession(val userId: String)


@KtorExperimentalAPI
@ImplicitReflectionSerializer
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
    environment.config.propertyOrNull("security.secret")?.getString()
        ?.let(JwtConfig::initAlgo)
        ?: JwtConfig.initAlgo("londogard-test-secret")

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

    // TODO perhaps when in prod we shouldn't indent output (saving minor CPU)
    install(ContentNegotiation) { jackson { enable(SerializationFeature.INDENT_OUTPUT) } }

    if (environment.config.propertyOrNull("ktor.deployment.sslPort") != null) {
        install(HttpsRedirect)
        install(HSTS)
    }

    routing {
        routing()
        billsplit()
        urlShort(redirectionMap)
        summarizerRoute()
        textgenRoute()
        blogRoute()
        fuzzyRoute(lines)
        authRoute(userSource)
        stockRoute()

        get("/github") { call.respondRedirect("https://github.com/londogard/") }
        get("/apps") { call.respondRedirect("https://play.google.com/store/apps/developer?id=Londogard") }

        /**
         * All [Route]s in the authentication block are secured.
         */
        authenticate {
            route("secret") {
                get {
                    val user = call.principal
                    call.respond(
                        userSource.findUserById(user?.payload?.getClaim("id")?.asLong() ?: -1)?.name ?: "User Not Found"
                    )
                }
            }
        }
    }
}
