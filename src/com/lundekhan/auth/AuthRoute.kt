package com.lundekhan.auth

import com.lundekhan.Database
import com.lundekhan.InvalidCredentialsException
import com.lundekhan.ResultResponse
import com.lundekhan.UserCreationException
import com.lundekhan.jwtauth.UserSource
import io.ktor.application.call
import io.ktor.auth.UserPasswordCredential
import io.ktor.http.HttpStatusCode
import io.ktor.request.receive
import io.ktor.response.respond
import io.ktor.routing.Route
import io.ktor.routing.post
import io.ktor.routing.route
import org.koin.ktor.ext.inject
import org.mindrot.jbcrypt.BCrypt
import java.sql.SQLException

fun Route.authRoute(userSource: UserSource): Route = route("/user") {
    val db by inject<Database>()
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
        val credentials = call.receive<UserPasswordCredential>()
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
