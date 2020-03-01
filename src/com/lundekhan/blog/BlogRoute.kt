package com.lundekhan.blog

import com.lundekhan.Database
import com.lundekhan.InvalidRouteException
import com.lundekhan.data.Blog
import com.lundekhan.resultResponse
import io.ktor.application.call
import io.ktor.auth.authenticate
import io.ktor.http.HttpStatusCode
import io.ktor.request.receive
import io.ktor.response.respond
import io.ktor.routing.Route
import io.ktor.routing.get
import io.ktor.routing.post
import io.ktor.routing.route
import org.koin.ktor.ext.inject
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

fun Route.blogRoute(): Route = route("/blog") {
    val db by inject<Database>()
    get {
        db
            .blogQueries
            .selectAll() // TODO we should rework this to a parameterized get where we fetch N with offset M (when required).
            .executeAsList()
            .map { blog -> FullBlog(blog.title, blog.summary, blog.blog_body, blog.category,
                                    blog.date.format(DateTimeFormatter.ISO_LOCAL_DATE_TIME), blog.blog_id) }
            .let { blogList -> call.respond(blogList) }
    }
    get("/{id}") {
        val id = call.parameters["id"]?.toLong() ?: throw InvalidRouteException()

        db.blogQueries
            .selectById(id)
            .executeAsOneOrNull()
            ?.let { blog -> FullBlog(blog.title, blog.summary, blog.blog_body, blog.category,
                                     blog.date.format(DateTimeFormatter.ISO_LOCAL_DATE_TIME), blog.blog_id) }
            ?.let { call.respond(it) }
            ?: throw InvalidRouteException("Blog $id does not exist")
    }
    authenticate {
        post("/update") {
            val blog = call.receive<BlogPostOpt>()
            val oldBlog = db.blogQueries.selectById(blog.id).executeAsOneOrNull() as Blog.Impl? ?: return@post call.respond(HttpStatusCode.NotFound)
            val updatedBlog = oldBlog.copy(
                title = blog.title ?: oldBlog.title,
                summary = blog.summary ?: oldBlog.summary,
                blog_body = blog.blogBody ?: oldBlog.blog_body,
                category = blog.category ?: oldBlog.category
                )
            db.blogQueries.insertOrReplace(updatedBlog)
            call.respond(resultResponse("Blog successfully updated"))
        }
        post("/create") {
            val blog = call.receive<BlogPost>()
            db.blogQueries.insert(blog.title, blog.summary, LocalDateTime.now(), blog.blogBody, blog.category) // We catch exception in StatusPage
            call.respond(resultResponse("Blog successfully created"))
        }
    }
}

data class BlogPostOpt(val id: Long, val title: String?, val summary: String?, val blogBody: String?, val category: List<String>?)
data class BlogPost(val title: String, val summary: String, val blogBody: String, val category: List<String>)
data class FullBlog(val title: String, val summary: String, val blogBody: String, val category: List<String>, val date: String, val id: Long)