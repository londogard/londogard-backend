package com.lundekhan

import com.fasterxml.jackson.databind.SerializationFeature
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.auth.jwt.jwt
import io.ktor.features.*
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpMethod
import io.ktor.http.HttpStatusCode
import io.ktor.jackson.jackson
import io.ktor.locations.Location
import io.ktor.locations.Locations
import io.ktor.request.receive
import io.ktor.response.respond
import io.ktor.response.respondText
import io.ktor.routing.*
import io.ktor.sessions.*
//import org.apache.http.auth.InvalidCredentialsException
import java.io.File

fun main(args: Array<String>): Unit = io.ktor.server.netty.EngineMain.main(args)

/*
 * Typed routes using the [Locations] feature.
 */

/**
 * Location for file browsing using [path].
 */
@Location("/files/{path}")
data class FileBrowser(val path: String)

/**
 * Location for login a [userName] with a [password].
 */
@Location("/login")
data class Login(val userName: String = "", val password: String = "")

/**
 * Location for uploading files.
 */
@Location("/upload")
class Upload()

/**
 * Session of this site, that just contains the [userId].
 */
data class LundeNetSession(val userId: String)

@Suppress("unused") // Referenced in application.conf
fun Application.module() {
    // This adds automatically Date and Server headers to each response, and would allow you to configure
    // additional headers served to each response.
    DefaultHeaders
    // This uses use the logger to log every call (request/response)
    CallLogging
    // Allows to use classes annotated with @Location to represent URLs.
    // They are typed, can be constructed to generate URLs, and can be used to register routes.
    Locations
    // Automatic '304 Not Modified' Responses
    install(ConditionalHeaders)
    // Supports for Range, Accept-Range and Content-Range headers
    install(PartialContent)
    /**
    // This feature enables compression automatically when accepted by the client.
    install(Compression) {
    default()
    excludeContentType(ContentType.)
    }
     */

    val root = File("files").takeIf { it.exists() }
        ?: error("Can't locate files folder")

    val simpleJwt = SimpleJWT("grocery-list-secret")

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
    }
    install(Authentication) {
        basic(name = "fileauth") {
            skipWhen { call -> call.sessions.get<UserIdPrincipal>() != null }
            realm = "Ktor Server"
            validate { if (it.name == "londogard" && it.password == "") UserIdPrincipal("user") else null }
        }
        jwt("jwt") {
            verifier(simpleJwt.verifier) // TODO swap to JwtConfig
            validate {
                UserIdPrincipal(it.payload.getClaim("name").asString())
            }
        }
    }
    install(ContentNegotiation) {
        jackson {
            enable(SerializationFeature.INDENT_OUTPUT) // Pretty Prints the JSON
        }
    }

    routing {
        get("/") {
            call.respondText("Hello World!")
        }
        get("/snippets") {
            call.respond(mapOf("OK" to true))
        }
        route("/files") {
            authenticate("jwt") {
                get {
                    call.respondText("Welcome to files!")
                }
            }
        }
        route("files2") {
            listing(root)
        }

        post("/login") {
            val post = call.receive<LoginRegister>()
            val user = users.getOrPut(post.user) { User(post.user, post.password) }
            if (user.password != post.password) throw InvalidCredentialsException("Invalid credentials")
            call.respond(mapOf("token" to simpleJwt.sign(user.name)))
        }

    }
}

/**
 * Utility for performing non-permanent redirections using a typed [location] whose class is annotated with [Location].
 */
//suspend fun ApplicationCall.respondRedirect(location: Any) = respondRedirect(url(location), permanent = false)