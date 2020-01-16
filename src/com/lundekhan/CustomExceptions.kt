package com.lundekhan

class InvalidCredentialsException(message: String) : RuntimeException(message)
class InvalidInputException(message: String) : RuntimeException(message)
class UserCreationException(message: String = "User could not be created") : RuntimeException(message)
class InvalidRouteException(message: String = "Route does not exist") : RuntimeException(message)
const val unknownError = "UNKNOWN ERROR"