package com.lundekhan.api

import com.londogard.summarize.summarizers.Summarizer
import com.londogard.textgen.LanguageModel
import com.londogard.textgen.PretrainedModels
import com.lundekhan.*
import com.lundekhan.billsplitter.PostPersonPayments
import com.lundekhan.billsplitter.splitBills
import com.lundekhan.blog.BlogHelper
import com.lundekhan.blog.BlogPost
import com.lundekhan.blog.BlogPostOpt
import com.lundekhan.summarizer.SummarizeReq
import com.lundekhan.summarizer.summarize
import com.lundekhan.textgen.TextGenInput
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
import org.koin.core.qualifier.named
import org.koin.ktor.ext.inject

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

    route ("/blog") {
        get { call.respond(BlogHelper.getAllBlogs(db)) }
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
        val languageModel by inject<LanguageModel>()
        var currentModel: String = PretrainedModels.SHAKESPEARE.name
        val models by lazy {
            PretrainedModels
                .values()
                .filterNot { it == PretrainedModels.CUSTOM }
                .map { it.name }
        }

        post {
            val seedText = call.receive<TextGenInput>().text
            val genText = withContext(Dispatchers.Default) {
                languageModel.generateText(seedText, 150, 0.3)
            }

            call.respond(resultResponse(genText))
        }

        post("/{model}") {
            val seed = call.receive<TextGenInput>()
            val modelName = call.parameters["model"]

            if (currentModel != modelName && modelName != null) {
                currentModel = modelName
                val model = PretrainedModels
                    .values()
                    .find { it.name == modelName }
                    ?: throw InvalidRouteException("Model '${call.parameters["model"]}' does not exist.")
                languageModel.changeModelToPretrained(model)
            }

            val generatedText = withContext(Dispatchers.Default) {
                languageModel.generateText(seed.text, seed.tokens, seed.temperature)
            }

            call.respond(resultResponse(generatedText))
        }

        get("/models") { call.respond(ResultResponseArray(models)) }
    }
}