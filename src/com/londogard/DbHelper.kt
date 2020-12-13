package com.londogard

import com.londogard.Database.Companion.Schema
import com.londogard.data.Blog
import com.squareup.sqldelight.ColumnAdapter
import com.squareup.sqldelight.db.SqlCursor
import com.squareup.sqldelight.db.SqlDriver
import java.time.LocalDateTime

object DbHelper {
    private fun getVersion(driver: SqlDriver): Int {
        val sqlCursor: SqlCursor = driver.executeQuery(null, "PRAGMA user_version;", 0, null)
        return (sqlCursor.getLong(0)?.toInt() ?: 0)
            .also { sqlCursor.close() }
    }

    private fun setVersion(driver: SqlDriver, version: Int) {
        driver.execute(null, String.format("PRAGMA user_version = %d;", version), 0, null)
    }

    fun createDatabase(driver: SqlDriver): Database {
        val listOfStringsAdapter = object : ColumnAdapter<List<String>, String> {
            override fun decode(databaseValue: String): List<String> = databaseValue.split(",")
            override fun encode(value: List<String>): String = value.joinToString(separator = ",")
        }
        val dateTimeAdapter = object : ColumnAdapter<LocalDateTime, String> {
            override fun decode(databaseValue: String): LocalDateTime = LocalDateTime.parse(databaseValue)
            override fun encode(value: LocalDateTime): String = value.toString()
        }

        val currentVersion = getVersion(driver)
        if (currentVersion == 0) {
            runCatching { Schema.create(driver) }
                .onFailure { exception -> println(exception.message) }
            setVersion(driver, 1)
        } else {
            val schemaVersion = Schema.version
            if (schemaVersion > currentVersion) {
                runCatching { Schema.migrate(driver, currentVersion, schemaVersion) }
                    .onFailure { exception -> println(exception.message) }
                setVersion(driver, schemaVersion)
            }
        }

        return Database(driver, blogAdapter = Blog.Adapter(dateTimeAdapter, listOfStringsAdapter))
    }
}