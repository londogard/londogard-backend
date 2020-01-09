package com.lundekhan.jwtauth

import io.ktor.application.ApplicationCall
import io.ktor.auth.authentication

val ApplicationCall.user get() = authentication.principal<User>()