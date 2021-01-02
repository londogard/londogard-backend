package com.londogard.colorkidz

import com.londogard.billsplitter.splitBills
import com.londogard.gui.HtmlTemplates.respondHtmlShell
import io.ktor.application.*
import io.ktor.http.ContentDisposition.Companion.File
import io.ktor.http.content.*
import io.ktor.request.*
import io.ktor.routing.*
import kotlinx.coroutines.CoroutineDispatcher
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import kotlinx.coroutines.yield
import kotlinx.html.*
import org.bytedeco.opencv.opencv_dnn.LayerFactory
import org.opencv.dnn.Dnn
import java.io.File
import java.io.InputStream
import java.io.OutputStream

fun Route.colorKidz(): Route = route("/colorkidz") {
    fun SECTION.billsplitForm(text: String = ""): Unit = form(method = FormMethod.post) {
        header {
            style = "padding:0;"
            h3 { +"colorkidz." }
            small { +"Create a coloring page out of your picture! Works better with close-ups." }
        }
        fileInput {
            name = "file"
        }
        postButton { +"Submit" }
    }

    get { call.respondHtmlShell("ColorKidz - Create your colouring page today!'") { section { billsplitForm() } } }

    post {

        val multipart = call.receiveMultipart()
        //multipart.forEachPart { part ->
        //    when (part) {
        //        is PartData.FileItem -> {
        //            val ext = File(part.originalFileName ?: "tmp").extension
        //            val file = File(uploadDir, "upload-${System.currentTimeMillis()}-${session.userId.hashCode()}-${title.hashCode()}.$ext")
        //            part.streamProvider().use { input -> file.outputStream().buffered().use { output -> input.copyToSuspend(output) } }
        //            videoFile = file
        //        }
        //        else -> Unit
        //    }
//
        //    part.dispose()
        //}


        val params = call.receiveParameters()
        val payments = params["file"]
            ?.split('\n', ',')
            ?.map { line -> line.split(' ') }
            ?.takeIf { it.size > 1 }
            ?.filter { it.size >= 2 }
            ?.map { (name, amount) -> name to (amount.toDoubleOrNull() ?: 0.0) }
            ?.let { personAmounts -> splitBills(personAmounts) } ?: emptyList()

        call.respondHtmlShell("Billsplitter 'Split your bills'") {
            section { billsplitForm(params["input"]!!) }
            section {
                aside {
                    payments.forEach { payment ->
                        +"${payment.payer} pays ${payment.owed} ${"%.1f".format(payment.amount)}:-"
                        br { }
                    }
                    if (payments.isEmpty()) +"No bills to split!"
                }
            }
        }
    }
}

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