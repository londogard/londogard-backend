package com.londogard

fun String.hashHexify(): String = Integer.toHexString(this.hashCode())
