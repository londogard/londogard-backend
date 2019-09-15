package com.lundekhan

import io.ktor.http.*
import kotlin.test.*
import io.ktor.server.testing.*
import io.ktor.util.InternalAPI

class ApplicationTest {
    @InternalAPI
    @Test
    fun testRoot() {
        withTestApplication({ module() }) {
            handleRequest(HttpMethod.Get, "/").apply {
                assertEquals(HttpStatusCode.OK, response.status())
                assertEquals("Hello World!", response.content)
            }
        }
    }
}
