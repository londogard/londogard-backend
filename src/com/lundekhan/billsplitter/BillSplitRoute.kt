package com.lundekhan.billsplitter

import com.lundekhan.BillSplit
import com.lundekhan.InvalidInputException
import com.lundekhan.htmltemplates.respondHtmlDefault
import com.lundekhan.resultResponse
import io.ktor.application.call
import io.ktor.http.HttpStatusCode
import io.ktor.request.receive
import io.ktor.request.receiveOrNull
import io.ktor.request.receiveParameters
import io.ktor.response.respond
import io.ktor.routing.Route
import io.ktor.routing.get
import io.ktor.routing.post
import io.ktor.routing.route
import kotlinx.html.*

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
    route("/ui") {
        get {
            call.respondHtmlDefault("billsplit.", 4) { billsplitBody() }
        }
        /**
         * A POST reuqest to the [BillSplit], respond with
         */
        post {
            val personAmount = call
                .receiveParameters()["text"]
                ?.split(',')
                ?.mapNotNull { getPersonAmount(it) }
                ?: listOf()
            if (personAmount.isEmpty())
                throw InvalidInputException("Persons & amount must be supplied (<NAME> <AMOUNT>, ...). Input was : ${call.receiveParameters()["text"]}")
            else {
                val result = splitBills(personAmount)
                call.respondHtmlDefault("billsplit.", 4) {
                    // TODO remove index and compare str
                    result.forEach { payment ->
                        p { +"${payment.payer} pays ${payment.owed} ${payment.amount}" }
                    }
                }
            }
        }
    }
}

private fun BODY.billsplitBody() {
    p { +"Bill Splitter. Format: <NAME> <AMOUNT>" }
    p { +"Split by comma" }
    form(encType = FormEncType.applicationXWwwFormUrlEncoded, method = FormMethod.post) {
        input {
            type = InputType.text
            name = "text"
        }
        br
        input {
            type = InputType.submit
            value = "submit"
        }
    }
}

data class PostPayments(val person: String, val amount: Double = 0.0)
data class PostPersonPayments(val payments: List<PostPayments>)

private fun getPersonAmount(personSlot: String): Pair<String, Double>? =
    personSlot
        .trim()
        .split(' ')
        .getHeadPair()
        ?.let { (person, amount) -> amount.toDoubleOrNull()?.let { Pair(person, it) } }

fun <T> List<T>.getHeadPair(): Pair<T, T>? =
    if (this.size >= 2) Pair(this[0], this[1]) else null