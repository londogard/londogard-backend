package com.lundekhan.auth

import com.auth0.jwt.JWT
import com.auth0.jwt.JWTVerifier
import com.auth0.jwt.algorithms.Algorithm
import com.lundekhan.jwtauth.User
import io.ktor.server.engine.applicationEngineEnvironment
import java.util.*

object JwtConfig {
    private const val issuer = "londogard.com"
    private const val validityInMs = 36_000_00 // 1 hour
    private var algorithm: Algorithm = Algorithm.HMAC256("londogard-test-secret")

    fun initAlgo(secret: String) {
        algorithm = Algorithm.HMAC256(secret)
    }

    val verifier = JWT
        .require(algorithm)
        .withIssuer(issuer)
        .build()

    /**
     * Produce a token for this combination of User and Account
     */
    fun makeToken(user: User): String = JWT.create()
        .withSubject("Authentication")
        .withIssuer(issuer)
        .withClaim("id", user.id)
        .withExpiresAt(getExpiration())
        .sign(algorithm)

    /**
     * Calculate the expiration Date based on current time + the given validity
     */
    private fun getExpiration() = Date(System.currentTimeMillis() + validityInMs)
}

class LoginRegister(val user: String, val password: String)