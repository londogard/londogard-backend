package com.lundekhan

fun resultResponse(output: String): Map<String, Any> = mapOf("result" to output)

data class ResultResponse(val result: String)