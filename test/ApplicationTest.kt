package com.lundekhan

import io.ktor.http.*
import kotlin.test.*
import io.ktor.server.testing.*
import io.ktor.util.InternalAPI
import org.koin.dsl.module

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
    fun testUrlShorten() {
        withTestApplication({ module() }) {
            handleRequest(HttpMethod.Post, "/url-short") {
                addHeader(HttpHeaders.ContentType, ContentType.Application.FormUrlEncoded.toString())
                setBody(listOf(
                    "url" to "https://colab.research.google.com/drive/1sVr3aTbPR92Jy4-uXUmHwigS-bfwdlr-#scrollTo=2SKbMyr13Ywk"
                ).formUrlEncode())
            }.apply {
                assertEquals(HttpStatusCode.OK, response.status())
                assert(response.content?.contains("680113b5") ?: false)
            }
        }
    }
}
