package com.lundekhan.summarizer

import com.lundekhan.summarizer.SmileExtensions.phrase
import smile.math.Math
import smile.nlp.NGram
import smile.nlp.SimpleCorpus
import smile.nlp.collocation.AprioriPhraseExtractor
import smile.nlp.collocation.BigramCollocation
import smile.nlp.collocation.BigramCollocationFinder
import smile.nlp.normalizer.SimpleNormalizer
import smile.nlp.tokenizer.SimpleSentenceSplitter
import smile.nlp.tokenizer.SimpleTokenizer
import smile.nlp.keyword.CooccurrenceKeywordExtractor
import smile.nlp.stemmer.PorterStemmer
import smile.nlp.dictionary.EnglishPunctuations
import smile.nlp.dictionary.EnglishStopWords
import smile.nlp.dictionary.StopWords
import smile.nlp.pos.HMMPOSTagger
import smile.nlp.pos.PennTreebankPOS
import smile.nlp.stemmer.Stemmer
import java.util.ArrayList
import kotlin.math.log10
import kotlin.math.max

fun String.normalize(): String = SimpleNormalizer.getInstance().normalize(this)
fun String.sentences(): List<String> = SimpleSentenceSplitter.getInstance().split(this).toList()
fun String.words(filter: String = "default"): List<String> {
    val tokens = SmileExtensions.simpleTokenizer.split(this).toList()

    if (filter == "none") return tokens

    val dict = when (filter.toLowerCase()) {
        "default" -> EnglishStopWords.DEFAULT
        "comprehensive" -> EnglishStopWords.COMPREHENSIVE
        "google" -> EnglishStopWords.GOOGLE
        "mysql" -> EnglishStopWords.MYSQL
        else -> object : StopWords {
            val dict = filter.split(",").toSet()

            override fun contains(word: String): Boolean = dict.contains(word)

            override fun size(): Int = dict.size

            override fun iterator(): MutableIterator<String> = dict.iterator() as MutableIterator<String>
        }
    }

    val punctuations = EnglishPunctuations.getInstance()

    return tokens.filter { word -> !(dict.contains(word.toLowerCase()) || punctuations.contains(word)) }
}

fun String.bag(filter: String = "default", stemmer: Stemmer? = PorterStemmer()): Map<String, Int> {
    val words = this.normalize().sentences().flatMap { it.words(filter) }
    val tokens = stemmer
        ?.let { stem -> words.map(stem::stem) }
        ?: words
    return tokens
        .map(String::toLowerCase)
        .groupBy { it }
        .mapValues { (_, v) -> v.size }
        .withDefault { 0 }
}

fun String.bag2(stemmer: Stemmer? = PorterStemmer()): Set<String> {
    val words = this.normalize().sentences().flatMap { it.words() }
    val tokens = stemmer
        ?.let { stem -> words.map(stem::stem) }
        ?: words

    return tokens.map(String::toLowerCase).toSet()
}

fun String.postag(): List<Pair<String, PennTreebankPOS>> {
    val words = this.words("none")

    return words.zip(HMMPOSTagger.getDefault().tag(words.toTypedArray()))
}

fun String.keywords(k: Int = 10): ArrayList<NGram> =
    SmileExtensions.keywordExtractor.extract(this, k)

interface SmileOperators {
    fun corpus(text: List<String>): SimpleCorpus {
        val corpus = SimpleCorpus()
        text.forEachIndexed { index, s -> corpus.add(index.toString(), "", s) }
        return corpus
    }

    fun bigram(k: Int, minFreq: Int, text: List<String>): Array<BigramCollocation> {
        val finder = BigramCollocationFinder(minFreq)
        return finder.find(corpus(text), k)
    }

    fun bigram(p: Double, minFreq: Int, text: List<String>): Array<BigramCollocation> {
        val finder = BigramCollocationFinder(minFreq)
        return finder.find(corpus(text), p)
    }

    fun ngram(maxNGramSize: Int, minFreq: Int, text: List<String>): List<List<NGram>> {
        val sentences = text
            .flatMap { it.sentences()
                .map { sentence -> sentence.words("none")
                    .map { word -> SmileExtensions.porter.stripPluralParticiple(word).toLowerCase() }
                    .toTypedArray() } }
        val ngrams = phrase.extract(sentences, maxNGramSize, minFreq)

        return ngrams
    }

    fun postag(sentence: List<String>): Array<PennTreebankPOS> =
        HMMPOSTagger.getDefault().tag(sentence.toTypedArray())

    fun vectorize(terms: List<String>, bag: Map<String, Int>): List<Double> =
        terms.map { bag.getOrDefault(it, 0).toDouble() }

    fun vectorize(terms: List<String>, bag: Set<String>): List<Int> =
        terms.mapIndexed { index, s -> index to s }
            .filter { (_, s) -> bag.contains(s) }
            .map { (idx, _) -> idx }

    fun df(terms: List<String>, corpus: List<Map<String, Int>>): List<Int> =
        terms.map { term -> corpus.filter { it.contains(term) }.size }

    fun tfidf(tf: Double, maxtf: Double, n: Int, df: Int): Double =
        (tf / max(1.0, maxtf)) * log10((1.0 + n) / (1.0 + df))

    fun tfidf(corpus: List<List<Double>>): List<List<Double>> {
        val n = corpus.size
        val df = IntArray(corpus[0].size)
        corpus.forEach { bag -> for (i in df.indices) {
            if(bag[i] > 0) df[i] = df[i] + 1
        }
        }
        return corpus.map { bag -> tfidf(bag, n, df) }
    }

    fun tfidf(bag: List<Double>, n: Int, df: IntArray): List<Double> {
        val maxtf = bag.max() ?: 0.0
        val features =  DoubleArray(bag.size)
        for (i in features.indices) {
            features[i] = tfidf(bag[i], maxtf, n, df[i])
        }
        val norm = Math.norm(features)
        for (i in features.indices) {
            if (norm > 0) features[i] = features[i] / norm
        }
        return features.toList()
    }
}

object SmileExtensions {
    val simpleTokenizer = SimpleTokenizer(true)
    val keywordExtractor = CooccurrenceKeywordExtractor()
    val porter = PorterStemmer()
    val phrase = AprioriPhraseExtractor()
}