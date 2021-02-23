package com.londogard.colorkidz

import com.londogard.colorkidz.webcomponents.ImageSlider
import com.londogard.colorkidz.styles.Icons
import com.londogard.colorkidz.styles.StyledItems.smallMargin
import com.londogard.colorkidz.styles.StyledItems.smallTopMargin
import dev.fritz2.binding.storeOf
import dev.fritz2.binding.watch
import dev.fritz2.components.clickButton
import dev.fritz2.components.flexBox
import dev.fritz2.components.icon
import dev.fritz2.components.inputField
import dev.fritz2.dom.files
import dev.fritz2.dom.html.RenderContext
import dev.fritz2.dom.html.render
import dev.fritz2.dom.mount
import dev.fritz2.routing.router
import dev.fritz2.styling.params.styled
import com.londogard.colorkidz.webcomponents.imageComparisonSlider
import kotlinx.browser.window
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.flow.map
import kotlinx.coroutines.flow.mapNotNull
import kotlinx.coroutines.flow.onEach
import org.w3c.files.FileList
import org.w3c.files.FileReader
import org.w3c.files.get

@ExperimentalCoroutinesApi
fun main() {
    val router = router("")
    window.customElements.define("img-comparison-slider", { ImageSlider::class.js })
    render {
        //loadImageComparisonScript()

        div("content") {
            router.data.render { site ->
                when (site) {
                    "" -> mainContent()
                    else -> mainContent()
                }
            }
        }

        div("footer") {
            flexBox({
                justifyContent { center }
                width { full }
                padding { small }
            }) {
                a {
                    href("https://github.com/londogard/")
                    icon { def = Icons.githubMark }
                }
                (::a.styled{ margins { left { small } } }) {
                    href("http://blog.londogard.com/")
                    +"Blog"
                }
                (::a.styled{ margins { left { small } } }) {
                    href("https://londogard.com:8443/")
                    +"Webpage"
                }
            }
        }
    }.mount("target")
}

@ExperimentalCoroutinesApi
fun RenderContext.mainContent() {
    val rhsEdgeRepo = EdgeRepository()
    val lhsStore =
        storeOf("")
    val fileReader = FileReader()
        .apply {
            onload = {
                val result = it.target.asDynamic()?.result?.unsafeCast<String>() ?: ""
                lhsStore.update(result)
            }
        }


    flexBox({
        width { full }
        alignItems { center }
        direction { column }
        justifyContent { center }
    }) {
        h1 { +"ColorKidz by Londogard" }

        flexBox({
            margin { normal }
            padding { normal }
            boxShadow { raised }
            radius { "1.5rem" }
            justifyContent { center }
            direction { column }
        }) {

            inputField(smallTopMargin) {
                base {
                    type("file")
                    accept("image/*")
                    changes
                        .files()
                        .mapNotNull { value: FileList? -> value?.get(0) }
                        .onEach { file -> fileReader.readAsDataURL(file) }
                        .watch()
                }
            }
            p {
                b { +"Edges " }
                +"(lower = more edges)"
            }
            inputField {
                base {
                    type("number")
                    value(rhsEdgeRepo.data.map { it.sigma })
                    step("0.5")
                    max("5")
                    min("0")
                    size(3)
                    this.changes
                        .map { rhsEdgeRepo.update(rhsEdgeRepo.current.copy(sigma = domNode.value)) }
                        .watch()
                }
            }

            clickButton(smallMargin) {
                loading(rhsEdgeRepo.loading)
                loadingText("Converting...")
                text("Convert Image")
                icon { fromTheme { play } }
            } handledBy rhsEdgeRepo.imageConvert

            clickButton(smallMargin) {
                text("Save Image")
                icon { fromTheme { download } }
            } handledBy rhsEdgeRepo.saveImage
        }

        //imageComparisonSlider {
//
        //    lhs(lhsStore.data, rhsEdgeRepo.setImage)
        //    rhs(rhsEdgeRepo.data.map { it.after ?: it.before })
        //}
        custom("img-comparison-slider") {
            img {
                attr("slot", "before")
                src(rhsEdgeRepo.data.map { it.after ?: it.before })
            }

            img {
                attr("slot", "after")
                 src(lhsStore.data)

                this@img
                    .loads    ///TODO replace all .watch() with handlers :)
                    .map { ImageUtils.resizeB64Encoded(this.domNode) }
                    .map { rhsEdgeRepo.update(EdgedImage(it, sigma = rhsEdgeRepo.current.sigma)) }
                    .watch()
            }
        }
    }
}
