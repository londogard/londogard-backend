package com.londogard.colorkidz

import kotlinx.serialization.Serializable
import java.util.*

@Serializable
data class EdgeDetection(val sigma: Double, val b64Image: String)