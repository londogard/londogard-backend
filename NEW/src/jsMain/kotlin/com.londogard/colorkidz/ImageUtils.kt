package com.londogard.colorkidz

import kotlinx.browser.document
import org.w3c.dom.CanvasRenderingContext2D
import org.w3c.dom.Document
import org.w3c.dom.HTMLCanvasElement
import org.w3c.dom.HTMLImageElement
import kotlin.math.sqrt

object ImageUtils {
    private const val HDReadySize: Double = 720.0 * 1080

    fun resizeB64Encoded(img: HTMLImageElement): String {
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

        return canvas.toDataURL("image/jpg")
    }

    fun Document.saveBase64AsFile(base64: String, filename: String) {
        val link = createElement("a")
        body?.appendChild(link) // for Firefox

        link.apply {
            id = "download-b64"
            setAttribute("href", base64)
            setAttribute("download", filename)
            setAttribute("target", "_self")
        }

        link.asDynamic().click()
        link.remove()
    }
}