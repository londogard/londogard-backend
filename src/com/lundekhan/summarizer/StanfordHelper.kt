package com.lundekhan.summarizer
/**
import edu.stanford.nlp.ling.CoreLabel
import edu.stanford.nlp.pipeline.CoreDocument
import edu.stanford.nlp.pipeline.CoreSentence
import edu.stanford.nlp.pipeline.StanfordCoreNLP
import org.apache.lucene.analysis.en.EnglishMinimalStemmer
import org.tartarus.snowball.ext.PorterStemmer
import java.util.*

object StanfordHelper {
    val properties = Properties().apply {
        setProperty("annotators", "tokenize,ssplit")
    }
    val pipeline by lazy { StanfordCoreNLP(properties) }
    val minimalStemmer by lazy { EnglishMinimalStemmer() }
    val stemmer by lazy { PorterStemmer() }

    fun getAnnotatedDoc(document: CoreDocument) =  pipeline.annotate(document)

    fun getMiniStem(word: String): String {
        val idx = minimalStemmer.stem(word.toCharArray(), word.length)

        return if (idx == word.length) word else word.substring(0, idx)
    }

    fun getStem(word: String): String {
        stemmer.current = word
        stemmer.stem()
        return stemmer.current
    }

    fun stemWords(words: List<String>, miniStem: Boolean = false) = words.map { if (miniStem) getMiniStem(it) else getStem(it) }

    fun stemStanfordSentence(sentences: List<CoreSentence>, miniStem: Boolean = false) =
        sentences
            .map { it
                .tokens()
                .map(CoreLabel::toString)
                .map { word -> if (miniStem) getMiniStem(word) else getStem(word) }
            }
}
 **/