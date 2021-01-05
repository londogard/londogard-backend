package com.londogard.colorkidz

//import kweb.*
import boofcv.io.image.UtilImageIO
import com.londogard.gui.HtmlTemplates.respondHtmlShell
import io.ktor.application.*
import io.ktor.client.*
import io.ktor.client.engine.cio.*
import io.ktor.client.features.*
import io.ktor.client.features.json.*
import io.ktor.client.request.*
import io.ktor.client.request.forms.*
import io.ktor.http.*
import io.ktor.http.content.*
import io.ktor.locations.*
import io.ktor.request.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.util.*
import io.ktor.utils.io.core.*
import kotlinx.coroutines.*
import kotlinx.html.*
import kotlinx.serialization.Serializable
import java.io.File
import java.io.InputStream
import java.io.OutputStream
import java.nio.file.Files
import java.nio.file.Paths
import java.time.Duration
import java.time.Instant
import java.time.LocalDateTime
import java.util.*
import kotlin.io.use

@InternalAPI
fun Route.colorKidz(): Route = route("/colorkidz") {
    val title = "ColorKidz - Create your colouring page today!'"
    val rootPath by lazy {
        val path = Paths.get(System.getProperty("user.home")).resolve("colorkidz")
        Files.createDirectories(path)
        path
    }

    fun SECTION.billsplitForm(): Unit =
        form(method = FormMethod.post, encType = FormEncType.multipartFormData) {
            header {
                style = "padding:0;"
                h3 { +"colorkidz." }
                small { +"Create a coloring page out of your picture! Works better with close-ups." }
            }
            radioCommand {
                radioInput {
                    name = "model"
                    value = "algo"
                    checked = true
                }
                label { +"Algorithmic" }
                br { }
                radioInput {
                    name = "model"
                    value = "hed"
                }
                label { +"Holistically Edge Detection (slower)" }
            }
            br {  }
            small { +"Smoothing level for Algorithmic approach (lower = more edges)." }
            numberInput {
                name = "sigma"
                id = "sigma"
                value = "3"
                min = "0"
                max = "10"
            }
            fileInput {
                name = "file"
            }
            postButton {
                +"Submit"
            }
        }


    get {
        launch(Dispatchers.IO) {
            val yesterday = Instant.now().minus(Duration.ofDays(1))
            rootPath.toFile().walkTopDown()
                .filter { file ->
                    Instant.parse(file.name.take(26)).isBefore(yesterday)
                }
                .map(File::delete)
        }
        call.respondHtmlShell(title) {
            section { billsplitForm() }
        }
        /**
         * call.respondKweb {
        val imageString = KVar("")
        val edgeImageString = KVar("")
        doc.body.new {
        val input = fileInput()
        input.onFileSelect {
        input.retrieveFile {
        imageString.value = it.base64Content
        }
        }
        input.inputElement.on.submit {
        GlobalScope.launch {

        }
        }
        val btn = button().text("Submit")
        btn.on.click {
        GlobalScope.launch {
        HttpClient().post {

        }
        }
        //                    val array = Base64.getDecoder().decode(imageString.value)

        }
        br()
        img().setAttribute("src", imageString)
        br()
        img().setAttribute("src", edgeImageString)
        }
        }
         */
    }

    get<Path> { path ->
        val filePath = rootPath.resolve(path.path)
        if (Files.exists(filePath)) {
            val file = rootPath.resolve(path.path).toFile()
            call
                .response
                .header(
                    HttpHeaders.ContentDisposition,
                    ContentDisposition.File.withParameter(
                        ContentDisposition.Parameters.FileName,
                        file.name
                    ).toString()
                )
            call.respondFile(file)
        } else {
            call.respondHtmlShell(title) {
                section { billsplitForm() }
                section {
                    aside {
                        b { +"File is not available yet. Please wait another minute." }
                        br { }
                        small { +"This takes a while, please come back to this url in a few minutes to download file" }
                        br { }
                        a("/colorkidz/download/${path.path}") { +"Download" }
                    }
                }
            }
        }
    }

    post {
        val parts = call.receiveMultipart().readAllParts()
        val algorithmicApproach =
            parts.find { part -> part is PartData.FormItem && part.name == "model" && part.value == "algo" } != null
        val file = parts
            .mapNotNull { part -> part as? PartData.FileItem }
            .firstOrNull()
        when {
            file == null || file.originalFileName.isNullOrEmpty() -> {
                call.respondHtmlShell(title) {
                    section { billsplitForm() }
                    section {
                        aside {
                            b { +"OBS: File input required!" }
                        }
                    }
                }
            }
            algorithmicApproach -> {
                val sigma = parts
                    .mapNotNull { part -> if (part is PartData.FormItem && part.name == "sigma") part.value.toDoubleOrNull() else null }
                    .firstOrNull() ?: 3.0

                val bytes = file.streamProvider().use(InputStream::readBytes)
                val edges = CKidz.findEdges(bytes, sigma)

                call
                    .response
                    .header(
                        HttpHeaders.ContentDisposition,
                        ContentDisposition.File.withParameter(
                            ContentDisposition.Parameters.FileName,
                            "${File(file.originalFileName ?: "unk").nameWithoutExtension}-colorkidz.png"
                        ).toString()
                    )
                call.respondBytes(edges)
            }
            else -> {
                val filePath = rootPath.resolve("${LocalDateTime.now()}-${file.originalFileName}")
                val fileOnPath = filePath.toFile()
                fileOnPath.outputStream()
                    .use { output -> file.streamProvider().use { input -> input.copyToSuspend(output) } }
                val path = Paths.get(fileOnPath.parent).resolve("${fileOnPath.nameWithoutExtension}-colorkidz.png")
                    .toAbsolutePath()

                launch(Dispatchers.IO) {
                    HttpClient(CIO) { install(JsonFeature) }
                        .use { client -> client.get<PathData>("http://127.0.0.1:8000/edges?file_path=${filePath}") }
                    fileOnPath.delete()
                }
                call.respondHtmlShell(title) {
                    section { billsplitForm() }
                    section {
                        aside {
                            b { +"File is not available yet. Please wait another minute." }
                            br { }
                            small { +"This (HED) takes a while, please press 'Download' in a few minutes again." }
                            br { }
                            a("/colorkidz/download/${path.fileName}") { +"Download" }
                        }
                    }
                }
            }
        }
    }
}

@Location("/download/{path}")
data class Path(val path: String)

@Serializable
data class PathData(val path: String)

suspend fun InputStream.copyToSuspend(
    out: OutputStream,
    bufferSize: Int = DEFAULT_BUFFER_SIZE,
    yieldSize: Int = 4 * 1024 * 1024,
    dispatcher: CoroutineDispatcher = Dispatchers.IO
): Long {
    return withContext(dispatcher) {
        val buffer = ByteArray(bufferSize)
        var bytesCopied = 0L
        var bytesAfterYield = 0L
        while (true) {
            val bytes = read(buffer).takeIf { it >= 0 } ?: break
            out.write(buffer, 0, bytes)
            if (bytesAfterYield >= yieldSize) {
                yield()
                bytesAfterYield %= yieldSize
            }
            bytesCopied += bytes
            bytesAfterYield += bytes
        }
        return@withContext bytesCopied
    }
}