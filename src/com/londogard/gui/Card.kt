package com.londogard.gui

import kotlinx.html.*

/** [wideCard] create a wide card, all nulls are optional */
fun FlowContent.wideCard(
    title: String, body: DIV.() -> Unit, date: String? = null,
    image: String? = null, url: String? = null
): Unit = aside {
    style = "width:var(--width-card-wide);display:flex;flex-wrap:wrap;"

    image?.let { img(src = it) {
        width = "33%"
        style="object-fit: contain;"
    } }
    val width = if (image != null) "width:50%;" else ""
    div {
        style = "margin-left:16px;$width"
        when (url) {
            null -> h3 { +title }
            else -> a(href=url) { h3 { +title } }
        }
        body()
    }
}

/** [mediumCard] creates a medium card */
fun FlowContent.mediumCard(
    title: String, body: FlowContent.() -> Unit, date: String? = null,
    image: String? = null, url: String? = null, smallLink: Boolean = true
): Unit = aside {
    style = "width:var(--width-card-medium)"
    image?.let { img(src = it) { height = "150" } }
    h3 { +title }
    body()
    url?.let { p { a(href = it) { if(smallLink) +"More↗" else em { +"More↗" } } } }
}

/** [card] create a small card, all nulls are optional */
fun FlowContent.card(
    title: String, body: FlowContent.() -> Unit, date: String? = null,
    image: String? = null, url: String? = null, smallLink: Boolean = true
): Unit = aside {
    image?.let { img(src = it) { height = "150" } }
    h3 { +title }
    body()
    url?.let { p { a(href = it) { if(smallLink) +"More↗" else em { +"More↗" } } } }
}