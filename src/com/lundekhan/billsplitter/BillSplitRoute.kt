package com.lundekhan.billsplitter

import com.lundekhan.InvalidInputException
import com.lundekhan.gui.HtmlTemplates
import com.lundekhan.gui.HtmlTemplates.Shell
import com.lundekhan.summarizer.SummarizeReq
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
    fun SECTION.billsplitForm(text: String = "") = form(method = FormMethod.post) {
        style = "width:var(--width-card-medium)"
        textArea(rows = (text.count { it == '\n' } + 3).toString()) {
            name = "input"
            if (text.isEmpty()) placeholder = "hampus 20.5\nhampus 10.0\ndennis 38"
            else +text
        }
        submitInput {
            this.placeholder = "Submit"
        }
    }

    get {
        call.respondHtml {
            Shell() { // jquerySupport = true .. https://bootsnipp.com/snippets/VPRlZ
                section { billsplitForm() }
            }
        }
    }

    post {
        val params = call.receiveParameters()
        val payments = params["input"]
            ?.split('\n')
            ?.map { line -> line.split(' ') }
            ?.takeIf { it.size > 1 }
            ?.mapNotNull { (name, b) -> b.toDoubleOrNull()?.let { amount -> Pair(name.toLowerCase(), amount) } }
            ?.let { personAmounts -> splitBills(personAmounts) } ?: emptyList()

        call.respondHtml {
            Shell() {
                section {
                    billsplitForm(params["input"]!!)

                }
                section {
                    aside {
                        style = "width:var(--width-card-medium)"
                        payments.forEach { payment ->
                            +"${payment.payer} pays ${payment.owed} ${"%.1f".format(payment.amount)}:-"
                            br { }
                        }
                        if (payments.isEmpty()) +"No bills to split!"
                    }
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