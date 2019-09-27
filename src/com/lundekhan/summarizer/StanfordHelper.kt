package com.lundekhan.summarizer

import edu.stanford.nlp.ling.CoreLabel
import edu.stanford.nlp.pipeline.CoreDocument
import edu.stanford.nlp.pipeline.CoreSentence
import edu.stanford.nlp.pipeline.StanfordCoreNLP
import edu.stanford.nlp.util.PropertiesUtils
import org.apache.lucene.analysis.en.EnglishMinimalStemmer
import org.tartarus.snowball.ext.PorterStemmer
//import edu.stanford.nlp.process.
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


    //PorterStemmer stemmer = new PorterStemmer();
    //stemmer.setCurrent(input); //set string you need to stem
    //stemmer.stem();  //stem the word
    //stemmer.getCurrent();//get the stemmed word

    @JvmStatic
    fun main(args: Array<String>) {
    }
    //val stemmer = Stemmer()
/**
    CoreDocument document = new CoreDocument(text);
    // annnotate the document
    pipeline.annotate(document);
    // examples

    // 10th token of the document
    CoreLabel token = document.tokens().get(10);
    System.out.printlnln("Example: token");
    System.out.println(token);
    System.out.println();

    // text of the first sentence
    String sentenceText = document.sentences().get(0).text();
    System.out.println("Example: sentence");
    System.out.println(sentenceText);
    System.out.println();
    **/
}