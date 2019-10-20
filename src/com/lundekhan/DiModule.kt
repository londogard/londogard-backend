package com.lundekhan

import com.lundekhan.summarizer.TfIdfSummarizer
import com.lundekhan.textgen.LanguageModel
import com.squareup.sqldelight.db.SqlDriver
import com.squareup.sqldelight.sqlite.driver.JdbcSqliteDriver
import org.koin.dsl.module

val groceryModule = module {
    single<SqlDriver> { JdbcSqliteDriver(JdbcSqliteDriver.IN_MEMORY) }
    single<Database> { createDatabase(get()) }
    single<TfIdfSummarizer> { TfIdfSummarizer() }
    single<LanguageModel> { LanguageModel(15, "/texts/shakespeare.txt") }
    //single<Cache> { get() }
}