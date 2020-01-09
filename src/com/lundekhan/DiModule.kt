package com.lundekhan

import com.londogard.summarize.summarizers.TfIdfSummarizer
import com.londogard.textgen.GenerationLevel
import com.londogard.textgen.LanguageModel
import com.londogard.textgen.LanguageModelImpl
import com.londogard.textgen.PretrainedModels
import com.squareup.sqldelight.db.SqlDriver
import com.squareup.sqldelight.sqlite.driver.JdbcSqliteDriver
import kotlinx.serialization.ImplicitReflectionSerializer
import org.koin.dsl.module


@ImplicitReflectionSerializer
val backendModule = module {
    single<SqlDriver> { JdbcSqliteDriver(url = "${JdbcSqliteDriver.IN_MEMORY}londogard.db") }
    single { createDatabase(get()) }
    single { TfIdfSummarizer() }
    single<LanguageModel> { LanguageModelImpl(PretrainedModels.SHAKESPEARE, GenerationLevel.WORD) }
}

@ImplicitReflectionSerializer
val testModule = module {
    single<SqlDriver> { JdbcSqliteDriver(url = "${JdbcSqliteDriver.IN_MEMORY}londogard-test.db") }
    single { createDatabase(get()) }
    single { TfIdfSummarizer() }
    single<LanguageModel> { LanguageModelImpl(PretrainedModels.SHAKESPEARE, GenerationLevel.WORD) }
}