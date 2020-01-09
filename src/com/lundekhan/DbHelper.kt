package com.lundekhan

import com.lundekhan.data.Blog
import com.squareup.sqldelight.ColumnAdapter
import com.squareup.sqldelight.db.SqlDriver
import java.time.LocalDateTime

fun createDatabase(driver: SqlDriver): Database {
    val listOfStringsAdapter = object : ColumnAdapter<List<String>, String> {
        override fun decode(databaseValue: String) = databaseValue.split(",")
        override fun encode(value: List<String>) = value.joinToString(separator = ",")
    }
    val dateTimeAdapter = object : ColumnAdapter<LocalDateTime, String> {
        override fun decode(databaseValue: String): LocalDateTime = LocalDateTime.parse(databaseValue)
        override fun encode(value: LocalDateTime): String = value.toString()
    }

    try { Database.Schema.create(driver) } catch (exception: Exception) { println(exception.message) }

    return Database(driver, blogAdapter = Blog.Adapter(dateTimeAdapter, listOfStringsAdapter))
}