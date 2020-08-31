package com.lundekhan.gui

import kotlinx.html.*

fun SECTION.wideCard(
    title: String, body: ASIDE.() -> Unit, date: String? = null,
    image: String? = null, url: String? = null
): Unit = aside {
    style = "width:var(--width-card-wide)"
    image?.let { img(src = it) { height = "150" } }
    h3 { +title }
    body()
    url?.let { p { a(href = it) { em { +"More↗" } } } }
}

fun SECTION.card(
    title: String, body: ASIDE.() -> Unit, date: String? = null,
    image: String? = null, url: String? = null
): Unit = aside {
    style = "width:var(--width-card-medium)"
    image?.let { img(src = it) { height = "150" } }
    h3 { +title }
    body()
    url?.let { p { a(href = it) { em { +"More↗" } } } }
}