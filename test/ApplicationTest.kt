package com.londogard

import com.londogard.billsplitter.PersonPayment
import com.londogard.blog.BlogPost
import com.londogard.blog.FullBlog
import io.ktor.http.*
import io.ktor.locations.*
import io.ktor.server.testing.*
import io.ktor.util.*
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.InternalSerializationApi
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json
import org.amshove.kluent.shouldBe
import org.koin.ktor.ext.inject
import kotlin.test.BeforeTest
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

@InternalSerializationApi
@KtorExperimentalAPI
@KtorExperimentalLocationsAPI
@InternalAPI
@ExperimentalStdlibApi
@ExperimentalSerializationApi
class ApplicationTest {
    @BeforeTest
    fun cleanup() {
        withServer {
            val db by this.application.inject<Database>()
            db.testingQueries.resetAll()
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

                    val responseJson = Json.decodeFromString<ResultResponse>(response.content!!)
                    assertEquals(ResultResponse("User created"), responseJson)
                }
            makeLoginRequest()
                .apply {
                    assertEquals(HttpStatusCode.OK, response.status())
                    assertTrue(response.content != null)

                    val responseJson = Json.decodeFromString<ResultResponse>(response.content!!)
                    assertTrue(responseJson.result.isNotEmpty())
                }
            makeLoginRequest(testUserTwo)
                .apply {
                    assertEquals(HttpStatusCode.Unauthorized, response.status())
                    assertTrue(response.content != null)

                    val responseJson = Json.decodeFromString<ResultResponse>(response.content!!)
                    assertTrue(responseJson.result.isNotEmpty())
                }
            makeUserRequest()
                .apply {
                    assertEquals(HttpStatusCode.BadRequest, response.status())
                }
        }
    }

    @Test
    fun testBillSplit(): Unit = withServer {
        handleRequest(HttpMethod.Post, "/api/billsplit") {
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

            val correctResponse = Json
                .decodeFromString<List<PersonPayment>>(response.content!!)
                .any { it.amount == 50.0 && it.payer == "noah" && it.owed == "hampus" }

            assertTrue(correctResponse)
        }
    }

    @Test
    fun testSummarizer(): Unit = withServer {
        handleRequest(HttpMethod.Post, "/api/smry") {
            addHeader(HttpHeaders.ContentType, ContentType.Application.Json.toString())
            val body = """{"text": $text}"""
            setBody(body)
        }.apply {
            assertEquals(HttpStatusCode.OK, response.status())
            val correctResponse =
                Json.decodeFromString<ResultResponse>(response.content!!)
                    .result.length < text.length
            assert(correctResponse)
        }
    }

    @Test
    fun testBlogging(): Unit = withServer {
        makeUserRequest()
        val req = handleRequest {
            method = HttpMethod.Post
            uri = "/api/blog/create"
            addJwtHeader()
            addJsonHeader()
            setBody(
                Json.encodeToString(BlogPost.serializer(),BlogPost("Hello world", "1.2.3", "123456789", listOf("TRENDING"), til = false))
            )
        }
        req.requestHandled shouldBe true
        req.response.status() shouldBe HttpStatusCode.OK
        val reqTwo = handleRequest {
            uri = "/api/blog"
        }
        reqTwo.requestHandled shouldBe true
        reqTwo.response.let {
            assertEquals(HttpStatusCode.OK, it.status())
            val blogList = Json.decodeFromString<List<FullBlog>>(it.content!!)
            assertTrue(blogList.size == 1)
        }
    }

    @Test
    fun urlRouting(): Unit = withServer {
        val req = handleRequest {
            uri = "/api/url"
            method = HttpMethod.Post
            addJsonHeader()
            setBody("""{"url": "https://google.com/s?dead_com_lol_hej_darrrrr"}""")
        }
        req.requestHandled shouldBe true
        req.response.content != null
    }
}