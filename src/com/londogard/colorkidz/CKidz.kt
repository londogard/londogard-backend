package com.londogard.colorkidz

import io.ktor.util.*
import io.ktor.utils.io.streams.*
import org.bytedeco.javacpp.BytePointer
import org.bytedeco.opencv.opencv_cudaimgproc.CannyEdgeDetector
import org.bytedeco.opencv.helper.opencv_core.*
import org.bytedeco.opencv.helper.opencv_imgproc.*
import org.bytedeco.opencv.helper.opencv_imgcodecs.*
import org.opencv.imgcodecs.Imgcodecs

import org.bytedeco.opencv.opencv_core.*
import org.bytedeco.opencv.opencv_imgproc.*
import org.bytedeco.opencv.global.opencv_core.*
import org.bytedeco.opencv.global.opencv_imgproc.*
import org.bytedeco.opencv.global.opencv_imgcodecs.*

import javax.imageio.ImageIO

import java.awt.image.BufferedImage

import org.bytedeco.javacv.Java2DFrameConverter

import org.bytedeco.javacv.OpenCVFrameConverter
import org.bytedeco.javacv.OpenCVFrameConverter.ToIplImage
import java.io.*
import java.nio.ByteBuffer
import java.nio.channels.FileChannel
import java.nio.file.Files
import java.nio.file.Paths


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

    @JvmStatic
    fun main(args: Array<String>) {
        val a = blurImageBytes(javaClass.getResourceAsStream("/hampus.jpg").readAllBytes(), 3.0)
        File("h.png").writeBytes(a)
    }
}