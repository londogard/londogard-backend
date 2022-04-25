package com.londogard

import io.ktor.http.*
import io.ktor.server.plugins.statuspages.*
import io.ktor.server.response.*
import io.ktor.utils.io.*
import java.sql.SQLException

class InvalidCredentialsException(message: String) : RuntimeException(message)
class InvalidInputException(message: String) : RuntimeException(message)
class UserCreationException(message: String = "User could not be created") : RuntimeException(message)
class InvalidRouteException(message: String = "Route does not exist") : RuntimeException(message)
const val unknownError = "UNKNOWN ERROR"

fun StatusPagesConfig.getExceptionResponses() {
    exception<InvalidCredentialsException> { call, exception ->
        call.respond(HttpStatusCode.Unauthorized, resultResponse(exception.message ?: unknownError))
    }
    exception<InvalidInputException> { call, exception ->
        call.respond(HttpStatusCode.BadRequest, resultResponse(exception.message ?: unknownError))
    }
    exception<UserCreationException> { call, exception ->
        call.respond(HttpStatusCode.BadRequest, resultResponse(exception.message ?: unknownError))
    }
    exception<SQLException> { call, exception ->
        exception.printStack()
        call.respond(HttpStatusCode.BadRequest, resultResponse("Something went wrong with request. ${exception.message}"))
    }
}