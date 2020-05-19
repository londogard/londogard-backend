package com.lundekhan.blog

import com.lundekhan.Database
import com.lundekhan.InvalidRouteException
import com.lundekhan.gui.HtmlTemplates.Card
import com.lundekhan.gui.HtmlTemplates.respondHtmlShell
import io.ktor.application.call
import io.ktor.routing.Route
import io.ktor.routing.get
import io.ktor.routing.route
import kotlinx.html.*
import org.intellij.markdown.flavours.gfm.GFMFlavourDescriptor
import org.intellij.markdown.html.HtmlGenerator
import org.intellij.markdown.parser.MarkdownParser
import org.koin.ktor.ext.inject

fun Route.blogRoute(): Route = route("/blog") {
    val db by inject<Database>()
    val flavor = GFMFlavourDescriptor()
    val parser = MarkdownParser(flavor)

    get { call.respondHtmlShell { blogOverview(db) } }
    get("/{id}") {
        val id = call.parameters["id"]?.toLong() ?: throw InvalidRouteException()
        val blog = BlogHelper.getById(id, db) ?: throw InvalidRouteException("Blog $id does not exist")
        val parsedTree = parser.buildMarkdownTreeFromString(blog.blogBody)
        val html = HtmlGenerator(blog.blogBody, parsedTree, flavor).generateHtml()

        call.respondHtmlShell(markdownSupport = true) {
            h2 { +blog.title }
            unsafe { raw(html) }
        }
    }
}

fun MAIN.blogOverview(db: Database): Unit = section {
    header { h2 { +"\uD83D\uDCDD Blogs" } }
    BlogHelper
        .getAllBlogs(db)
        .forEach { Card(it.title, { +it.summary }, it.date, url = "/blog/${it.id}") }
}

data class BlogPostOpt(
    val id: Long,
    val title: String?,
    val summary: String?,
    val blogBody: String?,
    val category: List<String>?
)

data class BlogPost(val title: String, val summary: String, val blogBody: String, val category: List<String>)
data class FullBlog(
    val title: String,
    val summary: String,
    val blogBody: String,
    val category: List<String>,
    val date: String,
    val id: Long
)