package com.lundekhan.blog

import com.lundekhan.Database
import com.lundekhan.data.Blog
import java.text.SimpleDateFormat
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

/**
 * [[BlogHelper]] is a helper util to convert between JSON-serializable data class & database object
 */
object BlogHelper {
    // TODO support , offset: Int = 0
    fun LocalDateTime.simpleFormat(): String =
        format(DateTimeFormatter.ISO_LOCAL_DATE_TIME)
    fun List<Blog>.toFullBlog(): List<FullBlog> =
        map { blog ->
            FullBlog(
                blog.title, blog.summary, blog.blog_body, blog.category,
                blog.date.format(DateTimeFormatter.ISO_LOCAL_DATE_TIME), blog.blog_id
            )
        }

    fun getById(id: Long, db: Database): FullBlog? = db.blogQueries
        .selectById(id)
        .executeAsOneOrNull()
        ?.let { blog ->
            FullBlog(
                blog.title, blog.summary, blog.blog_body, blog.category,
                blog.date.format(DateTimeFormatter.ISO_LOCAL_DATE_TIME), blog.blog_id
            )
        }

    fun updateBlog(blog: BlogPostOpt, db: Database): Boolean {
        val oldBlog = db.blogQueries.selectById(blog.id).executeAsOneOrNull() ?: return false
        val updatedBlog = oldBlog.copy(
            title = blog.title ?: oldBlog.title,
            summary = blog.summary ?: oldBlog.summary,
            blog_body = blog.blogBody ?: oldBlog.blog_body,
            category = blog.category ?: oldBlog.category,
            til = blog.til ?: oldBlog.til
        )
        db.blogQueries.insertOrReplace(updatedBlog)
        return true
    }

    // We catch exception in StatusPage
    fun createBlog(blog: BlogPost, db: Database) {
        db.blogQueries.insert(blog.title, blog.summary, LocalDateTime.now(), blog.blogBody, blog.category, blog.til)
    }
}