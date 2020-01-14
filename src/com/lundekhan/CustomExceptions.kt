package com.lundekhan

class InvalidCredentialsException(message: String) : RuntimeException(message)
class InvalidInputException(message: String) : RuntimeException(message)
class UserCreationException(message: String = "User could not be created") : RuntimeException(message)
val unknownError = "UNKNOWN ERROR"