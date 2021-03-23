package com.londogard.blog

import kotlinx.serialization.Serializable

data class BlogPostOpt(
    val id: Long,
    val title: String?,
    val summary: String?,
    val blogBody: String?,
    val category: List<String>?,
    val til: Boolean?
)

@Serializable
data class BlogPost(
    val title: String,
    val summary: String,
    val blogBody: String,
    val category: List<String>,
    val til: Boolean
)

@Serializable
data class FullBlog(
    val title: String,
    val summary: String,
    val blogBody: String,
    val category: List<String>,
    val date: String,
    val id: Long
)