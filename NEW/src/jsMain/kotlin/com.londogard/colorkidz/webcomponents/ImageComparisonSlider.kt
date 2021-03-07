package com.londogard.colorkidz.webcomponents

import com.londogard.colorkidz.ImageUtils
import dev.fritz2.binding.Handler
import dev.fritz2.binding.RootStore
import dev.fritz2.dom.html.RenderContext
import dev.fritz2.styling.staticStyle
import kotlinx.coroutines.flow.*
import org.w3c.dom.get
import kotlin.math.roundToInt

val imageComparisonStyle = staticStyle("""
        .container {
        		overflow: hidden;
        		position: relative;
                box-sizing: border-box;
        }
        .container img {
            top: 0;
            left: 0;
            z-index: 20;
            display: block;
            max-width: 100%;
            user-select: none;
            object-fit: cover;
            position: absolute;
        }
        .before-label, .after-label {
            top: 0;
            bottom: 0;
            z-index: 25;
            user-select: none;
            position: absolute;
        }
        .before-label { left: 0; }
        .after-label { right: 0; }
        .handle {
            z-index: 30;
            width: 40px;
            height: 40px;
            cursor: move;
            background: none;
            margin-top: -4px;
            margin-left: -4px;
            user-select: none;
            position: absolute;
            border-radius: 50px;
            top: calc(50% - 20px);
            border: 4px solid white;
        }
        .handle:before, .handle:after {
            content: "";
            height: 9999px;
            position: absolute;
            left: calc(50% - 2px);
            border: 2px solid white;
        }
        .handle:before { top: 40px; }
        .handle:after { bottom: 40px; }
        .arrow-right, .arrow-left {
            width: 0;
            height: 0;
            user-select: none;
            position: relative;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
        }
        .arrow-right {
            left: 23px;
            bottom: 10px;
            border-left: 10px solid white;
        }
        .arrow-left {
            left: 7px;
            top: 10px;
            border-right: 10px solid white;
        }
    """.trimIndent())

data class ImageOffset(val width: Int, val height: Int, val left: Int)

fun RenderContext.imageComparisonSlider(before: Flow<String>, after: Flow<String>, handler: Handler<String>) {
    val sizeStore = RootStore("width:100%;height:100%;") // resize
    val slidingStore = RootStore(false) // start
    val imgOffset = RootStore<ImageOffset?>(null) // resize
    imgOffset
        .data
        .filterNotNull()
        .map { bounds -> "width:${bounds.width}px;height:${bounds.height}px;" } handledBy sizeStore.update

    val offsetStore = object : RootStore<Double>(0.5) {
        val doMove = handle<Int> { offset, x -> // move
            val current = imgOffset.current
            if (slidingStore.current && current != null) {
                val newX = x - current.left

                newX.coerceAtLeast(0)
                    .coerceAtMost(current.width).toDouble()
                    .div(current.width)
            } else offset
        }
    }

    touchmoves.events.mapNotNull { e -> e.touches[0]?.pageX } handledBy offsetStore.doMove
    mousemoves.map { e -> e.pageX.roundToInt() } handledBy offsetStore.doMove
    // TODO might be needed: slidingStore.data handledBy offsetStore.doMove
    touchends.map { false } handledBy slidingStore.update
    mouseups.map { false } handledBy slidingStore.update


    div("container") {
        inlineStyle(sizeStore.data)
        touchstarts.map { true } handledBy slidingStore.update
        mousedowns.map { true } handledBy slidingStore.update

        img {
            attr("alt", "before")
            src(before)
            mousedowns.preventDefault()
            inlineStyle("width:100%;height:100%;")

            loads.map {
                val bounds = domNode.getBoundingClientRect()
                if (bounds.width <= 0)
                    ImageOffset(domNode.naturalWidth, domNode.naturalHeight, 0)
                else ImageOffset(bounds.width.toInt(), bounds.height.toInt(), bounds.left.toInt())
            } handledBy imgOffset.update
            loads.map { ImageUtils.resizeB64Encoded(domNode) } handledBy handler
        }

        img {
            attr("alt", "after")
            src(after)
            mousedowns.preventDefault()
            inlineStyle(sizeStore.data)

            val finalOffsetFlow = offsetStore.data
                .combine(imgOffset.data) { offset, imgBounds -> (offset * (imgBounds?.width ?: 0)) to (imgBounds?.height ?: 0) }
                .filterNot { (width, height) -> width == 0.0 || height == 0 }
                .map { (width, height) -> "clip:rect(0, ${width}px, ${height}px, 0);" }
            inlineStyle(finalOffsetFlow)
        }
        div("handle") {
            inlineStyle(offsetStore.data.map { offset -> "left: calc(${offset * 100}% - 20px);" })
            div("arrow-left") {}
            div("arrow-right") {}
        }
    }
}