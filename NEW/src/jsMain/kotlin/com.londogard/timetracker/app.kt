package com.londogard.timetracker

import com.londogard.timetracker.components.TodoItem
import dev.fritz2.binding.storeOf
import dev.fritz2.components.box
import dev.fritz2.components.stackUp
import dev.fritz2.dom.html.RenderContext
import dev.fritz2.dom.html.render
import dev.fritz2.dom.mount
import dev.fritz2.routing.router
import dev.fritz2.styling.style
import kotlinx.coroutines.ExperimentalCoroutinesApi

@ExperimentalCoroutinesApi
fun main() {
    val router = router("todo")

    render {

        div("header") {
            p { +"Header" }
            hr { }
        }

        div("content") {
            router.data.render { site ->
                when (site) {
                    "todo" -> mainContent()
                    else -> mainContent()
                }
            }
        }

        div("footer") {
            hr { }
            p { +"Footer" }
        }
    }.mount("target")
}

fun RenderContext.mainContent() {
    h1 { +"My App" }
    stackUp {
        items {
            box {
                TodoItem(storeOf(false)).render(this)
            } // simplified for readability
            box { p { +"2" } }
            box { p { +"3" } }
        }
    }
}