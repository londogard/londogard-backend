package com.lundekhan

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.lundekhan.billsplitter.PersonPayment
import io.ktor.http.*
import io.ktor.locations.KtorExperimentalLocationsAPI
import io.ktor.response.respond
import kotlin.test.*
import io.ktor.server.testing.*
import io.ktor.util.InternalAPI
import kotlinx.serialization.parseList
import org.eclipse.jetty.http.HttpStatus
import org.koin.dsl.module

@KtorExperimentalLocationsAPI
@InternalAPI
class ApplicationTest {
    @Test
    fun testRoot() {
        withTestApplication({ module() }) {
            handleRequest(HttpMethod.Get, "/").apply {
                assertEquals(HttpStatusCode.OK, response.status())
                assertEquals("Hello World!", response.content)
            }
        }
    }

    @Test
    fun testBillSplit() {
        withTestApplication({ module() }) {
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
    }

    @Test
    fun testSummarizer() {
        withTestApplication({ module() }) {
            assert(handleRequest(HttpMethod.Get, "/smry").response.status() == HttpStatusCode.OK)
            handleRequest(HttpMethod.Post, "/smry") {
                addHeader(HttpHeaders.ContentType, ContentType.Application.Json.toString())
                //setBody()
            }
        }
    }

}
