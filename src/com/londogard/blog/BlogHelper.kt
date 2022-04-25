package com.londogard.blog

import com.londogard.Database
import com.londogard.data.Blog
import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.util.*
import kotlinx.serialization.InternalSerializationApi
import kotlinx.serialization.Serializable
import kotlinx.serialization.builtins.ListSerializer
import kotlinx.serialization.decodeFromString
import kotlinx.serialization.json.Json
import kotlinx.serialization.json.JsonArray
import kotlinx.serialization.json.JsonElement
import kotlinx.serialization.json.JsonTransformingSerializer
import kotlinx.serialization.serializer
import org.json.XML
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter

@InternalSerializationApi
object WrappingJsonListSerializer :
    JsonTransformingSerializer<List<Category>>(ListSerializer(Category::class.serializer())) {
    override fun transformDeserialize(element: JsonElement): JsonElement {
        return if (element !is JsonArray) JsonArray(listOf(element))
        else element
    }
}

@InternalSerializationApi
@Serializable data class FeedHead(val feed: Feed)
@InternalSerializationApi
@Serializable data class Feed(val entry: List<Entry>, val subtitle: String, val title: String)
@InternalSerializationApi
@Serializable data class Entry(val id: String, val updated: String, val title: StringContent, val summary: StringContent,
                               @Serializable(WrappingJsonListSerializer::class) val category: List<Category>)
@Serializable data class StringContent(val content: String = "Missing")
@Serializable data class Category(val term: String)

/**
 * [[BlogHelper]] is a helper util to convert between JSON-serializable data class & database object
 */
object BlogHelper {
    private val jsonSerializer = Json {
        ignoreUnknownKeys = true
        isLenient = true
    }

    @InternalSerializationApi
    suspend fun fetchBlogRss(): Feed {
        return HttpClient(CIO)
            .use { client ->
                val stringResponse = client.get("https://blog.londogard.com/blog/atom.xml").bodyAsText()
                jsonSerializer.decodeFromString<FeedHead>(XML.toJSONObject(stringResponse).toString())
            }.feed
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