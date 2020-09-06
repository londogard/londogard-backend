package com.lundekhan.blog

import com.lundekhan.Database
import com.lundekhan.InvalidRouteException
import com.lundekhan.blog.BlogHelper.simpleFormat
import com.lundekhan.gui.HtmlTemplates.respondHtmlShell
import com.lundekhan.gui.card
import com.lundekhan.gui.mediumCard
import com.lundekhan.gui.wideCard
import io.ktor.application.*
import io.ktor.routing.*
import kotlinx.html.*
import org.intellij.markdown.flavours.gfm.GFMFlavourDescriptor
import org.intellij.markdown.html.HtmlGenerator
import org.intellij.markdown.parser.MarkdownParser
import org.koin.ktor.ext.inject

/** [tilRoute] is the Today I Learned Route. */
fun Route.tilRoute(): Route = route("/til") {
    val db by inject<Database>()
    val flavor = GFMFlavourDescriptor()
    val parser = MarkdownParser(flavor)

    get { call.respondHtmlShell("TILs") { tilOverview(db) } }
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

fun MAIN.tilOverview(db: Database, numItems: Int? = null): Unit = section {
    header { h2 { +"\uD83D\uDCDD TILs" } }
    section {
        db.blogQueries
            .let { query -> if (numItems != null) query.selectNTILs(numItems.toLong()) else query.selectAllTILs() }
            .executeAsList()
            .forEach { blog ->
                card(
                    blog.title,
                    { +blog.summary },
                    blog.date.simpleFormat(),
                    url = "/til/${blog.blog_id}"
                )
            }
    }
}