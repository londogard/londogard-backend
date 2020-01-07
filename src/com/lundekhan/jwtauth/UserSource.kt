package com.lundekhan.jwtauth

import io.ktor.auth.*

interface UserSource {

    fun findUserById(id: Int): User

    fun findUserByCredentials(credential: UserPasswordCredential): User

}