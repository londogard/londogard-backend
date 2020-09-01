package com.lundekhan.blog

import com.lundekhan.Database
import com.lundekhan.blog.BlogHelper.simpleFormat
import com.lundekhan.gui.HtmlTemplates.respondHtmlShell
import com.lundekhan.gui.card
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
                    style = "width:var(--width-card-medium)"
                    h3 { a(href = "/blog") { +"Blogs" } }
                    section {
                        p { +"A longer post discussing and exploring a subject in depth." }
                        db.blogQueries
                            .selectNBlogs(4L)
                            .executeAsList()
                            .forEach { blog -> card(blog.title, { +blog.summary }, blog.date.simpleFormat(), url = "/blog/${blog.blog_id}") }
                    }
                }
                aside {
                    style = "width:var(--width-card-medium)"
                    h3 { a(href = "/til") { +"TILs" } }
                    section {
                        p { +"A shorter segment of what, why and how." }
                        db.blogQueries
                            .selectNTILs(4L)
                            .executeAsList()
                            .forEach { blog -> card(blog.title, { +blog.summary }, blog.date.simpleFormat(), url = "/blog/${blog.blog_id}") }
                    }
                }
            }
        }
    }
}