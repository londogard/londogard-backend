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
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.auth.jwt.*
import io.ktor.features.*
import io.ktor.http.*
import io.ktor.http.content.*
import io.ktor.locations.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.serialization.*
import io.ktor.util.*
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.InternalSerializationApi
import kotlinx.serialization.json.Json
import org.koin.ktor.ext.Koin
import org.koin.ktor.ext.inject
import java.time.LocalDateTime


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
    install(DefaultHeaders)     // Automatic Date & Server Head to each response. Possible to config additional headers
    install(CallLogging) { /** level = Level.DEBUG */ }       // This uses use the logger to log every call (request/response)
    install(ConditionalHeaders) // Automatic '304 Not Modified' Responses
    install(PartialContent)     // Supports for Range, Accept-Range and Content-Range headers
    install(Locations)
    install(Compression)
    // install(WebSockets) { pingPeriod = Duration.ofSeconds(10); timeout = Duration.ofSeconds(30) }

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
        header("Authorization")
        allowNonSimpleContentTypes = true
        allowCredentials = true
    }

    install(StatusPages) { getExceptionResponses() }

    val db by inject<Database>()
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

        authenticate("auth-wedding") { weddingRoute() }
        authenticate("auth-basic") {
            get("/test-auth") {
                call.respond(HttpStatusCode.OK)
            }
        }
        static {
            listOf(
                "rss.svg", "github.svg", "twitter.svg", "linkedin.svg",
                "playstore.svg", "swener.jpg", "colorkidz.jpg", "favicon.ico", "favicon.svg", "icon.png"
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