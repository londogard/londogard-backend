package com.londogard

import com.londogard.auth.JwtConfig
import com.londogard.jwtauth.User
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpMethod
import io.ktor.http.escapeIfNeeded
import io.ktor.locations.KtorExperimentalLocationsAPI
import io.ktor.server.testing.*
import io.ktor.util.InternalAPI
import io.ktor.util.KtorExperimentalAPI
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.InternalSerializationApi

val testUser = """{"name":  "lunde", "password": "123abc"}"""
val testUserTwo = """{"name":  "lunde", "password": "123"}"""

internal fun TestApplicationRequest.addJsonHeader(): Unit =
    addHeader(HttpHeaders.ContentType, ContentType.Application.Json.toString())

internal fun TestApplicationRequest.addJwtHeader(): Unit = addHeader("Authorization", "Bearer ${getToken()}")

internal fun getToken() = JwtConfig.makeToken(User(1, "lol"))

@InternalSerializationApi
@ExperimentalSerializationApi
@ExperimentalStdlibApi
@KtorExperimentalLocationsAPI
@KtorExperimentalAPI
@InternalAPI
internal fun withServer(block: TestApplicationEngine.() -> Unit) {
    withTestApplication({ module() }, block)
}

fun TestApplicationEngine.makeUserRequest(user: String = testUser): TestApplicationCall = handleRequest {
    method = HttpMethod.Post
    uri = "/user/create"
    addHeader(HttpHeaders.ContentType, ContentType.Application.Json.toString())
    setBody(user)
}

fun TestApplicationEngine.makeLoginRequest(user: String = testUser): TestApplicationCall = handleRequest {
    method = HttpMethod.Post
    uri = "/user/login"
    addHeader(HttpHeaders.ContentType, ContentType.Application.Json.toString())
    setBody(user)
}

@InternalAPI
val text = """Skip to content
Pull requests
Issues
Marketplace
Explore
@Lundez
Kotlin/kotlinx.serialization
Code
Issues 178
Pull requests 8
Projects 1
Security
Insights
kotlinx.serialization/docs/examples.md
@sandwwraith sandwwraith Update to 1.3.40 eap2; 6158c39 on Jun 13
@sandwwraith
@0xBADDCAFE
    © 2019 GitHub, Inc.
    Terms
    Privacy
    Security
    Status
    Help

    Contact GitHub
    Pricing
    API
    Training
    Blog
    About

""".trim().escapeIfNeeded().replace('\n', '\t')