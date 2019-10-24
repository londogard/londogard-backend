package com.lundekhan.summarizer

import java.nio.file.Files
import java.nio.file.Paths

class TfIdfSummarizer : SmileOperators {
    fun parseFile(filename: String): String =
        Files.readAllLines(Paths.get(javaClass.getResource(filename).path)).joinToString("\n")

    fun parse(document: String, lines: Int = 10): String {
        val text = document.normalize()
        val sentences = text.sentences()
        val corpus = sentences.map { it.bag() } // bag includes stemming
        val words = corpus.flatMap { bag -> bag.keys }.distinct()
        val bags = corpus.map { vectorize(words, it) }
        val vectors = tfidf(bags)

        val vector = vectors.effectiveSumColumns()
        val max = vector.max() ?: 1.0
        val normalizedVector = List(vector.size) { i -> vector[i] / max }

        return sentences
            .asSequence()
            .map { sen ->
                sen.words().fold(0.0) { acc, word ->
                    val idx = word.indexOf(word)

                    if (idx == -1) acc + 0 else acc + normalizedVector[idx]
                }
            }
            .withIndex()
            .sortedByDescending { it.value }
            .take(lines)
            .map { it.index to sentences[it.index] }
            .sortedBy { it.first }
            .map { it.second }
            .joinToString("\n")
    }

    private fun List<List<Double>>.effectiveSumColumns(): List<Double> {
        val columnSum = MutableList(this[0].size) { 0.0 }
        for (columns in this)
            for (i in columns.indices)
                columnSum[i] += columns[i]
        return columnSum.toList()
    }
}