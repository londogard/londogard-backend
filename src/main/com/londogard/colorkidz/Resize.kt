package com.londogard.colorkidz

import kotlinx.serialization.Serializable

@Serializable
data class Resize(val pixelLinesToRemove: Int, val b64Image: String)
@Serializable
data class ResizeDemo(val pixelLinesToRemove: Int, val numAlternatives: Int, val b64Image: String)
