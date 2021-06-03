package com.londogard.jwtauth

import io.ktor.application.ApplicationCall
import io.ktor.auth.*
import io.ktor.auth.jwt.JWTPrincipal

val ApplicationCall.principal get() = authentication.principal<JWTPrincipal>()

val ApplicationCall.simplePrincipal get() = authentication.principal<User>()