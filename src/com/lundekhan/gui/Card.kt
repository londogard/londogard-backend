package com.lundekhan.gui

import kotlinx.html.*

/** [wideCard] create a wide card, all nulls are optional */
fun SECTION.wideCard(
    title: String, body: ASIDE.() -> Unit, date: String? = null,
    image: String? = null, url: String? = null, smallLink: Boolean = false
): Unit = aside {
    style = "width:var(--width-card-wide)"
    image?.let { img(src = it) { height = "150" } }
    h3 { +title }
    body()
    url?.let { p { a(href = it) { if(smallLink) +"More↗" else em { +"More↗" } } } }
}

/** [wideCard] create a medium card, all nulls are optional */
fun SECTION.card(
    title: String, body: ASIDE.() -> Unit, date: String? = null,
    image: String? = null, url: String? = null, smallLink: Boolean = true
): Unit = aside {
    style = "width:var(--width-card-medium)"
    image?.let { img(src = it) { height = "150" } }
    h3 { +title }
    body()
    url?.let { p { a(href = it) { if(smallLink) +"More↗" else em { +"More↗" } } } }
}