package com.lundekhan.blog

import com.lundekhan.Database
import com.lundekhan.gui.HtmlTemplates.respondHtmlShell
import com.lundekhan.gui.card
import io.ktor.application.*
import io.ktor.routing.*
import kotlinx.html.h2
import kotlinx.html.header
import kotlinx.html.section
import org.intellij.markdown.flavours.gfm.GFMFlavourDescriptor
import org.intellij.markdown.parser.MarkdownParser
import org.koin.ktor.ext.inject

fun Route.indexRoute(): Route = route("/") {
    val db by inject<Database>()
    val flavor = GFMFlavourDescriptor()
    val parser = MarkdownParser(flavor)

    get {
        call.respondHtmlShell("Blogs & TILs") {
            section {
                header { h2 { +"\uD83D\uDCDD Blogs & TILs" } }
                card("Blog", {
                    section {
                        BlogHelper
                            .getAllBlogs(db)
                            .take(4)
                            .forEach { card(it.title, { +it.summary }, it.date, url = "/blog/${it.id}") }
                    }
                })
                card("TILs", {
                    section {
                        BlogHelper
                            .getAllBlogs(db)
                            .take(4)
                            .forEach { card(it.title, { +it.summary }, it.date, url = "/blog/${it.id}") }
                    }
                })
            }
        }
    }
}