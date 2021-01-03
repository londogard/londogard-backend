package com.londogard

import kotlinx.serialization.Serializable

fun resultResponse(output: String): Map<String, Any> = mapOf("result" to output)

@Serializable
data class ResultResponse(val result: String)
@Serializable
data class ResultResponseArray(val result: List<String>)