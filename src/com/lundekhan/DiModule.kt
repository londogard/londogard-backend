package com.lundekhan

import com.londogard.fuzzymatch.FuzzyMatcher
import com.londogard.fuzzymatch.ScoreConfig
import com.londogard.summarize.summarizers.Summarizer
import com.squareup.sqldelight.db.SqlDriver
import com.squareup.sqldelight.sqlite.driver.JdbcSqliteDriver
import org.koin.core.module.Module
import org.koin.core.qualifier.named
import org.koin.dsl.module


val backendModule = module {
    single<SqlDriver> { JdbcSqliteDriver(url = "${JdbcSqliteDriver.IN_MEMORY}londogard.db") }
    defaultInjections()
}

val testModule = module {
    single<SqlDriver> { JdbcSqliteDriver(url = "${JdbcSqliteDriver.IN_MEMORY}londogard-test.db") }
    defaultInjections()
}

fun Module.defaultInjections() {
    single { createDatabase(get()) }
    single(named("tfidf")) { Summarizer.tfIdfSummarizer }
    single(named("embedding")) { Summarizer.embeddingClusterSummarizer() }
    single { FuzzyMatcher(ScoreConfig()) }
}