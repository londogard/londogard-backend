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
                                a(href = blog.id) { +"More↗" }
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
}
