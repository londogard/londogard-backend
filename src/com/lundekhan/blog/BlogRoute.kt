package com.lundekhan.blog

import com.lundekhan.Database
import com.lundekhan.InvalidRouteException
import com.lundekhan.gui.HtmlTemplates.Shell
import com.lundekhan.resultResponse
import io.ktor.application.call
import io.ktor.auth.authenticate
import io.ktor.html.respondHtml
import io.ktor.http.HttpStatusCode
import io.ktor.request.receive
import io.ktor.response.respond
import io.ktor.routing.Route
import io.ktor.routing.get
import io.ktor.routing.post
import io.ktor.routing.route
import kotlinx.html.h2
import kotlinx.html.unsafe
import org.intellij.markdown.flavours.MarkdownFlavourDescriptor
import org.intellij.markdown.flavours.gfm.GFMFlavourDescriptor
import org.intellij.markdown.html.HtmlGenerator
import org.intellij.markdown.parser.MarkdownParser
import org.koin.ktor.ext.inject

// TODO add all as /blog
// TODO add as /api/blog too
fun Route.blogRoute(): Route = route("/blog") {
    val db by inject<Database>()
    val flavor = GFMFlavourDescriptor()
    val parser = MarkdownParser(flavor)

    // Pro-tip, use https://andybrewer.github.io/mvp/#docs to learn syntax (inspect element is good also)
    get {
        call.respond(BlogHelper.getAllBlogs(db))
    }
    get("/{id}") {
        val id = call.parameters["id"]?.toLong() ?: throw InvalidRouteException()
        BlogHelper.getById(id, db)
            ?.let { call.respondHtml { Shell(true) {
                h2 { +it.title }
                val parsedTree = parser.buildMarkdownTreeFromString(it.blogBody)
                val html = HtmlGenerator(it.blogBody, parsedTree, flavor).generateHtml()

                unsafe { raw(html) }
            } } }
            ?: throw InvalidRouteException("Blog $id does not exist")
    }

    route("/api") {
        get {
            call.respond(BlogHelper.getAllBlogs(db))
        }
        get("/{id}") {
            val id = call.parameters["id"]?.toLong() ?: throw InvalidRouteException()
            BlogHelper.getById(id, db)
                ?.let { call.respond(it) }
                ?: throw InvalidRouteException("Blog $id does not exist")
        }
        authenticate {
            post("/update") {
                if (BlogHelper.updateBlog(call.receive<BlogPostOpt>(), db))
                    call.respond(resultResponse("Blog successfully updated"))
                else
                    call.respond(HttpStatusCode.NotFound)
            }
            post("/create") {
                BlogHelper.createBlog(call.receive<BlogPost>(), db)
                call.respond(resultResponse("Blog successfully created"))
            }
        }
    }
}

data class BlogPostOpt(val id: Long, val title: String?, val summary: String?, val blogBody: String?, val category: List<String>?)
data class BlogPost(val title: String, val summary: String, val blogBody: String, val category: List<String>)
data class FullBlog(val title: String, val summary: String, val blogBody: String, val category: List<String>, val date: String, val id: Long)