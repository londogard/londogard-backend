package com.londogard.colorkidz.webcomponents

import com.londogard.colorkidz.ImageUtils
import dev.fritz2.binding.Handler
import dev.fritz2.dom.Tag
import dev.fritz2.dom.WithText
import dev.fritz2.dom.html.RenderContext
import kotlinx.coroutines.Job
import kotlinx.coroutines.flow.Flow
import org.w3c.dom.HTMLElement


class ImageComparisonSlider(job: Job): Tag<HTMLElement>("img-comparison-slider", job = job), WithText<HTMLElement> {
    fun rhs(value: Flow<String>) = img {
        attr("slot", "before")
        src(value)
    }
    fun lhs(value: Flow<String>, handler: Handler<String>) = img {
        attr("slot", "after")
        src(value)
        this@img
            .loads
            .map { ImageUtils.resizeB64Encoded(this@img.domNode) } handledBy handler
    }
}

fun RenderContext.imageComparisonSlider(content: ImageComparisonSlider.() -> Unit): ImageComparisonSlider =
    register(ImageComparisonSlider(job), content)
