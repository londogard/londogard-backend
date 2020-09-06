package com.lundekhan.blog

import com.lundekhan.Database
import com.lundekhan.blog.BlogHelper.simpleFormat
import com.lundekhan.gui.HtmlTemplates.respondHtmlShell
import com.lundekhan.gui.card
import com.lundekhan.gui.mediumCard
import io.ktor.application.*
import io.ktor.routing.*
import kotlinx.html.*
import org.intellij.markdown.flavours.gfm.GFMFlavourDescriptor
import org.intellij.markdown.parser.MarkdownParser
import org.koin.ktor.ext.inject

/** [indexRoute] is the Index Route that presents the webpage */
fun Route.indexRoute(): Route = route("/") {
    val db by inject<Database>()

    get {
        call.respondHtmlShell("NLP Products on a Raspberry Pi") {
            section {
                header { h2 { +"\uD83D\uDCDD Blogs & TILs" } }
                aside {
                    h3 { a(href = "/blog") { +"Blogs" } }
                    p { +"A longer post discussing and exploring a subject in depth." }
                    section {
                        db.blogQueries
                            .selectNBlogs(4L)
                            .executeAsList()
                            .forEach { blog ->
                                p {
                                    b { +blog.title }
                                    br {  }
                                    +blog.summary
                                    br {  }
                                    a(href = "/blog/${blog.blog_id}") { +"More↗" }
                                }
                            }
                    }
                }
                aside {
                    h3 { a(href = "/til") { +"TILs" } }
                    p { +"A shorter segment of what, why and how." }
                    section {
                        db.blogQueries
                            .selectNTILs(4L)
                            .executeAsList()
                            .forEach { blog ->
                                p {
                                    b { +blog.title }
                                    br {  }
                                    +blog.summary
                                    br {  }
                                    a(href = "/blog/${blog.blog_id}") { +"More↗" }
                                }
                            }
                    }
                }
            }
        }
    }
}