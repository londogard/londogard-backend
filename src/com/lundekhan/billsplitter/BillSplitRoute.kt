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
import org.koin.ext.isFloat

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
            println("HER")
            val personAmount = call
                .receiveParameters()["text"]
                ?.split(',')
                ?.mapNotNull { personAmount ->
                    personAmount
                        .trim()
                        .split(' ')
                        .take(2)
                        .map { it.trim() }
                        .zipWithNext()
                        .firstOrNull()
                }
                ?.mapNotNull { (name, amount) ->
                    amount.toDoubleOrNull()?.let { notNullAmt -> Pair(name, notNullAmt) }
                }
                ?: listOf()
            return@post if (personAmount.isEmpty())
                call.respond(HttpStatusCode.BadRequest, "Persons & amount must be supplied (<NAME> <AMOUNT>, ...).")
            else {
                val result = splitBills(personAmount)
                call.respondHtmlDefault("billsplit.", 4) {
                    result.forEach { payment ->
                        p { +"${payment.payer} pays ${payment.owed} ${payment.amount}" }
                    }
                }
            }
        }
    }
}