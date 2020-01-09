package com.lundekhan

import com.fasterxml.jackson.databind.SerializationFeature
import com.lundekhan.billsplitter.billsplit
import com.lundekhan.data.Blog
import com.lundekhan.jwtauth.UserSource
import com.lundekhan.jwtauth.UserSourceImpl
import com.lundekhan.jwtauth.user
import com.lundekhan.summarizer.summarizerRoute
import com.lundekhan.textgen.textgenRoute
import io.ktor.application.Application
import io.ktor.application.ApplicationCall
import io.ktor.application.call
import io.ktor.application.install
import io.ktor.auth.Authentication
import io.ktor.auth.UserPasswordCredential
import io.ktor.auth.authenticate
import io.ktor.auth.authentication
import io.ktor.auth.jwt.jwt
import io.ktor.features.*
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpMethod
import io.ktor.http.HttpStatusCode
import io.ktor.jackson.jackson
import io.ktor.locations.KtorExperimentalLocationsAPI
import io.ktor.request.receive
import io.ktor.response.respond
import io.ktor.response.respondRedirect
import io.ktor.response.respondText
import io.ktor.routing.*
import io.ktor.util.InternalAPI
import io.ktor.util.KtorExperimentalAPI
import kotlinx.serialization.ImplicitReflectionSerializer
import org.koin.ktor.ext.Koin
import org.koin.ktor.ext.inject
import org.mindrot.jbcrypt.BCrypt
import java.sql.SQLException


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
        if (this@module.environment.config.property("ktor.deployment.environment").getString() == "test")
            modules(testModule)
        else
            modules(backendModule)
    }

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
            call.respond(HttpStatusCode.Unauthorized, resultResponse(exception.message ?: unknownError))
        }
        exception<InvalidInputException> { exception ->
            call.respond(HttpStatusCode.BadRequest, resultResponse(exception.message ?: unknownError))
        }
        exception<UserCreationException> { call.respond(HttpStatusCode.BadRequest, resultResponse(it.message ?: unknownError)) }
    }

    val db by inject<Database>()
    val userSource: UserSource = UserSourceImpl(db.userQueries)

    install(Authentication) {
        /**
         * Setup the JWT authentication to be used in [Routing].
         * If the token is valid, the corresponding [User] is fetched from the database.
         * The [User] can then be accessed in each [ApplicationCall].
         */
        jwt {
            verifier(JwtConfig.verifier)
            realm = "ktor.io"
            validate {
                it.payload.getClaim("id").asLong()?.let(userSource::findUserById)
            }
        }
    }

    install(ContentNegotiation) {
        jackson { enable(SerializationFeature.INDENT_OUTPUT) }
    }

    if (environment.config.propertyOrNull("ktor.deployment.sslPort") != null) {
        install(HttpsRedirect)
        install(HSTS)
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
            val token = userSource
                .findUserByCredentials(credentials)
                ?.let { JwtConfig.makeToken(it) }
                ?: throw InvalidCredentialsException("Either user does not exist or user and password does not match")
            call.respond(ResultResponse(token))
        }

        /**
         * A public createuser [Route] used to create users
         */
        post("createuser") {
            val credentials = call.receive<UserPasswordCredential>()
            val pw = BCrypt.hashpw(credentials.password, BCrypt.gensalt())

            try {
                db.userQueries.insert(credentials.name, pw)
                userSource
                    .findUserByCredentials(credentials)
                    ?.let { call.respond(HttpStatusCode.Created, ResultResponse("User created")) }
                    ?: throw UserCreationException()
            } catch (exception: SQLException) { throw UserCreationException() }
        }

        /**
         * All [Route]s in the authentication block are secured.
         */
        authenticate {
            route("secret") {
                get {
                    val user = call.user!!
                    call.respond(user.name)
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