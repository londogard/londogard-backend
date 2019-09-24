package com.lundekhan.textgen

/**
 * OBS: toCharArray().map(Chars::toString) has at least double performance of .split("")
 */
fun String.tokenizeChars(): List<String> = this.toCharArray().map(Char::toString)