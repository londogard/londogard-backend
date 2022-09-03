package com.londogard.blog

import com.londogard.gui.HtmlTemplates.respondHtmlShell
import com.londogard.gui.mediumCard
import com.londogard.gui.wideCard
import io.ktor.server.application.*
import io.ktor.server.routing.*
import kotlinx.html.*
import kotlinx.serialization.InternalSerializationApi

/** [indexRoute] is the Index Route that presents the webpage */
@InternalSerializationApi
fun Route.indexRoute(): Route = route("/") {
    // val db = BackendModule.db    // TODO cache blog in db

    get {
        val blogs = BlogHelper.fetchBlogRss()

        call.respondHtmlShell("NLP Products on a Raspberry Pi") {
            section {
                mediumCard("\uD83D\uDCDD Blogs", {
                    p {
                        +"Our blogs contains everything from Workshops & Deep Dives to lighter Today I Learned (TILs)."
                        br { }
                        +"Last 4 blogs. "
                        a(href = "https://blog.londogard.com/blog", target = "_blank") { +"All blogs↗" }
                    }

                    blogs.entry
                        .take(4)
                        .forEach { blog ->
                            hr { }
                            p {
                                a(
                                    href = "https://blog.londogard.com/blog/${blog.id.descapeHTML()}",
                                    target = "_blank"
                                ) { +"${blog.title.content}↗" }
                                br { }
                                small {
                                    style = "color: var(--color-text)"
                                    +blog.summary.content.descapeHTML()
                                }
                                br { }
                            }
                        }
                })
                mediumCard("\uD83E\uDD16 Projects", {
                    p {
                        +"Presenting a few of our projects, find the rest "
                        a(href = "projects") { +"here↗" }
                    }
                    hr { }
                    p {
                        style = "margin: 0"
                        b { a(href = "projects/safe-cosmetics") { +"Safe Cosmetics↗" } }
                        div {
                            style = "display: flex; flex-direction: row;"
                            p {
                                small {
                                    style = "color: var(--color-text)"
                                    p {
                                        i { +"A simple app to validate if your cosmetics, shampoo or anything contains toxic ingredients." }
                                        br { }
                                        +"Snap or upload a photo or simply paste the text and the models will show you!"
                                    }
                                }
                            }
                            img(src = "safe-cosmetics.jpg") {
                                style = "object-fit: contain;"
                                width = "25%"
                            }
                        }
                    }
                    hr { }
                    p {
                        style = "margin: 0"
                        b { a(href = "projects/ner") { +"SweNER↗" } }
                        div {
                            style = "display: flex; flex-direction: row; margin: 0;"
                            p {
                                small {
                                    style = "color: var(--color-text)"
                                    i { b { +"State-of-the-Art" }; +" Swedish Named Entity Recognizer" }
                                    br { }
                                    +"Developed to strike a balance between performance, efficiency & usability there exists two models of different architectures."
                                    br { }
                                    +"The models are quantized (1/4th size & 4x faster)"
                                    br { }
                                }
                            }
                            img(src = "swener.jpg") {
                                style = "object-fit: contain;"
                                width = "40%"
                            }
                        }
                    }
                    hr { }
                    p {
                        style = "margin: 0"
                        b { a(href = "https://colorkidz.londogard.com") { +"ColorKidz↗" } }
                        div {
                            style = "display: flex; flex-direction: row;"
                            p {
                                small {
                                    style = "color: var(--color-text)"
                                    i { +"Convert your images into colouring pages" }
                                    br { }
                                    +"Our only Progressive Web App (PWA) this far. ColorKidz turns your photo into a colouring page using an algorithmic approach. "
                                    br { }
                                }
                            }
                            img(src = "colorkidz.jpg") {
                                style = "object-fit: contain;"
                                width = "20%"
                            }
                        }
                    }
                })
            }
        }
    }
}

private fun String.descapeHTML(): String {
    val text = this
    return if (text.isEmpty()) text
    else text
        .replace("&#x27;", "'")
        .replace("&quot;", "\"")
        .replace("&amp;", "&")
        .replace("&lt;;", "<")
        .replace("&gt;;", ">")
        .replace("%20", "-")
}
