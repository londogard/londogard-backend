package com.lundekhan.gui

import kotlinx.html.*

data class Header(val title: String, val href: String)

object HtmlTemplates {
    private val titles = listOf(
        Header("blog.", "/blog"),
        Header("smry.", "/smry"),
        Header("textgen.", "/textgen"),
        Header("billsplit.", "/billsplit"),
        Header("urlshort.", "/url"),
        Header("fuzsearch.", "/fuzsearch")
    )

    fun SECTION.Card(
        title: String, body: ASIDE.() -> Unit, date: String,
        image: String? = null, url: String? = null
    ): Unit = aside {
        style = "width:var(--width-card-wide)"
        image?.let { img(src = it) { height = "150" } }
        h3 { +title }
        body()
        url?.let { p { a(href = it) { em { +"More↗" } } } }
    }

    // fun SECTION.Form(title: String, items: )

    fun HTML.Shell(markdownSupport: Boolean = false, jquerySupport: Boolean = false, body: MAIN.() -> Unit) {
        head {
            link(rel = "stylesheet", href = "https://andybrewer.github.io/mvp/mvp.css")
            meta(name = "description", content = "Londogard. Our landing page with a few of the products.")
            meta(name = "viewport", content = "width=device-width, initial-scale=1.0")
            meta(charset = "utf-8")
            title { +"Londogard - NLP products on a Raspberry Pi" }

            if (markdownSupport) {
                link(
                    rel = "stylesheet",
                    href = "//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.0.1/build/styles/default.min.css"
                )
                script(src = "//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.0.1/build/highlight.min.js") { }
                script { +"hljs.initHighlightingOnLoad();" }
            }
            if (jquerySupport) {
                script(src = "//code.jquery.com/jquery-1.11.1.min.js") {}
            }
        }
        body {
            header {
                style = "padding:1rem"
                nav {
                    style = "margin-bottom:0"
                    a(href = "/") {
                        img(
                            alt = "londogard.com",
                            src = "http://icon-library.com/images/l-icon/l-icon-22.jpg"
                        ) { height = "70" }
                        ul {
                            titles.forEach { header ->
                                li { a(href = header.href) { +header.title } } // TODO add blank target if Apps/GH.
                            }
                            li {
                                a(
                                    href = "https://play.google.com/store/apps/developer?id=Londogard",
                                    target = "_blank"
                                ) { +"apps↗️" }
                            }
                        }
                    }
                }
            }

            main {
                body()
                // hr {  } TODO insert each section here!
            }
            footer {
                hr { }
                p {
                    +"Made by "
                    a(href = "https://github.com/londogard/", target = "_blank") { +"Londogard↗️" }
                    br { }
                }
            }
        }
    }

    fun MAIN.copyScript(inputId: String = "myInput"): Unit = script {
        unsafe {
            raw(
                """
                                function myFunction() {
                                  var copyText = document.getElementById("$inputId");
                                  copyText.select();
                                  copyText.setSelectionRange(0, 99999)
                                  document.execCommand("copy");
                                }
                                """
            )
        }
    }
}
