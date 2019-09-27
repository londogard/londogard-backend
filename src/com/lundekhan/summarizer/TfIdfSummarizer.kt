package com.lundekhan.summarizer

import edu.stanford.nlp.ling.CoreLabel
import edu.stanford.nlp.pipeline.CoreDocument
import edu.stanford.nlp.pipeline.CoreSentence
import org.apache.lucene.analysis.en.EnglishMinimalStemmer
import org.tartarus.snowball.ext.EnglishStemmer
import smile.nlp.normalizer.SimpleNormalizer
import smile.util.SmileUtils
import java.nio.file.Files
import java.nio.file.Paths
import java.util.stream.Stream
import kotlin.streams.toList


class TfIdfSummarizer : SmileOperators {
    private val nlpUtils = StanfordHelper

    fun summarizeDocument(text: String): String {
        val doc = CoreDocument(text)
        StanfordHelper.pipeline.annotate(doc)
        val sentences by lazy { doc.sentences() }
        val words by lazy { doc.tokens() }



        return "Summary yadda yadda"
    }

    fun parseFile(filename: String): String = Files.readAllLines(Paths.get(javaClass.getResource(filename).path)).joinToString("\n")

    fun parse(document: String) {
        //val corpus = document.map { it.bag() }
        // Skipping cleaning as old clean only removed multiple whitespace.
        //val doc = CoreDocument(document)
        //StanfordHelper.pipeline.annotate(doc)

        val text = document.normalize()
        val sentences = text.sentences()
        val corpus = sentences.map { it.bag() }


    }

    object rnd : SmileOperators {
        @JvmStatic
        fun main(args: Array<String>) {
            val document = "Hello who are you king. You are a true king. Who let the dogs out?"
            val text = document.normalize()
            val sentences = text.sentences()
            val corpus = sentences.map { it.bag() }
            val features = listOf("who", "are", "let", "king", "true")
            val bags = corpus.map { vectorize(features, it) }
            val data = tfidf(bags)
            println(data)
        }
    }

    //def parse(file, filetype='filename'):
    //stemmer = EnglishStemmer()
    //cleaned_text = clean_doc(text)
    //stemmed_sentences = stem_words(cleaned_text, stemmer)

    //tfidf_vect = TfidfVectorizer(stop_words='english')
    //X = tfidf_vect.fit_transform(stemmed_sentences)
    //tfidf = X.toarray()
    //vector = tfidf.sum(0)
    //vector = np.divide(vector, vector.max())
//
    //vocab = tfidf_vect.get_feature_names()
    //vocab2 = np.array(vocab)
    //count = {}
    //for sen in stemmed_sentences:
    //sum_t = 0
    //for word in [x for x in sen.split() if x in vocab2]:
    //word_idx = list(vocab2).index(word)
    //sum_t += X[0, word_idx]
    //    """
    //Implementation of focus.
    //for x in range(vector.shape[0]):
    //if vector[x] > 0.3:
    //sum_t += vector[x]"""
    //count[stemmed_sentences.index(sen)] = sum_t     # / len(sen.split()) <-- Gave worse results.
    //maxi = sorted(count.keys(), key=count.get, reverse=True)
    //return cleaned_text, maxi

    //private fun removeWhitespace(line: String): String = line.split().map(::trim).join()

    //private fun stem(doc: String, stemmer: EnglishStemmer) {
    //    EnglishMinimalStemmer().stem()
    //}

}


/**
from sklearn.feature_extraction.text import TfidfVectorizer
import regex as re
import numpy as np
from nltk.tokenize import sent_tokenize
from nltk.stem.snowball import EnglishStemmer


def parse_word_count(file, word_count=50, filetype='filename'):
cleaned_text, maxi = parse(file, filetype)
word_indexes = []
size = 0
idx = 0
while idx < len(maxi) and size < word_count:
word_index = maxi[idx]
word_indexes.append(word_index)
size += len(cleaned_text[word_index].split())
idx += 1
word_indexes.sort()
summary = ""
for idx in word_indexes:
summary += " \n" + cleaned_text[idx]
return summary.strip()


def parse_percentage(file, percent=0.1, filetype='filename'):
cleaned_text, maxi = parse(file, filetype)
text_size = len(' '.join(cleaned_text).split())
word_indexes = []
word_size = 0
idx = 0
while idx < len(maxi) and (word_size/text_size) < percent:
word_index = maxi[idx]
word_indexes.append(word_index)
word_size += len(cleaned_text[word_index].split())
idx += 1
word_indexes.sort()
summary = ""
for idx in word_indexes:
summary += " \n" + cleaned_text[idx]
return summary.strip()


def parse(file, filetype='filename'):
stemmer = EnglishStemmer()
if filetype is 'filename':
with open(file) as f:
text = f.read().strip()
else:
text = file
cleaned_text = clean_doc(text)
stemmed_sentences = stem_words(cleaned_text, stemmer)
tfidf_vect = TfidfVectorizer(stop_words='english')
X = tfidf_vect.fit_transform(stemmed_sentences)
tfidf = X.toarray()
vector = tfidf.sum(0)
vector = np.divide(vector, vector.max())

vocab = tfidf_vect.get_feature_names()
vocab2 = np.array(vocab)
count = {}
for sen in stemmed_sentences:
sum_t = 0
for word in [x for x in sen.split() if x in vocab2]:
word_idx = list(vocab2).index(word)
sum_t += X[0, word_idx]
"""
Implementation of focus.
for x in range(vector.shape[0]):
if vector[x] > 0.3:
sum_t += vector[x]"""
count[stemmed_sentences.index(sen)] = sum_t     # / len(sen.split()) <-- Gave worse results.
maxi = sorted(count.keys(), key=count.get, reverse=True)
return cleaned_text, maxi

 **/