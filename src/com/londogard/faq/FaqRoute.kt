package com.londogard.faq

import io.ktor.routing.*

fun Route.faq(): Route = route("/faq") {

    /**
     * dists = distance.cdist(df['embedded_avg'].values.tolist(), [q_embedded], 'cosine')
        dists = np.array([d[0] for d in dists])
        clostest_questions = np.argsort(-dists)[:5]
        df.iloc[clostest_questions.tolist()]
     */

    fun prework() {
        TODO("Calculate embeddings for all questions; save them")
    }
    fun findFAQ(question: String) {
        val sentences: List<String> = TODO("Split question to sentences")
        val embeddedSents = sentences
            .map {  }
            .map { TODO("Embedd") } // getSentenceEmbedding .. // getMultiSentenceEmbedding
        val dists = TODO("Get cosine dists")
        // dists.take(5).indices()
        return TODO("Return the FAQ of indice of dist min N")
    }

}