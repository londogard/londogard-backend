package com.londogard.colorkidz

import com.londogard.colorkidz.styles.Icons.githubMark
import com.londogard.colorkidz.styles.StyledItems.floatingCard
import com.londogard.colorkidz.styles.StyledItems.smallMargin
import dev.fritz2.binding.RootStore
import dev.fritz2.components.*
import dev.fritz2.components.data.File
import dev.fritz2.dom.html.RenderContext
import dev.fritz2.dom.html.render
import dev.fritz2.dom.values
import dev.fritz2.routing.router
import dev.fritz2.styling.params.styled
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.flow.map

@ExperimentalCoroutinesApi
fun main() {
    val router = router("")

    render("#target") {
        header {  }
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
                (::a.styled { margins { left { small } } }) {
                    href("https://github.com/londogard/")
                    icon { def(githubMark) }
                }
                (::a.styled { margins { left { small } } }) {
                    href("http://blog.londogard.com/")
                    +"Londogard Blog"
                }
                (::a.styled { margins { left { small } } }) {
                    href("https://londogard.com/")
                    +"Londogard.com"
                }
            }
        }
    }
}

@ExperimentalCoroutinesApi
fun RenderContext.mainContent() {
    val rhsEdgeRepo = EdgeRepository()
    val lhsStore = object : RootStore<String>(DemoImage.lhs) {
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

        flexBox(floatingCard) {
            file(smallMargin) {
                accept("image/*")
                button(id = "myFile") {
                    text("Select image")
                    icon { fromTheme { cloudUpload } }
                }
            } handledBy lhsStore.upload

            p {
                b { +"EdgeDetectionLevel " }
                rhsEdgeRepo.data.map { "(${it.sigma})" }.asText()
            }
            input {
                type("range")
                step("0.5");max("5");min("0")

                value(rhsEdgeRepo.data.map { it.sigma })
                changes.values() handledBy rhsEdgeRepo.updateSigma
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

        custom("img-comparison-slider") {
            img {
                attr("slot", "after")
                attr("width", "100%")
                src(lhsStore.data)
                loads.map { ImageUtils.resizeB64Encoded(this.domNode) } handledBy rhsEdgeRepo.setImage
            }
            img {
                attr("slot", "before")
                attr("width", "100%")
                src(rhsEdgeRepo.data.map { it.after ?: it.before })
            }
        }
    }
}
