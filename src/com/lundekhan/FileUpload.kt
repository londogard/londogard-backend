package com.lundekhan

import io.ktor.application.ApplicationCall
import io.ktor.application.call
import io.ktor.http.content.PartData
import io.ktor.http.content.forEachPart
import io.ktor.http.content.streamProvider
import io.ktor.request.receiveMultipart
import io.ktor.routing.Route
import io.ktor.util.pipeline.PipelineContext
import kotlinx.coroutines.CoroutineDispatcher
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import kotlinx.coroutines.yield
import kotlinx.html.currentTimeMillis
import java.io.File
import java.io.InputStream
import java.io.OutputStream

/**suspend fun PipelineContext<Unit, ApplicationCall>.multipartHandler() = withContext(Dispatchers.IO) {
    val multipart = call.receiveMultipart()
    var title: String


    multipart.forEachPart { part ->
        when (part) {
            is PartData.FormItem -> {
                if (part.name == "title") {
                    title = part.value
                }
            }
            is PartData.FileItem -> {
                val ext = File(part.originalFileName ?: "UnkownFile").extension
                val file = File(uploadDir, "upload-${currentTimeMillis()}-${session.userId.hashCode()}-${title.hashCode()}.$ext")
                part.streamProvider()
                    .use { input ->
                        file.outputStream().buffered()
                            .use { output -> input.copyToSuspend(output) } }
                videoFile = file
            }
        }

        part.dispose()
    }
}
**/

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