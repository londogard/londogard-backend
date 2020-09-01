package com.lundekhan

import io.ktor.application.call
import io.ktor.features.StatusPages.Configuration
import io.ktor.http.HttpStatusCode
import io.ktor.response.respond
import java.sql.SQLException

class InvalidCredentialsException(message: String) : RuntimeException(message)
class InvalidInputException(message: String) : RuntimeException(message)
class UserCreationException(message: String = "User could not be created") : RuntimeException(message)
class InvalidRouteException(message: String = "Route does not exist") : RuntimeException(message)
const val unknownError = "UNKNOWN ERROR"

fun Configuration.getExceptionResponses() {
    status(HttpStatusCode.Unauthorized) {
        call.respond(HttpStatusCode.Unauthorized, "UNAUTHORIZED")
    }
    exception<InvalidCredentialsException> { exception ->
        call.respond(HttpStatusCode.Unauthorized, resultResponse(exception.message ?: unknownError))
    }
    exception<InvalidInputException> { exception ->
        call.respond(HttpStatusCode.BadRequest, resultResponse(exception.message ?: unknownError))
    }
    exception<UserCreationException> { exception ->
        call.respond(HttpStatusCode.BadRequest, resultResponse(exception.message ?: unknownError))
    }
    exception<SQLException> { exception ->
        call.respond(HttpStatusCode.BadRequest, resultResponse("Something went wrong with request. ${exception.message}"))
    }
}