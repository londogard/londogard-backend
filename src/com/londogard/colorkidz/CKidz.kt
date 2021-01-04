package com.londogard.colorkidz

import org.bytedeco.javacpp.BytePointer
import org.bytedeco.javacv.Java2DFrameConverter
import org.bytedeco.javacv.OpenCVFrameConverter.ToIplImage
import org.bytedeco.opencv.global.opencv_core.bitwise_not
import org.bytedeco.opencv.global.opencv_imgcodecs.imencode
import org.bytedeco.opencv.global.opencv_imgproc.*
import org.bytedeco.opencv.opencv_core.Mat
import org.bytedeco.opencv.opencv_core.Size
import java.awt.image.BufferedImage
import java.io.ByteArrayInputStream
import javax.imageio.ImageIO

object CKidz {
    private fun toMat(bi: BufferedImage?): Mat? {
        val cv = ToIplImage()
        val jcv = Java2DFrameConverter()
        return cv.convertToMat(jcv.convert(bi))
    }

    private fun toMat(bs: ByteArray): Mat? {
        return toMat(toBufferedImage(bs))
    }

    private fun toBufferedImage(bs: ByteArray): BufferedImage? =
        runCatching { ImageIO.read(ByteArrayInputStream(bs)) }
            .getOrNull()

    fun blurImageBytes(byteArray: ByteArray, sigma: Double = 0.0): ByteArray {
        val img = toMat(byteArray)
        cvtColor(img, img, COLOR_BGR2GRAY)
        GaussianBlur(img, img, Size(5,5), sigma)
        Canny(img, img, 30.0, 150.0)
        bitwise_not(img, img)
        val bp = BytePointer()
        imencode(".png", img, bp)

        return bp.stringBytes
    }
}