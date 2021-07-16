package com.londogard

import io.ktor.auth.*
import io.ktor.http.*
import io.ktor.locations.*
import io.ktor.request.*
import io.ktor.server.testing.*
import io.ktor.util.*
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.InternalSerializationApi
import org.junit.Test
import org.koin.ktor.ext.inject
import kotlin.test.assertEquals
import kotlin.test.BeforeTest

@InternalSerializationApi
@KtorExperimentalAPI
@KtorExperimentalLocationsAPI
@InternalAPI
@ExperimentalStdlibApi
@ExperimentalSerializationApi
class WeddingTest {
    @BeforeTest
    fun cleanup() {
        withServer {
            val db by this.application.inject<Database>()
            db.testingQueries.resetAll()
        }
    }

    @Test
    fun testAuthWedding() {
        withServer {
            handleRequest(HttpMethod.Get, "/wedding")
                .apply {
                    assertEquals(HttpStatusCode.Unauthorized, response.status())
                }
        }
    }

    @Test
    fun testCreateWedding() {
        withServer {
            makeUserRequest()
            handleRequest(HttpMethod.Post, "/wedding/create") {
                addJsonHeader()
                setBody(weddingCreate)
                addHeader("Authorization", "Basic $testUserb64")
            }.apply {
                assertEquals(HttpStatusCode.Created, response.status())
            }
        }
    }
}