package com.lundekhan.gui

import kotlinx.html.SECTION
import kotlinx.html.numberInput

fun SECTION.numberInput(
    min: Int? = null,
    max: Int? = null,
    step: Double? = null,
    value: String? = null,
    name: String
) =
    numberInput(name = name) {
        min?.let { this.min = it.toString() }
        max?.let { this.max = it.toString() }
        step?.let { this.step = it.toString() }
        value?.let { this.value = it }
    }