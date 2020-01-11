package com.lundekhan

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.londogard.summarize.summarizers.TfIdfSummarizer
import com.londogard.textgen.GenerationLevel
import com.londogard.textgen.LanguageModel
import com.londogard.textgen.LanguageModelImpl
import com.londogard.textgen.PretrainedModels
import com.lundekhan.auth.JwtConfig
import com.lundekhan.billsplitter.PersonPayment
import com.lundekhan.blog.BlogPost
import com.lundekhan.blog.FullBlog
import com.lundekhan.jwtauth.User
import com.squareup.sqldelight.Transacter
import com.squareup.sqldelight.db.SqlDriver
import com.squareup.sqldelight.sqlite.driver.JdbcSqliteDriver
import io.ktor.http.*
import io.ktor.locations.KtorExperimentalLocationsAPI
import io.ktor.request.receive
import io.ktor.server.testing.*
import io.ktor.util.InternalAPI
import io.ktor.util.KtorExperimentalAPI
import kotlinx.serialization.ImplicitReflectionSerializer
import org.amshove.kluent.shouldBe
import org.amshove.kluent.shouldBeEqualTo
import org.junit.Before
import org.koin.core.context.loadKoinModules
import org.koin.dsl.module
import org.koin.ktor.ext.inject
import kotlin.test.BeforeTest
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

@KtorExperimentalAPI
@ImplicitReflectionSerializer
@KtorExperimentalLocationsAPI
@InternalAPI
class ApplicationTest {
    // https://github.com/AndreasVolkmann/ktor-auth-jwt-sample/blob/master/src/test/kotlin/me/avo/io/ktor/auth/jwt/sample/ServerTest.kt
    // private fun TestApplicationRequest.addJwtHeader() = addHeader("Authorization", "Bearer ${getToken()}")

    @BeforeTest
    fun cleanup() {
        withServer {
            this.application.inject<Database>().value.let {
                it.blogQueries.drop()
                it.userQueries.drop()
                it.urlQueries.drop()
            }
        }
    }

    @Test
    fun testRoot() {
        withServer {
            handleRequest(HttpMethod.Get, "/").apply {
                assertEquals(HttpStatusCode.OK, response.status())
            }
        }
    }

    @Test
    fun testJwtAuth() {
        withServer {
            makeUserRequest()
                .apply {
                    assertEquals(HttpStatusCode.Created, response.status())
                    assertTrue(response.content != null)

                    val responseJson = jacksonObjectMapper().readValue<ResultResponse>(response.content!!)
                    assertEquals(ResultResponse("User created"), responseJson)
                }
            makeLoginRequest()
                .apply {
                    assertEquals(HttpStatusCode.OK, response.status())
                    assertTrue(response.content != null)

                    val responseJson = jacksonObjectMapper().readValue<ResultResponse>(response.content!!)
                    assertTrue(responseJson.result.isNotEmpty())
                }
            makeLoginRequest(testUserTwo)
                .apply {
                    assertEquals(HttpStatusCode.Unauthorized, response.status())
                    assertTrue(response.content != null)

                    val responseJson = jacksonObjectMapper().readValue<ResultResponse>(response.content!!)
                    assertTrue(responseJson.result.isNotEmpty())
                }
            makeUserRequest()
                .apply {
                    assertEquals(HttpStatusCode.BadRequest, response.status())
                }
            handleRequest(HttpMethod.Get, "/secret") {
                addHeader(HttpHeaders.ContentType, ContentType.Application.Json.toString())
                addJwtHeader()
            }.apply {
                assertEquals(HttpStatusCode.OK, response.status())
            }
        }
    }

    @Test
    fun testBillSplit(): Unit = withServer {
        handleRequest(HttpMethod.Post, "/billsplit") {
            addHeader(HttpHeaders.ContentType, ContentType.Application.Json.toString())
            setBody(
                """
                    {"payments": [
                    {"person": "hampus", "amount":  100},
                    {"person": "dennis", "amount":  50},
                    {"person": "noah", "amount":  0}
                    ]
                    }
                """.trimIndent()
            )
        }.apply {
            assertEquals(HttpStatusCode.OK, response.status())
            val correctResponse = jacksonObjectMapper()
                .readValue<List<PersonPayment>>(response.byteContent!!)
                .any { it.amount == 50.0 && it.payer == "noah" && it.owed == "hampus" }

            assertTrue(correctResponse)
        }
    }

    @Test
    fun testSummarizer(): Unit = withServer {
        handleRequest(HttpMethod.Post, "/smry") {
            addHeader(HttpHeaders.ContentType, ContentType.Application.Json.toString())
            val body = """{"text": $text}"""
            setBody(body)
        }.apply {
            assertEquals(HttpStatusCode.OK, response.status())
            val correctResponse = jacksonObjectMapper()
                .readValue<ResultResponse>(response.byteContent!!).result.length < text.length
            assert(correctResponse)
        }
    }

    @Test
    fun testBlogging(): Unit = withServer {
        makeUserRequest()
        val req = handleRequest {
            method = HttpMethod.Post
            uri = "/blog/create"
            addJwtHeader()
            addJsonHeader()
            setBody(
                jacksonObjectMapper()
                    .writeValueAsString(BlogPost("Hello world", "1.2.3", "123456789", listOf("TRENDING")))
            )
        }
        req.requestHandled shouldBe true
        req.response.status() shouldBe HttpStatusCode.OK
        val reqTwo = handleRequest {
            uri = "/blog"
        }
        reqTwo.requestHandled shouldBe true
        reqTwo.response.let {
            assertEquals(HttpStatusCode.OK, it.status())
            val blogList = jacksonObjectMapper()
                .readValue<List<FullBlog>>(it.content!!)
            println(blogList)
            assertTrue(blogList.size == 1)
        }
    }

    @Test
    fun urlRouting(): Unit = withServer {
        val req = handleRequest {
            uri = "/url"
            method = HttpMethod.Post
            addJsonHeader()
            setBody("""{"url": "https://google.com/s?dead_com_lol_hej_darrrrr"}""")
        }
        req.requestHandled shouldBe true
        req.response.content != null
    }
}