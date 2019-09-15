package com.lundekhan

fun String.hashHexify(): String = Integer.toHexString(this.hashCode())
