package com.lundekhan.billsplitter

import com.lundekhan.InvalidInputException
import com.lundekhan.gui.HtmlTemplates.Shell
import com.lundekhan.gui.HtmlTemplates.respondHtmlShell
import io.ktor.application.call
import io.ktor.html.respondHtml
import io.ktor.request.receiveOrNull
import io.ktor.request.receiveParameters
import io.ktor.response.respond
import io.ktor.routing.Route
import io.ktor.routing.get
import io.ktor.routing.post
import io.ktor.routing.route
import kotlinx.html.*

fun Route.billsplit(): Route = route("/billsplit") {
    fun SECTION.billsplitForm(text: String = ""): Unit = form(method = FormMethod.post) {
        header {
            style = "padding:0;"
            h3 { +"billsplit." }
            small { +"Split your bills. Add names and amount paid, you can add the same person multiple times." }
        }
        textArea(rows = (text.count { it == '\n' } + 3).toString()) {
            name = "input"
            placeholder = "hampus 20.5\nhampus 10.0\ndennis 38"
            if (text.isNotEmpty()) +text
        }
        postButton { +"Submit" }
    }

    get { call.respondHtmlShell { section { billsplitForm() } } }

    post {
        val params = call.receiveParameters()
        val payments = params["input"]
            ?.split('\n', ',')
            ?.map { line -> line.split(' ') }
            ?.takeIf { it.size > 1 }
            ?.filter { it.size >= 2 }
            ?.map { (name, amount) -> name to (amount.toDoubleOrNull() ?: 0.0) }
            ?.let { personAmounts -> splitBills(personAmounts) } ?: emptyList()

        call.respondHtmlShell {
            section { billsplitForm(params["input"]!!) }
            section {
                aside {
                    payments.forEach { payment ->
                        +"${payment.payer} pays ${payment.owed} ${"%.1f".format(payment.amount)}:-"
                        br { }
                    }
                    if (payments.isEmpty()) +"No bills to split!"
                }
            }
        }
    }

    /**
     * A POST request to /billsplit.
     * Body: Json [PostPersonPayments] where each payment in list is
     *
     * Returns a list of [PersonPayment]
     */
    route("/api") {
        post {
            val payments = call
                .receiveOrNull<PostPersonPayments>()
                ?.payments
                ?.map { Pair(it.person, it.amount) }
                ?: throw InvalidInputException("POST /billsplit require json body. Format: {'payments': [{person: 'name', amount: 0.00},...]}")

            call.respond(splitBills(payments))
        }
    }
}


data class PostPayments(val person: String, val amount: Double = 0.0)
data class PostPersonPayments(val payments: List<PostPayments>)