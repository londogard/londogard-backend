package com.londogard.blog

import com.londogard.Database
import com.londogard.InvalidRouteException
import com.londogard.blog.BlogHelper.simpleFormat
import com.londogard.gui.HtmlTemplates.respondHtmlShell
import com.londogard.gui.card
import io.ktor.application.*
import io.ktor.routing.*
import kotlinx.html.*
import kotlinx.serialization.Serializable
import org.intellij.markdown.flavours.gfm.GFMFlavourDescriptor
import org.intellij.markdown.html.HtmlGenerator
import org.intellij.markdown.parser.MarkdownParser
import org.koin.ktor.ext.inject

fun Route.blogRoute(): Route = route("/blog") {
    val db by inject<Database>()
    val flavor = GFMFlavourDescriptor()
    val parser = MarkdownParser(flavor)

    get { call.respondHtmlShell("Blogs") { blogOverview(db) } }
    get("/{id}") {
        val id = call.parameters["id"]?.toLong() ?: throw InvalidRouteException()
        val blog = BlogHelper.getById(id, db) ?: throw InvalidRouteException("Blog or TIL $id does not exist")
        val parsedTree = parser.buildMarkdownTreeFromString(blog.blogBody)
        val html = HtmlGenerator(blog.blogBody, parsedTree, flavor).generateHtml()

        call.respondHtmlShell(blog.title, markdownSupport = true) {
            h2 { +blog.title }
            unsafe { raw(html) }
        }
    }
}

fun MAIN.blogOverview(db: Database, numItems: Int? = null): Unit = section {
    header { h2 { +"\uD83D\uDCDD Blogs" } }
    section {
        db.blogQueries
            .let { query -> if (numItems != null) query.selectNBlogs(numItems.toLong()) else query.selectAllBlogs() }
            .executeAsList()
            .forEach { blog -> card(blog.title, { +blog.summary }, blog.date.simpleFormat(), url = "/blog/${blog.blog_id}") }
    }
}

data class BlogPostOpt(
    val id: Long,
    val title: String?,
    val summary: String?,
    val blogBody: String?,
    val category: List<String>?,
    val til: Boolean?
)

@Serializable data class BlogPost(val title: String, val summary: String, val blogBody: String, val category: List<String>, val til: Boolean)
@Serializable data class FullBlog(
    val title: String,
    val summary: String,
    val blogBody: String,
    val category: List<String>,
    val date: String,
    val id: Long
)