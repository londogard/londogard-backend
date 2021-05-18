package com.londogard.blog

import com.londogard.Database
import com.londogard.gui.HtmlTemplates.respondHtmlShell
import com.londogard.gui.wideCard
import io.ktor.application.*
import io.ktor.routing.*
import io.ktor.util.*
import kotlinx.html.*
import kotlinx.serialization.InternalSerializationApi
import org.koin.ktor.ext.inject

/** [indexRoute] is the Index Route that presents the webpage */
@KtorExperimentalAPI
@InternalSerializationApi
fun Route.indexRoute(): Route = route("/") {
    val db by inject<Database>()    // TODO cache blog in db

    get {
        val blogs = BlogHelper.fetchBlogRss()

        call.respondHtmlShell("NLP Products on a Raspberry Pi") {
            section {
                wideCard("\uD83E\uDD16 Projects", {
                    p {
                        +"Presenting a few of our projects, find the rest "
                        a(href = "projects") { +"here↗" }
                    }

                    hr { }
                    p {
                        b { +"SweNER"}
                        small {
                            style="color: var(--color-text)"
                            i { +"A "; b { +"State-of-the-Art" }; +" Named Entity Recognizer for Swedish" }
                            br { }
                            +"Developed to strike a balance between performance, efficiency & usability there exists two models of different architectures."
                            br { }
                            +"The models are quantized (1/4th size, 4x faster) and run on a single Raspberry Pi along with our other projects!"
                        }
                        br { }
                        a(href = "projects/ner") { +"Demo↗" }
                    }
                    hr { }
                    p {
                        b { +"ColorKidz"}
                        small {
                            style="color: var(--color-text)"
                            i { +"Convert your images into colouring pages" }
                            br { }
                            +"Our only Progressive Web App (PWA) this far. ColorKidz turns your photo into a colouring page using an algorithmic approach. "
                        }
                        br { }
                        a(href = "https://colorkidz.londogard.com") { +"Demo↗" }
                    }
                    hr { }
                    p {
                        b { +"Summarizer"}
                        small {
                            style="color: var(--color-text)"
                            i { +"A "; b { +"State-of-the-Art" }; +" language-independent extractive summarizer." }
                            br { }
                            +"Built a very powerful yet simple summarizer that uses pure statistics, no large neural networks or anything. It does "
                            i { +"extractive summarization" }
                            +" and it's only the TfIdf-variant is language independent."
                        }
                        br { }
                        a(href = "projects/smry") { +"Demo↗" }
                    }

                })
                wideCard("\uD83D\uDCDD Blogs", {
                    p {
                        +blogs.subtitle.descapeHTML()
                        //+"Our blogs contains everything from Workshops & Deep Dives to lighter Today I Learned (TILs)."
                        br { }
                        +"Only last 4 blogs. "
                        a(href = "https://blog.londogard.com", target = "_blank") { +"All blogs↗" }
                    }

                    blogs.entry
                        .take(4)
                        .forEach { blog ->
                            hr { }
                            p {
                                b { +blog.title.content.descapeHTML() }
                                br { }
                                small {
                                    style="color: var(--color-text)"
                                    +blog.summary.content.descapeHTML()
                                }
                                br { }
                                a(href = blog.id.descapeHTML()) { +"More↗" }
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
