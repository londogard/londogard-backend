package com.lundekhan

import com.londogard.stokk.Stokk
import io.ktor.application.call
import io.ktor.request.receive
import io.ktor.response.respond
import io.ktor.routing.Route
import io.ktor.routing.post
import io.ktor.routing.route

fun Route.stockRoute(): Route = route("/stock") {

    post {
        val compoundInput = call.receive<CompoundInput>()
        val compoundedData = Stokk.compoundInterest(compoundInput.years, compoundInput.startAmount,
            compoundInput.interest, compoundInput.monthlyDeposit)

        call.respond(ResultResponse(compoundedData.toString()))
    }
    post("/yearbyyear") {
        val compoundInput = call.receive<CompoundInput>()
        val compoundedData = Stokk.compoundInterest(compoundInput.years, compoundInput.startAmount,
            compoundInput.interest, compoundInput.monthlyDeposit)

        call.respond(ResultResponse(compoundedData.toString()))
    }
}

data class CompoundInput(val years: Int, val startAmount: Double, val interest: Double = 1.0, val monthlyDeposit: Int = 0)