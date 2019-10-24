package com.lundekhan

fun resultResponse(output: String): Map<String, String> = mapOf("result" to output)

data class ResultResponse(val result: String)