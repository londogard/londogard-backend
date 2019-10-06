package com.lundekhan.billsplitter

import com.lundekhan.htmltemplates.respondHtmlDefault
import io.ktor.application.call
import io.ktor.routing.Route
import io.ktor.routing.get
import io.ktor.routing.post
import io.ktor.routing.route
import kotlinx.html.hardTextArea
import kotlinx.html.p
import kotlinx.html.submitInput

fun Route.BillSplit() {
    route("/billsplit") {
        get {
            call.respondHtmlDefault("billsplit.", 4) {
                p { + "Bill Splitter. Format: <NAME> <AMOUNT>" }
                p { + "Split by spaces, comma or newline." }
                hardTextArea { }
                submitInput {  }
            }
        }
        post {

        }
    }
}