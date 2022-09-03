package com.londogard

import com.londogard.api.apiRoute
import com.londogard.auth.JwtConfig
import com.londogard.auth.UserPasswordCredential
import com.londogard.auth.authRoute
import com.londogard.blog.indexRoute
import com.londogard.gui.frontendRoute
import com.londogard.jwtauth.UserSource
import com.londogard.jwtauth.UserSourceImpl
import com.londogard.wedding.weddingRoute
import io.ktor.http.*
import io.ktor.serialization.*
import io.ktor.serialization.kotlinx.json.*
import io.ktor.server.application.*
import io.ktor.server.auth.*
import io.ktor.server.auth.jwt.*
import io.ktor.server.http.content.*
import io.ktor.server.locations.*
import io.ktor.server.plugins.cachingheaders.*
import io.ktor.server.plugins.callloging.*
import io.ktor.server.plugins.compression.*
import io.ktor.server.plugins.conditionalheaders.*
import io.ktor.server.plugins.contentnegotiation.*
import io.ktor.server.plugins.cors.*
import io.ktor.server.plugins.defaultheaders.*
import io.ktor.server.plugins.hsts.*
import io.ktor.server.plugins.httpsredirect.*
import io.ktor.server.plugins.partialcontent.*
import io.ktor.server.plugins.statuspages.*
import io.ktor.server.response.*
import io.ktor.server.routing.*
import io.ktor.server.util.*
import io.ktor.util.*
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.InternalSerializationApi
import kotlinx.serialization.json.Json
import java.time.LocalDateTime
import java.time.ZonedDateTime

fun main(args: Array<String>): Unit = io.ktor.server.netty.EngineMain.main(args)

/**
 * Session of this site, that just contains the [userId].
 */
data class LundeNetSession(val userId: String)

@InternalSerializationApi
@ExperimentalStdlibApi
@ExperimentalSerializationApi
@KtorExperimentalLocationsAPI
@InternalAPI
@Suppress("unused") // Referenced in application.conf
fun Application.module() {
    install(DefaultHeaders)
    install(CallLogging) { /** level = Level.DEBUG */ }       // This uses use the logger to log every call (request/response)
    install(ConditionalHeaders) // Automatic '304 Not Modified' Responses
    install(PartialContent)     // Supports for Range, Accept-Range and Content-Range headers
    install(Locations)
    install(Compression)
    // install(WebSockets) { pingPeriod = Duration.ofSeconds(10); timeout = Duration.ofSeconds(30) }

    val redirectionCache = mutableMapOf<String, String>()
    val lines = javaClass.getResourceAsStream("/fuzzy-filenames.txt").bufferedReader().readLines()

    // Default: [Accept, AcceptLanguages, ContentLanguage, ContentType]
    install(CORS) {
        anyHost()
        allowMethod(HttpMethod.Options)
        allowHeader("Authorization")
        allowNonSimpleContentTypes = true
        allowCredentials = true
    }

    install(StatusPages) { getExceptionResponses() }

    val db = BackendModule.db
    val userSource: UserSource = UserSourceImpl(db)
    JwtConfig.initAlgo(environment.config.propertyOrNull("security.secret")?.getString())

    install(Authentication) {
        basic("auth-basic") {
            realm = "londogard.com"
            validate { credential -> // TODO look into if this can be optimized
                userSource.findUserByCredentials(UserPasswordCredential(credential.name, credential.password))
            }
        }

        basic("auth-wedding") {
            realm = "londogard.com"
            validate { credential -> // TODO look into if this can be optimized
                val weddingId = parameters["weddingId"]
                if (weddingId != null) {
                    userSource.findUserByCredentialsWedding(
                        UserPasswordCredential(
                            credential.name,
                            credential.password
                        ), weddingId.toLong()
                    )
                } else {
                    userSource.findUserByCredentials(UserPasswordCredential(credential.name, credential.password))
                }
            }
        }

        basic("auth-wedding-admin") {
            realm = "londogard.com"
            validate { credential -> // TODO look into if this can be optimized
                val weddingId = parameters["weddingId"]
                if (weddingId != null) {
                    userSource.findUserByCredentialsWeddingAdmin(
                        UserPasswordCredential(
                            credential.name,
                            credential.password
                        ), weddingId.toLong()
                    )
                } else {
                    userSource.findUserByCredentials(UserPasswordCredential(credential.name, credential.password))
                }
            }
        }
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
            isLenient = true
            encodeDefaults = true
            prettyPrint = true
        })
    }

    if (environment.config.propertyOrNull("ktor.deployment.sslPort") != null) {
        install(HttpsRedirect)
        install(HSTS)
    }

    install(CachingHeaders) {
        options { _, outgoingContent ->
            when (outgoingContent.contentType?.withoutParameters()) {
                ContentType.Text.CSS -> CachingOptions(CacheControl.MaxAge(maxAgeSeconds = 24 * 60 * 60), ZonedDateTime.now().plusDays(1))
                ContentType.Application.Rss -> CachingOptions(CacheControl.MaxAge(maxAgeSeconds = 24 * 60 * 60), ZonedDateTime.now().plusDays(1))
                ContentType.Image.XIcon -> CachingOptions(CacheControl.MaxAge(maxAgeSeconds = 24 * 60 * 60), ZonedDateTime.now().plusDays(1))
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

        authenticate("auth-wedding") { weddingRoute() }
        authenticate("auth-basic") {
            get("/test-auth") {
                call.respond(HttpStatusCode.OK)
            }
        }
        static {
            listOf(
                "rss.svg", "github.svg", "twitter.svg", "linkedin.svg",
                "playstore.svg", "swener.jpg", "colorkidz.jpg", "favicon.ico", "favicon.svg", "icon.png",
                "safe-cosmetics.jpg"
            )
                .forEach { resource ->
                    resource(resource, resource)
                }
            resource("css", "mvp.css")
            resource("hampus", "hampus.jpg")
            resource("dennis", "dennis.jpg")
        }
    }
}
/**
object A {
    class NightVisionTranslator : Translator<Image, Image> {
        /** {@inheritDoc}  */
        override fun processInput(ctx: TranslatorContext, input: Image): NDList {
            val manager = ctx.ndManager
            return NDList(input
                .toNDArray(manager)
                .toType(DataType.FLOAT32, false)
                .divi(255.0)
                .transpose(2,0,1))
        }

        /** {@inheritDoc}  */
        override fun processOutput(ctx: TranslatorContext, list: NDList): Image {
            val output: NDArray = list[0].clip(0, 255).muli(255).toType(DataType.UINT8, false)
            return ImageFactory.getInstance().fromNDArray(output.squeeze())
        }
    }

    @JvmStatic
    fun main(args: Array<String>) {
//        InferenceEngine
        // TODO / 255, * 255 out as INT.
        val criteria = Criteria.builder()
            .setTypes(Image::class.java, Image::class.java)
            .optTranslator(NightVisionTranslator())
            .optModelUrls("/home/londogard/git/londogard-backend/resources") // search models in specified path
            .optModelName("out.pth")
            .build()
        val model = criteria.loadModel()
        val predictor = model.newPredictor()
        predictor
            .predict(ImageFactory.getInstance().fromUrl("/home/londogard/git/londogard-backend/resources/101_0_.png"))
            .save(Files.newOutputStream(Paths.get("b.png")), "png")
    }
}
*/