package com.londogard.jwtauth

import com.londogard.auth.UserPasswordCredential


interface UserSource {

    fun findUserById(id: Long): User?

    fun findUserByCredentials(credential: UserPasswordCredential): User?

}