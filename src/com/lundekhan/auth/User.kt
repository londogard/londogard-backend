package com.lundekhan.jwtauth

import io.ktor.auth.*

data class User(
    val id: Long,
    val name: String
) : Principal