package com.lundekhan.jwtauth

import io.ktor.application.ApplicationCall
import io.ktor.auth.authentication
import io.ktor.auth.jwt.JWTPrincipal

val ApplicationCall.principal get() = authentication.principal<JWTPrincipal>()