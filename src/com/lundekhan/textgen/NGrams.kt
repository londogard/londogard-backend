package com.lundekhan.textgen

import com.lundekhan.summarizer.words
import kotlinx.serialization.*
import java.io.File
import java.math.BigInteger
import kotlin.random.Random

enum class NGramType {
    STRING,
    CHARACTER
}

fun ngrams(tokens: List<String>, n: Int, padStart: Char? = null, padEnd: Char? = null): List<List<String>> {
    val padLeft = if (padStart != null) List(n) { padStart.toString() } else listOf()
    val padRight = if (padEnd != null) listOf(padEnd.toString()) else listOf()

    return (padLeft + tokens + padRight).windowed(n)
}

typealias WordMapping = Map<String, Int>

typealias LanguageModelMap = Map<String, List<Map<Int, Double>>>

typealias InternalLanguageModel = Map<String, Map<String, Double>>

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
    private val random = Random
    private val missingMap = mapOf("<UNK>" to 1.0)
    private val internalLanguageModel: InternalLanguageModel = createLanguageModel()
    private val internalWordLanguageModel: InternalLanguageModel by lazy { createWordLanguageModel() }

    fun generateOneGram(history: List<String>, temperature: Double): String { // This one is the same..!
        val hist = history.takeLast(n - 1).createKey()
        val distr = internalLanguageModel.getOrDefault(hist, missingMap) // perhaps we should shuffle a few times?
        var x = random.nextDouble()
        return distr
            .entries
            .dropWhile { (_, value) -> x -= value; return@dropWhile x > 0 }
            .first().key
    }

    fun generateTextByChar(history: String, size: Int = 250, temperature: Double = 0.0): String {
        val hist = history.toCharArray().map { it.toString() }
        val existingHistory =
            if (internalLanguageModel.keys.contains(hist.takeLast(n - 1).createKey())) hist else internalLanguageModel.keys.shuffled().find {
                it.contains(hist.takeLast(n - 1).createKey())
            }?.toCharArray()?.map { it.toString() } ?: hist
        return (0..size)
            .fold(existingHistory) { acc, _ -> acc + generateOneGram(acc, temperature) }
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

    private fun createLanguageModel(): InternalLanguageModel {
        //val bytes = readFromFile("lm.lm") ?: throw Exception("")
        //val lm = Cbor.plain.load((StringSerializer to (StringSerializer to DoubleSerializer).map).map, bytes)
        //Cbor.plain.dump(lm).writeToFile("lm.lm")
        val lm = File(javaClass.getResource(fileName).path)
            .useLines { lines ->
                // Lines are not merged with eachother.. That ruins A LOT.
                lines
                    .toList()
                    .flatMap { "$it\n".tokenizeChars() }
                    .let { ngrams(it, n) }
                    .groupBy(
                        keySelector = { it.dropLast(1).createKey() },
                        valueTransform = { it.last() }
                    )
                    .mapValues { (_, value) -> value.groupByAverageTotal() }
            }
        //val serializer = (StringSerializer to (StringSerializer to DoubleSerializer).map).map
        //Cbor.plain.dump(serializer, lm).writeToFile("lm.lm")
        return lm
    }

    object Hej {
        @JvmStatic
        fun main(args: Array<String>) {
            val lm = LanguageModel(15, "/texts/shakespeare.txt")
            println(lm.generateTextByChar("ROMEO:", temperature = 0.5, size = 500))
        }
    }
}