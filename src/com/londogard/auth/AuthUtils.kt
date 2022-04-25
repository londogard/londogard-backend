package com.londogard.jwtauth

import io.ktor.server.application.ApplicationCall
import io.ktor.server.auth.*
import io.ktor.server.auth.jwt.JWTPrincipal

val ApplicationCall.principal get() = authentication.principal<JWTPrincipal>()

val ApplicationCall.simplePrincipal get() = authentication.principal<User>()