package com.lundekhan.rssfeed

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.lundekhan.Database
import com.lundekhan.data.Blog
import com.rometools.rome.feed.synd.*
import com.rometools.rome.io.SyndFeedOutput
import io.ktor.application.call
import io.ktor.http.ContentType
import io.ktor.response.respondText
import io.ktor.routing.Route
import io.ktor.routing.get
import io.ktor.routing.route
import org.koin.ktor.ext.inject
import javax.xml.stream.XMLStreamWriter

fun Route.rssFeedRoute(): Route = route("/rss") {
    val db by inject<Database>()

    get {
        val entries = db.blogQueries.selectAll().executeAsList().reversed().map(::getEntry)
        call.respondText(getRss(entries), ContentType.Application.Rss)
    }
}

fun getEntry(blogItem: Blog): SyndEntry {
    val descr = SyndContentImpl().apply { value = blogItem.summary }
    val cat = blogItem.category.map { category ->
        SyndCategoryImpl().apply { name = category }
    }

    return SyndEntryImpl().apply {
        title = blogItem.title
        link = "https://londogard.com/blog/${blogItem.blog_id}"
        description = descr
        categories = cat
    }
}

fun getRss(entries: List<SyndEntry>): String {
    val feed = SyndFeedImpl().apply {
        feedType = "rss_2.0"
        title = "Londogard Blog"
        link = "https://londogard.com"
        description = "The newest blogs from Londogard"
    }

    feed.entries = entries
    val syndFeedOutput = SyndFeedOutput()
    return syndFeedOutput.outputString(feed, true)
}