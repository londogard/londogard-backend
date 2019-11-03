package com.lundekhan.textgen

import com.lundekhan.summarizer.words
import com.lundekhan.utils.readFromFile
import kotlinx.serialization.*
import kotlinx.serialization.cbor.Cbor
import kotlinx.serialization.internal.DoubleSerializer
import kotlinx.serialization.internal.StringSerializer
import java.io.File
import java.util.*
import kotlin.math.max
import kotlin.random.Random

fun languageModelSerializer(): KSerializer<Map<String, Map<String, Double>>> =
    (StringSerializer to (StringSerializer to DoubleSerializer).map).map

enum class NGramType {
    STRING,
    CHARACTER
}

class Ngram<T>(private val n: Int) {
    private val list = LinkedList<T>()
    fun addAll(collection: Collection<T>) = list.apply {
        addAll(collection)
        for (i in 0..size-n) pop()
    }
    fun add(element: T) {
        if (list.size == n) list.pop()
        list.add(element)
    }
    fun getNgrams(): List<T> = list.toList()
}

object NGrams {
    fun fileToCharLangModel(fileName: String, n: Int): InternalCharLanguageModel {
        return File(fileName).useLines { lines ->
            val chars = lines.flatMap { "$it\n".toCharArray().asSequence() }
            val unsafeMap = mutableMapOf<String, MutableMap<Char, Int>>().withDefault { mutableMapOf() }
            chars
                .windowed(n, transform = { sublist -> sublist.subList(0, sublist.size-1).joinToString("") to sublist.last() })
                .forEach { (key, value) ->
                    val charCount = unsafeMap.getValue(key)
                    charCount[value] = charCount.getOrDefault(value, 0) + 1
                    unsafeMap[key] = charCount
                }
            unsafeMap
                .mapValues { (_, value) ->
                    val count = max(value.values.count().toDouble(), 1.0)

                    value.mapValues { (_, charCount) -> charCount / count }
                }
        }
    }
}

fun ngrams(tokens: List<String>, n: Int, padStart: Char? = null, padEnd: Char? = null): List<List<String>> {
    val padLeft = if (padStart != null) List(n) { padStart.toString() } else emptyList()
    val padRight = if (padEnd != null) List(n) { padEnd.toString() } else emptyList()

    return (padLeft + tokens + padRight).windowed(n)
}

typealias WordMapping = Map<String, Int>
typealias LanguageModelMap = Map<String, List<Map<Int, Double>>>

typealias InternalLanguageModel = Map<String, Map<String, Double>>
typealias InternalCharLanguageModel = Map<String, Map<Char, Double>>

private fun List<String>.createKey(): String = this.joinToString("")
private fun List<String>.groupByAverageTotal(): Map<String, Double> {
    val incr = 1.0 / this.size
    val unsafeGroupMap = mutableMapOf<String, Double>()
    this.forEach { word -> unsafeGroupMap[word] = unsafeGroupMap.getOrDefault(word, 0.0) + incr }

    return unsafeGroupMap
}

@ImplicitReflectionSerializer
class LanguageModel(private val n: Int, private val fileName: String) {
    private val paddingStart = '\u0002'
    private val paddingEnd = '\u0003'
    //private val modelPath: String = javaClass.getResource("/languagemodels/lm.lm").path//
    //private val missingMap = mapOf("<UNK>" to 1.0)
    private val missingCharMap = mapOf('X' to 1.0)
    private val internalCharLanguageModel: InternalCharLanguageModel = NGrams.fileToCharLangModel(javaClass.getResource(fileName).path, n)
//    private val internalLanguageModel: InternalLanguageModel = createLanguageModel()
    // private val internalWordLanguageModel: InternalLanguageModel by lazy { createWordLanguageModel() }

    private fun generateOneGram(history: List<String>, temperature: Double): Char {
        val hist = history.takeLast(n - 1).joinToString("")
        val distr = internalCharLanguageModel.getOrDefault(hist, missingCharMap)
        var x = Random.nextDouble()
        return distr
            .entries
            .dropWhile { (_, value) -> x -= value; return@dropWhile x > 0 }
            .first().key
    }

    fun generateTextByChar(history: String, size: Int = 250, temperature: Double = 0.0): String {
        val hist = history.toCharArray().map { it.toString() }
        val existingHistory =
            if (internalCharLanguageModel.keys.contains(hist.takeLast(n - 1).createKey())) hist else internalCharLanguageModel.keys.shuffled().find {
                it.startsWith(hist.takeLast(n - 1).createKey())
            }?.toCharArray()?.map { it.toString() } ?: hist
        return (0..size)
            .fold(existingHistory) { acc, _ -> acc + generateOneGram(acc, temperature).toString() }
            .joinToString("")
    }

    //fun generateTextByWord(history: String, size: Int = 250, temperature: Double = 0.0): String {
    //    val hist = ngrams(history.words(), n)
    //    val histKey = hist.last().takeLast(n - 1).createKey()
//
    //    val existingHistory =
    //        if (internalWordLanguageModel.keys.contains(histKey)) hist.last() else internalWordLanguageModel.keys.shuffled().find {
    //            it.contains(histKey)
    //        } ?: hist.last()
//
    //    return (0..size)
    //        .fold(existingHistory) { acc, _ -> acc + generateOneGram(existingHistory) }
    //}

    private fun createWordLanguageModel(): InternalLanguageModel =
        File(javaClass.getResource(fileName).path).useLines { lines ->
            lines
                .flatMap { "$it\n".words().asSequence() }
                .toList()
                .let { ngrams(it, n) }
                .groupBy(
                    keySelector = { it.dropLast(1).createKey() },
                    valueTransform = { it.last() }
                )
                .mapValues { (_, value) -> value.groupByAverageTotal() }
        }

//    private fun createLanguageModel(): InternalLanguageModel {
//        return readFromFile(javaClass.getResource(modelPath).path)
//            ?.let { bytes -> Cbor.plain.load(languageModelSerializer(), bytes) }
//            ?: File(javaClass.getResource(fileName).path)
//                .useLines { lines ->
//                    lines
//                        .toList()
//                        .flatMap { "$it\n".tokenizeChars() }
//                        .let { ngrams(it, n) }
//                        .groupBy(
//                            keySelector = { it.dropLast(1).createKey() },
//                            valueTransform = { it.last() }
//                        )
//                        .mapValues { (_, value) -> value.groupByAverageTotal() }
//                }
//    }

    object Hej {
        @JvmStatic
        fun main(args: Array<String>) {
            val lm = LanguageModel(8, "/texts/cardsagainst_black")
            println(lm.generateTextByChar("", temperature = 0.5, size = 500))
        }
    }
}