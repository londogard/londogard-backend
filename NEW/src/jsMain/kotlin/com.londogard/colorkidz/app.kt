package com.londogard.colorkidz

import com.londogard.colorkidz.styles.Icons
import com.londogard.colorkidz.styles.StyledItems.smallMargin
import com.londogard.colorkidz.styles.StyledItems.smallTopMargin
import com.londogard.colorkidz.webcomponents.ImageSlider
import com.londogard.colorkidz.webcomponents.imageComparisonSlider
import dev.fritz2.binding.RootStore
import dev.fritz2.binding.watch
import dev.fritz2.components.*
import dev.fritz2.components.data.File
import dev.fritz2.dom.html.RenderContext
import dev.fritz2.dom.html.render
import dev.fritz2.dom.values
import dev.fritz2.routing.router
import dev.fritz2.styling.params.styled
import kotlinx.browser.window
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.flow.map

@ExperimentalCoroutinesApi
fun main() {
    val router = router("")
    ImageSlider
    //window.customElements.define("svelte-image-compare", ImageSlider::class.js.unsafeCast<() -> dynamic>())
    render("#target") {
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
                    icon { Icons.githubMark }
                }
                (::a.styled { margins { left { small } } }) {
                    href("http://blog.londogard.com/")
                    +"Blog"
                }
                (::a.styled { margins { left { small } } }) {
                    href("https://londogard.com:8443/")
                    +"Webpage"
                }
            }
        }
    }
}

@ExperimentalCoroutinesApi
fun RenderContext.mainContent() {
    val rhsEdgeRepo = EdgeRepository()
    val lhsStore = object : RootStore<String>("") {
        val upload = handle<File> { _, file ->
            // TODO save name to use when saving file!
            "data:${file.type};base64,${file.content}"
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
            file(smallTopMargin) {
                accept("image/*")
                button(id = "myFile") {
                    text("Select a image")
                    icon { fromTheme { cloudUpload } }
                }
            } handledBy lhsStore.upload

            p {
                b { +"Edges " }
                +"(lower = more edges)"
            }
            inputField {
                type("number")
                value(rhsEdgeRepo.data.map { it.sigma })
                step("0.5")
                events {
                    changes.values() handledBy rhsEdgeRepo.updateSigma
                }
            }

            clickButton(smallMargin) {
                loading(rhsEdgeRepo.loading.data)
                loadingText("Converting...")
                text("Convert Image")
                icon { fromTheme { play } }
            } handledBy rhsEdgeRepo.imageConvert

            clickButton(smallMargin) {
                text("Save Image")
                icon { fromTheme { download } }
            } handledBy rhsEdgeRepo.saveImage
        }

        custom("compare-image-slider") {
            img {
                attr("slot", "left")
                attr("width", "100%")
                src(lhsStore.data)
                loads.map { ImageUtils.resizeB64Encoded(this.domNode) } handledBy rhsEdgeRepo.setImage
            }
            img {
                attr("slot", "right")
                attr("width", "100%")
                src(rhsEdgeRepo.data.map { it.after ?: it.before })
            }
        }
    }
}
