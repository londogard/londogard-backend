package com.londogard.billsplitter

import com.londogard.gui.HtmlTemplates.respondHtmlShell
import io.ktor.application.call
import io.ktor.request.receiveParameters
import io.ktor.routing.Route
import io.ktor.routing.get
import io.ktor.routing.post
import io.ktor.routing.route
import kotlinx.html.*
import kotlinx.serialization.Serializable

fun Route.billsplit(): Route = route("/billsplit") {
    fun SECTION.billsplitForm(text: String = ""): Unit = form(method = FormMethod.post) {
        header {
            style = "padding:0;"
            h3 { +"billsplit." }
            small { +"Split your bills. Add names and amount paid, you can add the same person multiple times." }
        }
        textArea(rows = "${(text.count { it == '\n' } + 3)}") {
            name = "input"
            placeholder = "hampus 20.5\nhampus 10.0\ndennis 38"
            if (text.isNotEmpty()) +text
        }
        postButton { +"Submit" }
    }

    get { call.respondHtmlShell("Billsplitter 'Split your bills'") { section { billsplitForm() } } }

    post {
        val params = call.receiveParameters()
        val payments = params["input"]
            ?.split('\n', ',')
            ?.map { line -> line.split(' ') }
            ?.takeIf { it.size > 1 }
            ?.filter { it.size >= 2 }
            ?.map { (name, amount) -> name to (amount.toDoubleOrNull() ?: 0.0) }
            ?.let { personAmounts -> splitBills(personAmounts) } ?: emptyList()

        call.respondHtmlShell("Billsplitter 'Split your bills'") {
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
}


@Serializable data class PostPayments(val person: String, val amount: Double = 0.0)
@Serializable data class PostPersonPayments(val payments: List<PostPayments>)