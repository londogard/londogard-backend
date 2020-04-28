package com.lundekhan.gui

import kotlinx.html.*

data class Header(val title: String, val href: String)

object HtmlTemplates {
    private val titles = listOf<Header>(
        Header("smry.", "/smry"),
        Header("textgen.", "/textgen"),
        Header("billsplit.", "/billsplit"),
        Header("urlshort.", "/url"),
        Header("fuzsearch.", "/fuzsearch"),
        Header("github.", "/github"),
        Header("apps.", "/apps")
    )

    fun HTML.Shell(markdownSupport: Boolean = false): Unit {
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
        }
        body {
            header {
                nav {
                    a(href = "https://londogard.com") {
                        img(alt = "londogard.com", src = ":D") { height = "70" }
                        ul {
                            titles.forEach { header ->
                                li { a(href=header.href) { +header.title } } // TODO add blank target if Apps/GH.
                            }
                        }
                    }
                }
            }

            main {
                // hr {  } TODO insert each section here!
            }
            footer {
                hr {  }
                p {
                    +"Made by "
                    a(href="https://github.com/londogard/", target="_blank"){ + "Londogard &nearr;" }
                    br {  }
                }
            }
        }
    }
}
