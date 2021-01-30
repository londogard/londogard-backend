package com.londogard.timetracker

import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.Document
import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.HTMLImageElement
import kotlin.math.sqrt

object ImageResizer {
    private const val HDReadySize: Double = 720.0 * 1080

    fun resizeB64Encoded(img: HTMLImageElement, document: Document): String {
        if (img.src.startsWith("http")) return img.src

        val canvas = document.createElement("canvas") as HTMLCanvasElement
        val ctx = canvas.getContext("2d") as CanvasRenderingContext2D

        val size = img.naturalWidth * img.naturalHeight
        val scale = if (size > HDReadySize) sqrt(size / HDReadySize) else 1.0

        canvas.width = (img.naturalWidth / scale).toInt()
        canvas.height = (img.naturalHeight / scale).toInt()

        ctx.scale(1 / scale, 1 / scale)
        ctx.drawImage(img, 0.0, 0.0)
        canvas.remove()

        return canvas.toDataURL("image/jpeg")
    }
}