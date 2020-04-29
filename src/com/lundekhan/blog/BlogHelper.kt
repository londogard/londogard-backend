package com.lundekhan.blog

import com.lundekhan.Database
import com.lundekhan.data.Blog
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

object BlogHelper {
    fun getAllBlogs(db: Database): List<FullBlog> = db.blogQueries
        .selectAll() // TODO we should rework this to a parameterized get where we fetch N with offset M (when required).
        .executeAsList()
        .asReversed()
        .map { blog -> FullBlog(blog.title, blog.summary, blog.blog_body, blog.category,
            blog.date.format(DateTimeFormatter.ISO_LOCAL_DATE_TIME), blog.blog_id) }

    fun getById(id: Long, db: Database): FullBlog? = db.blogQueries
        .selectById(id)
        .executeAsOneOrNull()
        ?.let { blog -> FullBlog(blog.title, blog.summary, blog.blog_body, blog.category,
            blog.date.format(DateTimeFormatter.ISO_LOCAL_DATE_TIME), blog.blog_id) }

    fun updateBlog(blog: BlogPostOpt, db: Database): Boolean {
        val oldBlog = db.blogQueries.selectById(blog.id).executeAsOneOrNull() as Blog.Impl? ?: return false
        val updatedBlog = oldBlog.copy(
            title = blog.title ?: oldBlog.title,
            summary = blog.summary ?: oldBlog.summary,
            blog_body = blog.blogBody ?: oldBlog.blog_body,
            category = blog.category ?: oldBlog.category
        )
        db.blogQueries.insertOrReplace(updatedBlog)
        return true
    }

    // We catch exception in StatusPage
    fun createBlog(blog: BlogPost, db: Database) {
        db.blogQueries.insert(blog.title, blog.summary, LocalDateTime.now(), blog.blogBody, blog.category)
    }
}