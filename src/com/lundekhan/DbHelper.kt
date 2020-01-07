package com.lundekhan

import com.squareup.sqldelight.db.SqlDriver

fun createDatabase(driver: SqlDriver): Database {
    Database.Schema.create(driver)

    return Database(driver)
}