package com.londogard.auth

import com.londogard.*
import com.londogard.jwtauth.UserSource
import io.ktor.server.application.call
import io.ktor.server.auth.*
import io.ktor.http.HttpStatusCode
import io.ktor.server.request.receive
import io.ktor.server.response.respond
import io.ktor.server.routing.Route
import io.ktor.server.routing.post
import io.ktor.server.routing.route
import io.ktor.server.routing.*
import kotlinx.serialization.Serializable
import org.mindrot.jbcrypt.BCrypt
import java.sql.SQLException

fun Route.authRoute(userSource: UserSource): Route = route("/user") {
    val db = BackendModule.db
    /**
     * A public login [Route] used to obtain JWTs
     */
    post("/login") {
        val credentials = call.receive<UserPasswordCredential>()
        val token = userSource
            .findUserByCredentials(credentials)
            ?.let { JwtConfig.makeToken(it) }
            ?: throw InvalidCredentialsException("Either user does not exist or user and password does not match")
        call.respond(ResultResponse(token))
    }

    /**
     * A public createuser [Route] used to create users
     */
    post("/create") {
        val credentials = call.receive<UserPasswordCredential>() // TODO extract code
        val pw = BCrypt.hashpw(credentials.password, BCrypt.gensalt())

        try {
            db.userQueries.insert(credentials.name, pw)
            userSource
                .findUserByCredentials(credentials)
                ?.let { call.respond(HttpStatusCode.Created, ResultResponse("User created")) }
                ?: throw UserCreationException()
        } catch (exception: SQLException) { throw UserCreationException() }
    }
}

@Serializable data class UserPasswordCredential(val name: String, val password: String) : Credential