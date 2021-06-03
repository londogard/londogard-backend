package com.londogard

import io.ktor.application.call
import io.ktor.features.StatusPages.Configuration
import io.ktor.http.HttpStatusCode
import io.ktor.response.respond
import io.ktor.utils.io.*
import java.sql.SQLException

class InvalidCredentialsException(message: String) : RuntimeException(message)
class InvalidInputException(message: String) : RuntimeException(message)
class UserCreationException(message: String = "User could not be created") : RuntimeException(message)
class InvalidRouteException(message: String = "Route does not exist") : RuntimeException(message)
const val unknownError = "UNKNOWN ERROR"

fun Configuration.getExceptionResponses() {
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
        exception.printStack()
        call.respond(HttpStatusCode.BadRequest, resultResponse("Something went wrong with request. ${exception.message}"))
    }
}