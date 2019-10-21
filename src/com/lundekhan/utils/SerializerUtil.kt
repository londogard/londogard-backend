package com.lundekhan.utils

import java.io.File
import java.io.FileInputStream
import java.io.FileOutputStream

fun ByteArray.writeToFile(filename: String): Unit = FileOutputStream(filename).use { it.write(this) }
fun readFromFile(filename: String): ByteArray? =
    if (File(filename).exists()) FileInputStream(filename).use { it.readBytes() }
    else null