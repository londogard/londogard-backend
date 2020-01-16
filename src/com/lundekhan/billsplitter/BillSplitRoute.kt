package com.lundekhan.billsplitter

import com.lundekhan.InvalidInputException
import io.ktor.application.call
import io.ktor.request.receiveOrNull
import io.ktor.response.respond
import io.ktor.routing.Route
import io.ktor.routing.post
import io.ktor.routing.route

fun Route.billsplit(): Route = route("/billsplit") {
    /**
     * A POST request to /billsplit.
     * Body: Json [PostPersonPayments] where each payment in list is
     *
     * Returns a list of [PersonPayment]
     */
    post {
        val payments = call
            .receiveOrNull<PostPersonPayments>()
            ?.payments
            ?.map { Pair(it.person, it.amount) } ?: throw InvalidInputException("POST /billsplit require json body. Format: {'payments': [{person: 'name', amount: 0.00},...]}")

        call.respond(splitBills(payments))
    }
}


data class PostPayments(val person: String, val amount: Double = 0.0)
data class PostPersonPayments(val payments: List<PostPayments>)