package com.londogard

import com.londogard.DbHelper.createDatabase
import com.londogard.fuzzymatch.FuzzyMatcher
import com.londogard.fuzzymatch.ScoreConfig
import com.londogard.summarize.summarizers.Summarizer
import com.squareup.sqldelight.sqlite.driver.JdbcSqliteDriver


object BackendModule {
    val db by lazy { createDatabase(JdbcSqliteDriver(url = "${JdbcSqliteDriver.IN_MEMORY}londogard.db")) }
    val testDb by lazy { createDatabase(JdbcSqliteDriver(url = "${JdbcSqliteDriver.IN_MEMORY}londogard-test.db")) }


    val tfidf = Summarizer.tfIdfSummarizer
    val embedding = Summarizer.embeddingClusterSummarizer()
    val fuzzyMatcher = FuzzyMatcher(ScoreConfig())
}