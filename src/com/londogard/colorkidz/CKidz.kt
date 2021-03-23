package com.londogard.colorkidz

import boofcv.alg.feature.detect.edge.CannyEdge
import boofcv.factory.feature.detect.edge.FactoryEdgeDetectors
import boofcv.gui.binary.VisualizeBinaryData
import boofcv.io.image.ConvertBufferedImage
import boofcv.struct.image.GrayS16
import boofcv.struct.image.GrayU8
import java.awt.image.BufferedImage
import java.io.ByteArrayInputStream
import java.io.ByteArrayOutputStream
import javax.imageio.ImageIO


object CKidz {
    private val canny: CannyEdge<GrayU8, GrayS16> by lazy { FactoryEdgeDetectors.canny(2, true, true, GrayU8::class.java, GrayS16::class.java) }

    private fun toBufferedImage(bs: ByteArray): BufferedImage? =
        runCatching { ImageIO.read(ByteArrayInputStream(bs)) }.getOrNull()

    fun findEdges(byteArray: ByteArray, sigma: Double = 3.0): ByteArray {
        val highThresh = maxOf(sigma.toFloat() / 10, 0.15f)
        val gray = ConvertBufferedImage.convertFrom(toBufferedImage(byteArray), null as GrayU8?)
        canny.process(gray, 0.1f, highThresh, gray)
        val visualBinary: BufferedImage = VisualizeBinaryData.renderBinary(gray, true, null)
        val baos = ByteArrayOutputStream()
        ImageIO.write(visualBinary, "jpg", baos)

        return baos.toByteArray()
    }
}