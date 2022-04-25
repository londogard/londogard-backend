package com.londogard.jwtauth

import com.londogard.Database
import com.londogard.auth.UserPasswordCredential
import org.mindrot.jbcrypt.BCrypt

class UserSourceImpl(private val db: Database) : UserSource {
    private val userQueries = db.userQueries

    override fun findUserById(id: Long): User? = userQueries
        .selectById(id)
        .executeAsOneOrNull()
        ?.let { User(it.userid, it.username) }

    override fun findUserByCredentials(credential: UserPasswordCredential): User? = userQueries
        .select(credential.name).executeAsOneOrNull()
        ?.takeIf { BCrypt.checkpw(credential.password, it.hashpw) }
        ?.let { User(it.userid, it.username) }

    // TODO optimize into single func w/ potential cache for hour(s)
    override fun findUserByCredentialsWedding(credential: UserPasswordCredential, weddingId: Long): User? =
        findUserByCredentials(credential)
            ?.takeIf { user ->
                db.weddingInfoQueries.selectByGuestUserId(user.id).executeAsOneOrNull() != null ||
                        db.weddingInfoQueries.selectByUserId(user.id).executeAsOneOrNull() != null
            }

    override fun findUserByCredentialsWeddingAdmin(credential: UserPasswordCredential, weddingId: Long): User? =
        findUserByCredentials(credential)
            ?.takeIf { user -> db.weddingInfoQueries.selectByUserId(user.id).executeAsOneOrNull() != null }
}