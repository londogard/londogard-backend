package com.londogard.colorkidz

import java.util.*

fun String.b64ToByteArray(): ByteArray = Base64.getDecoder().decode(this)
fun ByteArray.b64ToString(): String = Base64.getEncoder().encodeToString(this)

// no need for set, can only compare first with last!!
fun FloatArray.removeIndices(toRemove: IntArray): FloatArray {
    val result = FloatArray(size - toRemove.size)
    var targetIndex = 0
    var currIndex = 0
    for (sourceIndex in indices) {
        if (currIndex == toRemove.size || sourceIndex != toRemove[currIndex]) {
            result[targetIndex++] = this[sourceIndex]
        } else if (sourceIndex == toRemove[currIndex]) {
            currIndex++
        }
    }
    return result
}
fun ByteArray.removeIndices(toRemove: IntArray): ByteArray {
    val result = ByteArray(size - toRemove.size)
    var targetIndex = 0
    var currIndex = 0
    for (sourceIndex in indices) {
        if (currIndex == toRemove.size || sourceIndex != toRemove[currIndex]) {
            result[targetIndex++] = this[sourceIndex]
        } else if (sourceIndex == toRemove[currIndex]) {
            currIndex++
        }
    }
    return result
}