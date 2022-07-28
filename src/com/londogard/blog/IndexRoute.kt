package com.londogard.blog

import com.londogard.BackendModule
import com.londogard.Database
import com.londogard.gui.HtmlTemplates.respondHtmlShell
import com.londogard.gui.mediumCard
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
                        +blogs.subtitle.descapeHTML()
                        //+"Our blogs contains everything from Workshops & Deep Dives to lighter Today I Learned (TILs)."
                        br { }
                        +"Only last 4 blogs. "
                        a(href = "https://blog.londogard.com/blog", target = "_blank") { +"All blogs↗" }
                    }

                    blogs.entry
                        .take(4)
                        .forEach { blog ->
                            hr { }
                            p {
                                b { +blog.title.content.descapeHTML() }
                                br { }
                                small {
                                    style = "color: var(--color-text)"
                                    +blog.summary.content.descapeHTML()
                                }
                                br { }
                                a(href = "https://blog.londogard.com/blog/${blog.id.descapeHTML()}") { +"More↗" }
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
                        style= "margin: 0"
                        b { +"SweNER" }
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
                                a(href = "projects/ner") { +"Demo↗" }
                            }
                            img(src = "swener.jpg") {
                                style = "object-fit: contain;"
                                width = "40%"
                            }
                        }
                    }
                    hr { }
                    p {
                        style= "margin: 0"
                        b { +"ColorKidz" }
                        div {
                            style = "display: flex; flex-direction: row;"
                            p {
                                small {
                                    style = "color: var(--color-text)"
                                    i { +"Convert your images into colouring pages" }
                                    br { }
                                    +"Our only Progressive Web App (PWA) this far. ColorKidz turns your photo into a colouring page using an algorithmic approach. "
                                    br {  }
                                }
                                a(href = "https://colorkidz.londogard.com") { +"Demo↗" }
                            }
                            img(src = "colorkidz.jpg") {
                                style = "object-fit: contain;"
                                width = "15%"
                            }
                        }
                    }
                    hr { }
                    p {
                        b { +"Summarizer" }
                        br { }
                        small {
                            style = "color: var(--color-text)"
                            i { b { +"State-of-the-Art" }; +" language-independent extractive summarizer." }
                            br { }
                            +"Built a very powerful yet simple summarizer that uses pure statistics, no large neural networks or anything. It does "
                            i { +"extractive summarization" }
                            +" and it's only the TfIdf-variant is language independent."
                        }
                        br { }
                        a(href = "projects/smry") { +"Demo↗" }
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
