package com.lundekhan

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.lundekhan.billsplitter.PersonPayment
import com.lundekhan.blog.BlogPost
import com.lundekhan.blog.FullBlog
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpMethod
import io.ktor.http.HttpStatusCode
import io.ktor.locations.KtorExperimentalLocationsAPI
import io.ktor.server.testing.handleRequest
import io.ktor.server.testing.setBody
import io.ktor.util.InternalAPI
import io.ktor.util.KtorExperimentalAPI
import kotlinx.serialization.ExperimentalSerializationApi
import org.amshove.kluent.shouldBe
import org.koin.ktor.ext.inject
import kotlin.test.BeforeTest
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

@KtorExperimentalAPI
@KtorExperimentalLocationsAPI
@InternalAPI
@ExperimentalSerializationApi
class ApplicationTest {
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
            val correctResponse = jacksonObjectMapper()
                .readValue<List<PersonPayment>>(response.byteContent!!)
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
            uri = "/api/blog/create"
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
            uri = "/api/blog"
        }
        reqTwo.requestHandled shouldBe true
        reqTwo.response.let {
            assertEquals(HttpStatusCode.OK, it.status())
            val blogList = jacksonObjectMapper()
                .readValue<List<FullBlog>>(it.content!!)
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