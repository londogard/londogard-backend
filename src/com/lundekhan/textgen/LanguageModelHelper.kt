package com.lundekhan.textgen

import com.londogard.textgen.languagemodels.LanguageModel
import kotlinx.serialization.ExperimentalSerializationApi
import java.nio.file.Paths


@ExperimentalSerializationApi
object LanguageModelHelper {
    private val modelRootPath = Paths.get(System.getProperty("user.home"), ".languagemodels")
    private val shakespeareCharPath = modelRootPath.resolve("shakespeare_char.cbor").toString()
    private val shakespeareWordPath = modelRootPath.resolve("shakespeare_word.cbor").toString()
    private val cardsAgainstWhiteCharPath = modelRootPath.resolve("cardsagainst_white_char.cbor").toString()
    private val cardsAgainstWhiteWordPath = modelRootPath.resolve("cardsagainst_white_word.cbor").toString()
    private val cardsAgainstBlackCharPath = modelRootPath.resolve("cardsagainst_black_char.cbor").toString()
    private val cardsAgainstBlackWordPath = modelRootPath.resolve("cardsagainst_black_word.cbor").toString()
    // TODO
    //  If not used within 60s, remove from RAM.
    //  private const val timeout = 60 * 1000L

    private val shakespeareChar: LanguageModel by lazy { LanguageModel.load(shakespeareCharPath) }
    private val shakespeareWord: LanguageModel by lazy { LanguageModel.load(shakespeareWordPath) }
    private val cardsAgainstWhiteChar: LanguageModel by lazy { LanguageModel.load(cardsAgainstWhiteCharPath) }
    private val cardsAgainstWhiteWord: LanguageModel by lazy { LanguageModel.load(cardsAgainstWhiteWordPath) }
    private val cardsAgainstBlackChar: LanguageModel by lazy { LanguageModel.load(cardsAgainstBlackCharPath) }
    private val cardsAgainstBlackWord: LanguageModel by lazy { LanguageModel.load(cardsAgainstBlackWordPath) }

    val LanguageModels = listOf(
        "Shakespeare Char Level",
        "Shakespeare Word Level",
        "Cards Against White Char Level",
        "Cards Against White Word Level",
        "Cards Against Black Char Level",
        "Cards Against Black Word Level",
    )

    fun getRelevantLanguageModel(modelName: String): LanguageModel = when (modelName) {
        LanguageModels[0] -> shakespeareChar
        LanguageModels[1] -> shakespeareWord
        LanguageModels[2] -> cardsAgainstWhiteChar
        LanguageModels[3] -> cardsAgainstWhiteWord
        LanguageModels[4] -> cardsAgainstBlackChar
        LanguageModels[5] -> cardsAgainstBlackWord
        else -> shakespeareChar
    }
/**
    suspend fun shakespeareChar(): LanguageModel {
        val lm = internalShakespeareChar ?: LanguageModel.load(shakespeareCharPath)
        internalShakespeareChar = lm
        coroutineScope {
            launch {
                delay(timeout)
                internalShakespeareChar = null
            }
        }

        return lm
    }

    val shakespeareWord: LanguageModel
        get() {
            return internalShakespeareWord ?: LanguageModel
                .load(shakespeareWordPath)
                .also { lm -> internalShakespeareWord = lm } // + set timer
        }
    val cardsAgainstWhiteChar: LanguageModel
        get() {
            return internalCardsAgainstWhiteChar ?: LanguageModel
                .load(cardsAgainstWhiteCharPath)
                .also { lm -> internalCardsAgainstWhiteChar = lm } // + set timer
        }
    val cardsAgainstWhiteWord: LanguageModel
        get() {
            return internalCardsAgainstWhiteWord ?: LanguageModel
                .load(cardsAgainstWhiteWordPath)
                .also { lm -> internalCardsAgainstWhiteWord = lm } // + set timer
        }
    val cardsAgainstBlackChar: LanguageModel
        get() {
            return internalCardsAgainstBlackChar ?: LanguageModel
                .load(cardsAgainstBlackCharPath)
                .also { lm -> internalCardsAgainstBlackChar = lm } // + set timer
        }
    val cardsAgainstBlackWord: LanguageModel
        get() {
            return internalCardsAgainstBlackWord ?: LanguageModel
                .load(cardsAgainstBlackWordPath)
                .also { lm -> internalCardsAgainstBlackWord = lm } // + set timer
        }
    **/
}