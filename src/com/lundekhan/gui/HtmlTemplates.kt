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
        title: String,
        body: ASIDE.() -> Unit,
        date: String,
        image: String? = null,
        url: String? = null
    ): Unit = aside {
        style = "width:var(--width-card-wide)"
        image?.let { img(src=it) { height = "150" } }
        h3 { +title }
        body()
        url?.let { p { a(href=it){ em { +"More↗" } } } }
    }

    fun HTML.Shell(markdownSupport: Boolean = false, body: MAIN.() -> Unit) {
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
                    a(href = "/") {
                        img(alt = "londogard.com", src = "https://lh3.googleusercontent.com/proxy/XGbt6Sko-VTnnftF4ZUno7E7cNOzNSaVDLVQpTR6g4k0wgR4aoAg8JfQCoAFEVlW5FSR_TqIVRMCIJcABbU4Je7i00cTjTZMTMxZ") { height = "70" }
                        ul {
                            titles.forEach { header ->
                                li { a(href=header.href) { +header.title } } // TODO add blank target if Apps/GH.
                            }
                            li { a(href="https://play.google.com/store/apps/developer?id=Londogard", target = "_blank") { +"apps↗️" } }
                        }
                    }
                }
            }

            main {
                body()
                // hr {  } TODO insert each section here!
            }
            footer {
                hr {  }
                p {
                    +"Made by "
                    a(href="https://github.com/londogard/", target="_blank"){ + "Londogard↗️" }
                    br {  }
                }
            }
        }
    }
}
