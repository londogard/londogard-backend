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

@ExperimentalStdlibApi
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
                placeholder = "Number of years  "
                if (year.isNotEmpty()) value = year
            }
            numberInput(name = "startAmount") {
                min = "0"
                step = "500"
                placeholder = "Initial deposit"
                if (startAmount.isNotEmpty()) value = startAmount
            }
        }
        section {
            numberInput(name = "interest") {
                min = "0"
                step = "0.1"
                placeholder = "Interest (7 = 7%)"
                if (interest.isNotEmpty()) value = interest
            }
            numberInput(name = "monthlyDeposits") {
                step = "100"
                placeholder = "Monthly deposit"
                if (monthlyDeposit.isNotEmpty()) value = monthlyDeposit
            }
        }
        postButton { +"Calculate" }
    }
    get { call.respondHtmlShell { section { stokkForm() } } }
    post {
        val params = call.receiveParameters()
        val years = params["year"]?.toIntOrNull() ?: 0
        val startAmount = params["startAmount"]?.toDoubleOrNull() ?: 0.0
        val interest = params["interest"]?.toDoubleOrNull() ?: 0.0
        val monthlyDeposit = params["monthlyDeposits"]?.toIntOrNull() ?: 0
        val compoundedData = StokkHelper.compoundInterestMonthByMonth(
            years, startAmount,
            interest / 100 + 1.0, monthlyDeposit
        )

        call.respondHtmlShell {
            section {
                stokkForm(
                        years.toString(),
                        startAmount.toString(),
                        interest.toString(),
                        monthlyDeposit.toString()
                )
            }
            section {
                aside {
                    h3 { +"Result: " }
                    +compoundedData.lastOrNull()?.roundToInt()?.toString() ?: "0.0"
                }
            }
        }
    }
}