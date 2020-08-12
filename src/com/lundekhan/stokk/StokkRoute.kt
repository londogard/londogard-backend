package com.lundekhan

import com.lundekhan.gui.HtmlTemplates.respondHtmlShell
import com.lundekhan.stokk.StokkHelper
import io.ktor.application.call
import io.ktor.request.receiveParameters
import io.ktor.routing.Route
import io.ktor.routing.get
import io.ktor.routing.post
import io.ktor.routing.route
import kotlinx.html.*
import kotlin.math.roundToInt

fun Route.stokkRoute(): Route = route("/stokk") {

    fun SECTION.stokkForm(
        year: String = "",
        startAmount: String = "",
        interest: String = "",
        monthlyDeposit: String = ""
    ): Unit = form(method = FormMethod.post) {
        header {
            style = "padding:0;"
            h3 { +"compoundcalc." }
            small { +"Calculate the compound interest!" }
        }
        section {
            numberInput(name = "year") {
                placeholder = "year"
                if (year.isNotEmpty()) value = year
            }
            numberInput(name = "startAmount") {
                min = "0"
                step = "500"
                placeholder = "startAmount"
                if (startAmount.isNotEmpty()) value = startAmount
            }
        }
        section {
            numberInput(name = "interest") {
                min = "0"
                step = "0.1"
                placeholder = "interest"
                if (interest.isNotEmpty()) value = interest
            }
            numberInput(name = "monthlyDeposits") {
                step = "100"
                placeholder = "monthlyDeposits"
                if (monthlyDeposit.isNotEmpty()) value = monthlyDeposit
            }
        }
        postButton { +"Calculate" }
    }
    get { call.respondHtmlShell { section { stokkForm() } } }
    post {
        val params = call.receiveParameters()
        val years = params["year"]?.toInt() ?: 0
        val startAmount = params["startAmount"]?.toDouble() ?: 0.0
        val interest = params["interest"]?.toDouble() ?: 0.0
        val monthlyDeposit = params["monthlyDeposits"]?.toInt() ?: 0
        val compoundedData = StokkHelper.compoundInterest(
            years, startAmount,
            interest / 100 + 1.0, monthlyDeposit
        )

        call.respondHtmlShell {
            section {
                stokkForm(
                    params["year"]!!,
                    params["startAmount"]!!,
                    params["interest"]!!,
                    params["monthlyDeposits"]!!
                )
            }
            section {
                aside {
                    h3 { +"Result: " }
                    +compoundedData.roundToInt().toString()
                }
            }
        }
    }
}