package com.londogard.colorkidz

import java.util.*

fun String.b64ToByteArray(): ByteArray = Base64.getDecoder().decode(this)
fun ByteArray.b64ToString(): String = Base64.getEncoder().encodeToString(this)

// no need for set, can only compare first with last!!
fun FloatArray.removeIndices(toRemove: Set<Int>): FloatArray {
    val result = FloatArray(size - toRemove.size)
    var targetIndex = 0
    for (sourceIndex in indices) {
        if (sourceIndex !in toRemove) result[targetIndex++] = this[sourceIndex]
    }
    return result
}
fun ByteArray.removeIndices(toRemove: Set<Int>): ByteArray {
    val result = ByteArray(size - toRemove.size)
    var targetIndex = 0
    for (sourceIndex in indices) {
        if (sourceIndex !in toRemove) result[targetIndex++] = this[sourceIndex]
    }
    return result
}