package com.lundekhan

import com.londogard.fuzzymatch.FuzzyMatcher
import com.londogard.fuzzymatch.ScoreConfig
import com.londogard.summarize.summarizers.Summarizer
import com.londogard.textgen.GenerationLevel
import com.londogard.textgen.LanguageModel
import com.londogard.textgen.LanguageModelImpl
import com.londogard.textgen.PretrainedModels
import com.squareup.sqldelight.db.SqlDriver
import com.squareup.sqldelight.sqlite.driver.JdbcSqliteDriver
import kotlinx.serialization.ImplicitReflectionSerializer
import org.koin.core.module.Module
import org.koin.core.qualifier.named
import org.koin.dsl.module


@ImplicitReflectionSerializer
val backendModule = module {
    single<SqlDriver> { JdbcSqliteDriver(url = "${JdbcSqliteDriver.IN_MEMORY}londogard.db") }
    defaultInjections()
}

@ImplicitReflectionSerializer
val testModule = module {
    single<SqlDriver> { JdbcSqliteDriver(url = "${JdbcSqliteDriver.IN_MEMORY}londogard-test.db") }
    defaultInjections()
}

@ImplicitReflectionSerializer
fun Module.defaultInjections() {
    single { createDatabase(get()) }
    single(named("tfidf")) { Summarizer.tfIdfSummarizer }
    single(named("embedding")) { Summarizer.embeddingClusterSummarizer() }
    single { FuzzyMatcher(ScoreConfig()) }
    single<LanguageModel> { LanguageModelImpl(PretrainedModels.SHAKESPEARE, GenerationLevel.WORD) }
}