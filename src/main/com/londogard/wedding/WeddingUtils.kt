package com.londogard.wedding

object WeddingUtils {
    fun String.extraToMap(): Map<String, Boolean> =
        split('&')
            .filter(String::isNotEmpty)
            .associate { keyValue ->
                val split = keyValue.split('=')
                split[0] to (split[1].toBooleanStrictOrNull() ?: false)
            }
}