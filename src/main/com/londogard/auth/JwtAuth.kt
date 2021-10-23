package com.londogard.auth

import com.auth0.jwt.JWT
import com.auth0.jwt.JWTVerifier
import com.auth0.jwt.algorithms.Algorithm
import com.londogard.jwtauth.User
import java.util.*

object JwtConfig {
    private const val issuer = "londogard.com"
    private const val validityInMs = 36_000_00 // 1 hour
    private lateinit var algorithm: Algorithm

    fun initAlgo(secret: String?) {
        algorithm = Algorithm.HMAC256(secret ?: "londogard-test-secret")
    }

    val verifier: JWTVerifier by lazy {
        JWT
            .require(algorithm)
            .withIssuer(issuer)
            .build()
    }

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
    private fun getExpiration(): Date = Date(System.currentTimeMillis() + validityInMs)
}