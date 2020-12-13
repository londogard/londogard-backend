package com.londogard.jwtauth

import com.londogard.data.UserQueries
import io.ktor.auth.UserPasswordCredential
import org.mindrot.jbcrypt.BCrypt

class UserSourceImpl(private val userQueries: UserQueries) : UserSource {
    override fun findUserById(id: Long): User? = userQueries
        .selectById(id)
        .executeAsOneOrNull()
        ?.let { User(it.userid, it.username) }

    override fun findUserByCredentials(credential: UserPasswordCredential): User? = userQueries
        .select(credential.name).executeAsOneOrNull()
        ?.takeIf { BCrypt.checkpw(credential.password, it.hashpw) }
        ?.let { User(it.userid, it.username) }
}