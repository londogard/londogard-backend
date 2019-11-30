package com.lundekhan

import com.londogard.summarize.summarizers.TfIdfSummarizer
import com.lundekhan.textgen.LanguageModel
import com.squareup.sqldelight.db.SqlDriver
import com.squareup.sqldelight.sqlite.driver.JdbcSqliteDriver
import kotlinx.serialization.ImplicitReflectionSerializer
import org.koin.dsl.module

@ImplicitReflectionSerializer
val groceryModule = module {
    single<SqlDriver> { JdbcSqliteDriver(url = "${JdbcSqliteDriver.IN_MEMORY}londogard.db") }
    single<Database> { createDatabase(get()) }
    single<TfIdfSummarizer> { TfIdfSummarizer() }
    single<LanguageModel> { LanguageModel(12, "/texts/shakespeare.txt") }
    //single<Cache> { get() }
}