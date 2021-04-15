package com.londogard.gui

import io.ktor.application.ApplicationCall
import io.ktor.html.respondHtml
import kotlinx.html.*

data class Header(val title: String, val href: String)

object HtmlTemplates {
    private const val appStoreUrl = "https://play.google.com/store/apps/developer?id=Londogard"
    private val titles = listOf(
        Header("projects.", "/projects"),
        Header("about.", "/about"),
        Header("blog.", "https://blog.londogard.com")
    )

    suspend fun ApplicationCall.respondHtmlShell(
        title: String,
        markdownSupport: Boolean = false,
        jquerySupport: Boolean = false,
        htmxSupport: Boolean = false,
        body: MAIN.() -> Unit
    ): Unit = respondHtml { htmlShell(title, markdownSupport, jquerySupport, htmxSupport, body) }

    fun HTML.htmlShell(
        title: String,
        markdownSupport: Boolean = false,
        jquerySupport: Boolean = false,
        htmxSupport: Boolean = false,
        body: MAIN.() -> Unit
    ) {
        head {
            link(rel = "stylesheet", href = "/css")
            meta(name = "description", content = "Londogard. Our landing page with a few of the products.")
            meta(name = "viewport", content = "width=device-width, initial-scale=1.0")
            meta(charset = "utf-8")
            title { +"$title - Londogard" }

            // unsafe { raw("""<script data-ad-client="ca-pub-7340600106400694" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>""") }
            if (markdownSupport) {
                link(
                    rel = "stylesheet",
                    href = "//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.0.1/build/styles/default.min.css"
                )
                script(src = "//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.0.1/build/highlight.min.js") { }
                script { unsafe { +"hljs.initHighlightingOnLoad();" } }
            }
            if (jquerySupport) {
                script(src = "//code.jquery.com/jquery-1.11.1.min.js") { }
            }
            if (htmxSupport) {
                script(src = "https://unpkg.com/htmx.org@1.0.2") { }
            }
        }

        body {
            header()
            main { body() }
            footer {
                hr { }
                p {
                    +"Made by Londogard "
                    a(href = "https://blog.londogard.com/feed.xml", target="_blank") {
                        style = "float:right"
                        img(src = "/rss.svg", alt = "rss feed") { height = "24" }
                    }
                    a(appStoreUrl, target="_blank") {
                        style = "float:right"
                        img(src = "/playstore.svg", alt = "Android Play Store") { height = "24" }
                    }
                    a(href="https://github.com/londogard/", target="_blank") {
                        style = "float:right"
                        img(src="/github.svg", alt="GitHub") { height = "24" }
                    }
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

    private fun BODY.header(): Unit = header {
        style = "padding:1rem"
        nav {
            style = "margin-bottom:0"
            a(href = "/") {
                img(alt = "londogard.com", src = "/favicon.ico") {
                    height = "70"
                }
            }
            ul { titles.forEach { header -> li { a(href = header.href) { +header.title } } } }
        }
    }
}
