package com.lundekhan

import com.lundekhan.data.Shoppinglist
import com.squareup.sqldelight.ColumnAdapter
import com.squareup.sqldelight.db.SqlDriver
import java.time.LocalDateTime

fun createDatabase(driver: SqlDriver): Database {
    val dateAdapter = object : ColumnAdapter<LocalDateTime, String> {
        override fun decode(databaseValue: String) = LocalDateTime.parse(databaseValue)

        override fun encode(value: LocalDateTime) = value.toString()
    }
    Database.Schema.create(driver)

    return Database(
        driver,
        Shoppinglist.Adapter(dateAdapter = dateAdapter)
    )
}