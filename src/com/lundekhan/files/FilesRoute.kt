package com.lundekhan.files

import com.lundekhan.Database
import com.lundekhan.InvalidCredentialsException
import com.lundekhan.jwtauth.principal
import io.ktor.application.call
import io.ktor.routing.Route
import io.ktor.routing.get
import io.ktor.routing.post
import io.ktor.routing.route
import org.koin.ktor.ext.inject

fun Route.filesRoute(): Route = route("/files") {
    val db by inject<Database>()

    post("/upload") {
        val principalId = call.principal?.payload?.id ?: throw InvalidCredentialsException("User ID not found in token")

        /**
         * 1. Get User
         * 2. Download File
         * 3. Place File in DB
         * 4. Read on file-structure for file-saving (?)
         */
    }

    get {
        val principalId = call.principal?.payload?.id ?: throw InvalidCredentialsException("User ID not found in token")
        // ... what to do next ?
    }

}