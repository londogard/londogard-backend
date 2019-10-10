package com.lundekhan.billsplitter

import com.lundekhan.htmltemplates.respondHtmlDefault
import io.ktor.application.call
import io.ktor.http.HttpStatusCode
import io.ktor.request.receiveParameters
import io.ktor.response.respond
import io.ktor.routing.Route
import io.ktor.routing.get
import io.ktor.routing.post
import io.ktor.routing.route
import kotlinx.html.*

fun Route.BillSplit() {
    route("/billsplit") {
        get {
            call.respondHtmlDefault("billsplit.", 4) {
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
        }
        post {
            val personAmount = call
                .receiveParameters()["text"]
                ?.split(',')
                ?.mapNotNull { getPersonAmount(it) }
                ?: listOf()
            return@post if (personAmount.isEmpty())
                call.respond(HttpStatusCode.BadRequest, "Persons & amount must be supplied (<NAME> <AMOUNT>, ...).")
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

fun getPersonAmount(personSlot: String): Pair<String, Double>? =
    personSlot
        .trim()
        .split(' ')
        .getHeadPair()
        ?.let { (person, amount) -> amount.toDoubleOrNull()?.let { Pair(person, it) } }

// TODO perhaps throw error instead and visualize issue with input
fun <T> List<T>.getHeadPair(): Pair<T, T>? =
    if (this.size >= 2) Pair(this[0], this[1]) else null