package com.lundekhan.textgen

import java.io.BufferedReader
import java.io.InputStream
import java.nio.file.Files
import java.nio.file.Paths
import java.util.stream.Stream

fun <T> Class<T>.getFileStream(fileName: String): Stream<String> =
    Files.lines(
        Paths.get(
            javaClass.getResource(if (fileName.startsWith('/')) fileName else "/$fileName").path
        )
    )

fun <T> Class<T>.readFileAsLinesUsingGetResourceAsStream(fileName: String): InputStream =
    this::class.java.getResourceAsStream(fileName)

fun <T> Class<T>.readFileAsLinesUsingGetResourceAsBufferedReader(fileName: String): BufferedReader =
    this::class.java.getResourceAsStream(fileName).bufferedReader()


fun <T> Class<T>.getFilePath(fileName: String): String =
    this::class.java.getResource(fileName).path