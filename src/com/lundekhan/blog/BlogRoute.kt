package com.lundekhan.blog

import com.lundekhan.Database
import com.lundekhan.InvalidRouteException
import com.lundekhan.resultResponse
import io.ktor.application.call
import io.ktor.auth.authenticate
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
            .selectAll()
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
        post("/create") {
            val blog = call.receive<BlogPost>()
            db.blogQueries.insert(blog.title, blog.summary, LocalDateTime.now(), blog.blogBody, blog.category) // We catch exception in StatusPage
            call.respond(resultResponse("Blog successfully created"))
        }
    }
}

data class BlogPost(val title: String, val summary: String, val blogBody: String, val category: List<String>)
data class FullBlog(val title: String, val summary: String, val blogBody: String, val category: List<String>, val date: String, val id: Long)