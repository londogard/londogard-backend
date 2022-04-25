package com.londogard.jwtauth

import com.londogard.auth.UserPasswordCredential


interface UserSource {

    fun findUserById(id: Long): User?

    fun findUserByCredentials(credential: UserPasswordCredential): User?

    fun findUserByCredentialsWedding(credential: UserPasswordCredential, weddingId: Long): User?

    fun findUserByCredentialsWeddingAdmin(credential: UserPasswordCredential, weddingId: Long): User?
}