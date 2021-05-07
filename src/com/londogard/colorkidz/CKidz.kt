package com.londogard.colorkidz

import boofcv.abst.filter.derivative.ImageGradient_SB
import boofcv.alg.feature.detect.edge.CannyEdge
import boofcv.alg.feature.detect.edge.GGradientToEdgeFeatures
import boofcv.factory.feature.detect.edge.FactoryEdgeDetectors
import boofcv.gui.binary.VisualizeBinaryData
import boofcv.io.image.ConvertBufferedImage
import boofcv.kotlin.asBufferedImage
import boofcv.kotlin.asPlanarU8
import boofcv.struct.image.GrayF32
import boofcv.struct.image.GrayS16
import boofcv.struct.image.GrayU8
import java.awt.image.BufferedImage
import java.io.ByteArrayInputStream
import java.io.ByteArrayOutputStream
import javax.imageio.ImageIO
import kotlin.math.max
import kotlin.math.min

object CKidz {
    private val grayDX: GrayF32 = GrayF32(1, 1)
    private val grayDY: GrayF32 = GrayF32(1, 1)
    private val intensity: GrayF32 = GrayF32(1, 1)
    private val canny: CannyEdge<GrayU8, GrayS16> by lazy { FactoryEdgeDetectors.canny(2, true, true, GrayU8::class.java, GrayS16::class.java) }
    private val sobel: ImageGradient_SB.Sobel<GrayF32, GrayF32> by lazy { ImageGradient_SB.Sobel(GrayF32::class.java, GrayF32::class.java) }

    private fun toBufferedImage(bs: ByteArray): BufferedImage? =
        runCatching { ImageIO.read(ByteArrayInputStream(bs)) }.getOrNull()

    // TODO only recalculate the update path..!
    //  This could be done by saving the energyMap and only update states requiring update moving upwards
    fun cheapestPath(image: GrayF32): Set<Int> {
        for (y in image.height - 2 downTo 0) {
            for (x in 0 until image.width) {
                val cheapestPath = (max(x - 1, 0)..min(x + 1, image.width - 1))
                    .minOf { i -> image[i, y + 1] }

                image[x, y] = image[x, y] + cheapestPath
            }
        }

        var previousBest = 0
        return IntArray(image.height) { i ->
            val range =
                if (i == 0) 0 until image.width
                else max(previousBest - 1, 0)..min(previousBest + 1, image.width - 1)
            previousBest = range.minByOrNull { j -> image.get(j, i) } ?: 0

            previousBest + (i * image.width) // Raw Index
        }.toSet()
    }

    fun seamCarve(img: GrayF32): Set<Int> {
        sobel.process(img, grayDX, grayDY)
        GGradientToEdgeFeatures.intensityE(grayDX, grayDY, intensity)
        return cheapestPath(intensity)
    }

    fun seamCarving(byteArray: ByteArray, reductions: Int, numDemos: Int = 1): List<ByteArray> {
        val orig = toBufferedImage(byteArray) ?: return emptyList()
        val planar = orig.asPlanarU8()

        val toReturn = MutableList(numDemos) { planar.clone() }

        val currImg = ConvertBufferedImage.convertFrom(orig, null as GrayF32?)
        val savePoints = reductions / numDemos
        val indiceToRemove: MutableList<Set<Int>> = MutableList(reductions) { emptySet() }

        // TODO set lines as 255 and save indices..??
        (0..reductions).forEach { i ->
            val indices = seamCarve(currImg)
            currImg.apply {
                setData(currImg.data.removeIndices(indices))
                reshape(width - 1, height)
            }
            indiceToRemove[i] = indices
        }

        (0..reductions).forEach { i ->
            planar.bands.forEach { band ->
                band.apply {
                    setData(band.data.removeIndices(indices))
                    width -= 1
                }
            }
            planar.reshape(planar.width - 1, planar.height)

            if (i != 0 && i % savePoints == 0) {
                toReturn[i / savePoints - 1] = planar.clone()
            }
        }

        return toReturn.map { img -> img.asBufferedImage().toByteArray("jpg") }
    }

    fun BufferedImage.toByteArray(format: String): ByteArray {
        val stream = ByteArrayOutputStream()
        ImageIO.write(this, format, stream)
        return stream.toByteArray()
    }

    fun findEdges(byteArray: ByteArray, sigma: Double = 3.0): ByteArray {
        val highThresh = maxOf(sigma.toFloat() / 10, 0.15f)
        val gray = ConvertBufferedImage.convertFrom(toBufferedImage(byteArray), null as GrayU8?)
        canny.process(gray, 0.1f, highThresh, gray)
        val visualBinary: BufferedImage = VisualizeBinaryData.renderBinary(gray, true, null)

        return visualBinary.toByteArray("jpg")
    }
}