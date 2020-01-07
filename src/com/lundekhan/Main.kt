package com.lundekhan

import com.fasterxml.jackson.databind.SerializationFeature
import com.lundekhan.billsplitter.billsplit
import com.lundekhan.htmltemplates.respondHtmlDefault
import com.lundekhan.jwtauth.UserSource
import com.lundekhan.jwtauth.UserSourceImpl
import com.lundekhan.jwtauth.user
import com.lundekhan.summarizer.summarizerRoute
import com.lundekhan.textgen.textgenRoute
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.auth.jwt.jwt
import io.ktor.features.*
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpMethod
import io.ktor.http.HttpStatusCode
import io.ktor.http.content.default
import io.ktor.http.content.resource
import io.ktor.http.content.resources
import io.ktor.http.content.static
import io.ktor.jackson.jackson
import io.ktor.locations.KtorExperimentalLocationsAPI
import io.ktor.request.receive
import io.ktor.response.respond
import io.ktor.response.respondRedirect
import io.ktor.response.respondText
import io.ktor.routing.*
import io.ktor.sessions.*
import io.ktor.util.InternalAPI
import io.ktor.util.KtorExperimentalAPI
import kotlinx.serialization.ImplicitReflectionSerializer
import org.koin.ktor.ext.Koin

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
    // This adds automatically Date and Server headers to each response, and would allow you to configure
    // additional headers served to each response.
    install(DefaultHeaders)
    // This uses use the logger to log every call (request/response)
    install(CallLogging)
    // Automatic '304 Not Modified' Responses
    install(ConditionalHeaders)
    // Supports for Range, Accept-Range and Content-Range headers
    install(PartialContent)

    val redirectionMap = mutableMapOf<String, String>()
    install(Koin) {
        //        sl4jlogger()
        modules(groceryModule)
    }

    val simpleJwt = SimpleJWT("londogard-backend-secret")

    install(CORS) {
        method(HttpMethod.Options)
        method(HttpMethod.Get)
        method(HttpMethod.Post)
        method(HttpMethod.Put)
        method(HttpMethod.Delete)
        method(HttpMethod.Patch)
        header(HttpHeaders.Authorization)
        allowCredentials = true
        anyHost()
    }

    install(StatusPages) {
        exception<InvalidCredentialsException> { exception ->
            call.respond(HttpStatusCode.Unauthorized, mapOf("OK" to false, "error" to (exception.message ?: "")))
        }
        exception<InvalidInputException> { exception ->
            call.respond(HttpStatusCode.BadRequest, mapOf("OK" to false, "error" to (exception.message ?: "")))
        }
    }

    val jwtIssuer = environment.config.property("jwt.domain").getString()
    val jwtAudience = environment.config.property("jwt.audience").getString()
    val jwtRealm = environment.config.property("jwt.realm").getString()
    val userSource: UserSource = UserSourceImpl()

    install(Authentication) {
        basic(name = "fileauth") {
            skipWhen { call -> call.sessions.get<UserIdPrincipal>() != null }
            realm = "Ktor Server"
            validate { if (it.name == "londogard" && it.password == "") UserIdPrincipal("user") else null }
        }

        /**
         * Setup the JWT authentication to be used in [Routing].
         * If the token is valid, the corresponding [User] is fetched from the database.
         * The [User] can then be accessed in each [ApplicationCall].
         */
        jwt {
            verifier(JwtConfig.verifier)
            realm = "ktor.io"
            validate {
                it.payload.getClaim("id").asInt()?.let(userSource::findUserById)
            }
        }
        //jwt("jwt") {
        //    verifier(simpleJwt.verifier) // TODO swap to JwtConfig
        //    validate {
        //        UserIdPrincipal(it.payload.getClaim("name").asString())
        //    }
        //}
    }

    install(ContentNegotiation) {
        jackson { enable(SerializationFeature.INDENT_OUTPUT) }
    }

    if (environment.config.propertyOrNull("ktor.deployment.sslPort") != null) {
        install(HttpsRedirect)
    }

    routing {
        reactStaticRoute()
        billsplit()
        urlShort(redirectionMap)
        summarizerRoute()
        textgenRoute()

        get("/github") {
            call.respondRedirect("https://github.com/londogard/")
        }
        get("/apps") {
            call.respondRedirect("https://play.google.com/store/apps/developer?id=Londogard")
        }
        authenticate {
            route("/who") {
                handle {
                    val principal = call.authentication.principal<JWTPrincipal>()
                    val subjectString = principal!!.payload.subject.removePrefix("auth0|")
                    call.respondText("Success, $subjectString")
                }
            }
        }

        /**
         * A public login [Route] used to obtain JWTs
         */
        post("login") {
            val credentials = call.receive<UserPasswordCredential>()
            val user = userSource.findUserByCredentials(credentials)
            val token = JwtConfig.makeToken(user)
            call.respondText(token)
        }

        /**
         * All [Route]s in the authentication block are secured.
         */
        authenticate {
            route("secret") {

                get {
                    val user = call.user!!
                    call.respond(user.countries)
                }

                put {
                    TODO("All your secret routes can follow here")
                }

            }
        }

        /**
         * Routes with optional authentication
         */
        authenticate(optional = true) {
            get("optional") {
                val user = call.user
                val response = if (user != null) "authenticated!" else "optional"
                call.respond(response)
            }
        }
    }
}

///**
// * Utility for performing non-permanent redirections using a typed [location] whose class is annotated with [Location].
// */
////suspend fun ApplicationCall.respondRedirect(location: Any) = respondRedirect(url(location), permanent = false)