package com.lundekhan.blog

import com.lundekhan.Database
import com.lundekhan.data.Blog
import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.client.features.json.*
import io.ktor.client.request.*
import io.ktor.http.*
import io.ktor.util.*
import kotlinx.coroutines.runBlocking
import kotlinx.serialization.InternalSerializationApi
import kotlinx.serialization.Serializable
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

@Serializable
data class Head(val feed: RssFeed)
@Serializable
data class RssFeed(val entry: List<Entry>)
@Serializable
data class Entry(val title: String, val summary: String)


/**
 * [[BlogHelper]] is a helper util to convert between JSON-serializable data class & database object
 */
object BlogHelper {
    @KtorExperimentalAPI
    @InternalSerializationApi
    @JvmStatic
    fun main(args: Array<String>) = runBlocking {
        println(fetchBlogRss())
    }
    @KtorExperimentalAPI
    @InternalSerializationApi
    suspend fun fetchBlogRss(): List<String> {
        HttpClient(CIO) {
            install(JsonFeature) {
                serializer = XMLSerializer()
                accept(ContentType.Application.Xml)
            }
        }.use { client ->
            println(client.get<Head>("https://blog.londogard.com/feed.xml"))
        }
        TODO("")
    }

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