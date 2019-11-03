package com.lundekhan

import com.fasterxml.jackson.databind.SerializationFeature
import com.lundekhan.billsplitter.billsplit
import com.lundekhan.htmltemplates.respondHtmlDefault
import com.lundekhan.summarizer.summarizerRoute
import com.lundekhan.textgen.textgenRoute
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.auth.jwt.jwt
import io.ktor.features.*
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpMethod
import io.ktor.http.HttpStatusCode
import io.ktor.jackson.jackson
import io.ktor.locations.KtorExperimentalLocationsAPI
import io.ktor.response.respond
import io.ktor.response.respondRedirect
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
    install(HttpsRedirect) {
        permanentRedirect = true
    }
    install(XForwardedHeaderSupport)
    install(ForwardedHeaderSupport)

    val redirectionMap = mutableMapOf<String, String>()
    install(Koin) {
        //        sl4jlogger()
        modules(groceryModule)
    }
    //val db by inject<Database>()
    /**
    // This feature enables compression automatically when accepted by the client.
    install(Compression) {
    default()
    excludeContentType(ContentType.)
    }
     */

    //val root = File(javaClass.getResource("/files").path).takeIf { it.exists() }
    //    ?: error("Can't locate files folder")

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
        exception<InvalidInputException> { exception ->
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
        // TODO update CSS to https://getskeleton.com/ ? ?
        billsplit()
        urlShort(redirectionMap)
        summarizerRoute()
        textgenRoute()

        get("/") {
            call.respondHtmlDefault("blog.", 0) {
                +"Welcome to londogard."
            }
        }
        get("/github") {
            call.respondRedirect("https://github.com/Lundez/")
        }
        get("/apps") {
            call.respondRedirect("https://play.google.com/store/apps/developer?id=LundeKhan")
        }

        //route("files2") {
        //    listing(root)
        //}
//
        //post("/login") {
        //    val post = call.receive<LoginRegister>()
        //    val user = users.getOrPut(post.user) { User(post.user, post.password) }
        //    if (user.password != post.password) throw InvalidCredentialsException("Invalid credentials")
        //    call.respond(mapOf("token" to simpleJwt.sign(user.name)))
        //}
    }
}

///**
// * Utility for performing non-permanent redirections using a typed [location] whose class is annotated with [Location].
// */
////suspend fun ApplicationCall.respondRedirect(location: Any) = respondRedirect(url(location), permanent = false)