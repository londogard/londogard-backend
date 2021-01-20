package com.londogard.timetracker.components

import dev.fritz2.dom.Tag
import dev.fritz2.dom.WithText
import dev.fritz2.dom.html.RenderContext
import kotlinx.coroutines.Job
import kotlinx.coroutines.flow.Flow
import org.w3c.dom.HTMLElement


class ImgCompare(job: Job) : Tag<HTMLElement>("img-comparison-slider", job = job), WithText<HTMLElement> {
    fun before(value: Flow<Int>) = attr("before", value.asString())
    fun after(value: Flow<Float>) = attr("after", value.asString())
}

fun RenderContext.imageCompare(content: ImgCompare.() -> Unit): ImgCompare = register(ImgCompare(job), content)
