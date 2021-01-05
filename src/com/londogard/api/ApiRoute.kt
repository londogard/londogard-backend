package com.londogard.api

import com.londogard.summarize.summarizers.Summarizer
import com.londogard.textgen.SimpleTextGeneration
import com.londogard.*
import com.londogard.billsplitter.PostPersonPayments
import com.londogard.billsplitter.splitBills
import com.londogard.blog.BlogHelper
import com.londogard.blog.BlogHelper.toFullBlog
import com.londogard.blog.BlogPost
import com.londogard.blog.BlogPostOpt
import com.londogard.summarizer.SummarizeReq
import com.londogard.summarizer.summarize
import com.londogard.textgen.LanguageModelHelper
import com.londogard.textgen.TextGenInput
import io.ktor.application.call
import io.ktor.auth.authenticate
import io.ktor.http.HttpStatusCode
import io.ktor.request.receive
import io.ktor.request.receiveOrNull
import io.ktor.response.respond
import io.ktor.routing.Route
import io.ktor.routing.get
import io.ktor.routing.post
import io.ktor.routing.route
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import kotlinx.serialization.ExperimentalSerializationApi
import org.koin.core.qualifier.named
import org.koin.ktor.ext.inject

@ExperimentalSerializationApi
fun Route.apiRoute(redirections: MutableMap<String, String>): Route = route("/api") {
    val db by inject<Database>()
    /**
     * POST: /api/billsplit
     * {payments: [{person: string, amount: number]} --> {result: [{payer: string, owed: string, amount: double}]}
     */
    post("/billsplit") {
        val payments = call.receiveOrNull<PostPersonPayments>()
            ?.payments
            ?.map { Pair(it.person, it.amount) }
            ?: throw InvalidInputException("POST /billsplit require json body. Format: {'payments': [{person: 'name', amount: 0.00},...]}")

        call.respond(splitBills(payments))
    }

    /**
     * POST: /api/url
     *  {url: string} --> {result: string} (result is the hash)
     */
    post("/url") {
        val url = call.receive<UrlInput>().url
        val hash = url.hashHexify()

        redirections.putIfAbsent(hash, url)
        launch(Dispatchers.IO) {
            db.urlQueries.select(url).executeAsOneOrNull() ?: db.urlQueries.insert(url, hash)
        }

        call.respond(resultResponse(hash))
    }

    route("/blog") {
        get {
            val blogs = db.blogQueries.selectAll().executeAsList().toFullBlog()
            call.respond(blogs)
        }
        get("/{id}") {
            val id = call.parameters["id"]?.toLong() ?: throw InvalidRouteException()
            BlogHelper.getById(id, db)
                ?.let { call.respond(it) }
                ?: throw InvalidRouteException("Blog $id does not exist")
        }
        authenticate {
            post("/update") {
                if (BlogHelper.updateBlog(call.receive<BlogPostOpt>(), db))
                    call.respond(resultResponse("Blog successfully updated"))
                else
                    call.respond(HttpStatusCode.NotFound)
            }
            post("/create") {
                BlogHelper.createBlog(call.receive<BlogPost>(), db)
                call.respond(resultResponse("Blog successfully created"))
            }
        }
    }

    route("/smry") {
        val summarizer by inject<Summarizer>(named("tfidf"))
        val embeddSummarizer by inject<Summarizer>(named("embedding"))
        val tfidf = "TfIdf"
        val embeddingClustering = "EmbeddingClustering"
        val models = listOf(tfidf, embeddingClustering)

        fun getModel(model: String?): Summarizer = when (model) {
            embeddingClustering -> embeddSummarizer
            else -> summarizer
        }

        post {
            val summarizeReq = call.receive<SummarizeReq>()
            val summary = summarize(summarizeReq, summarizer)
            call.respond(resultResponse(summary))
        }

        post("/{model}") {
            val summarizeModel = getModel(call.parameters["model"])
            val summarizeReq = call.receive<SummarizeReq>()
            val summary = summarize(summarizeReq, summarizeModel)
            call.respond(resultResponse(summary))
        }

        get("/models") {
            call.respond(ResultResponseArray(models))
        }
    }

    route("/textgen") {
        post {
            val seedText = call.receive<TextGenInput>().text
            val genText = withContext(Dispatchers.Default) {
                SimpleTextGeneration
                    .generateText(LanguageModelHelper.getRelevantLanguageModel(""), seed = seedText)
                    .joinToString()
            }

            call.respond(resultResponse(genText))
        }

        post("/{model}") {
            val seed = call.receive<TextGenInput>()
            val modelName = call.parameters["model"]
            val lm = LanguageModelHelper.LanguageModels
                .find { it == modelName }
                ?: throw InvalidRouteException("Model '${call.parameters["model"]}' does not exist.")

            val generatedText = withContext(Dispatchers.Default) {
                SimpleTextGeneration
                    .generateText(
                        LanguageModelHelper.getRelevantLanguageModel(lm),
                        numTokens = seed.tokens,
                        temperature = seed.temperature,
                        seed = seed.text
                    )
                    .joinToString()
            }

            call.respond(resultResponse(generatedText))
        }

        get("/models") { call.respond(ResultResponseArray(LanguageModelHelper.LanguageModels)) }
    }
}