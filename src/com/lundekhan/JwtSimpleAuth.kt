package com.lundekhan

import com.auth0.jwt.JWT
import com.auth0.jwt.JWTVerifier
import com.auth0.jwt.algorithms.Algorithm
import com.auth0.jwt.interfaces.Payload
import com.lundekhan.jwtauth.User
import io.ktor.auth.Credential
import io.ktor.auth.Principal
import java.util.*

object JwtConfig {
    private const val secret = "zAP5MBA4B4Ijz0MZaS48" // TODO move this to env variable & update it
    private const val issuer = "londogard.com"
    private const val validityInMs = 36_000_00 * 10 // 10 hours
    private val algorithm = Algorithm.HMAC256(secret)

    val verifier: JWTVerifier = JWT
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

class JWTCredential(val payload: Payload) : Credential
class JWTPrincipal(val payload: Payload) : Principal

