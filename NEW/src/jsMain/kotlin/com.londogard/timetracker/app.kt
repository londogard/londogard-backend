package com.londogard.timetracker

import com.londogard.timetracker.ThirdPartyScripts.imageComparison
import com.londogard.timetracker.styles.StyledItems.smallMargin
import com.londogard.timetracker.styles.StyledItems.smallTopMargin
import dev.fritz2.binding.SimpleHandler
import dev.fritz2.binding.storeOf
import dev.fritz2.binding.watch
import dev.fritz2.components.*
import dev.fritz2.dom.files
import dev.fritz2.dom.html.RenderContext
import dev.fritz2.dom.html.render
import dev.fritz2.dom.mount
import dev.fritz2.routing.router
import dev.fritz2.styling.params.styled
import kotlinx.browser.document
import kotlinx.browser.window
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.flow.*
import org.w3c.files.FileList
import org.w3c.files.FileReader
import org.w3c.files.get

@ExperimentalCoroutinesApi
fun main() {
    val router = router("")

    render {
        imageComparison()

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
                    img {
                        src("https://github.githubassets.com/images/modules/logos_page/GitHub-Logo.png")
                        width(64)
                    }
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
        h1 { +"ColorKidz" }

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
            } handledBy rhsEdgeRepo.imageConvert

            clickButton(smallMargin) {
                loadingText("playing")
                text("Save Image")
            }
        }

        custom("img-comparison-slider") {
            img {
                attr("slot", "before")
                src(rhsEdgeRepo.data.map { it.after ?: it.before })
            }

            img {
                attr("slot", "after")
                attr("width", "100%")
                src(lhsStore.data)

                loads   // TODO replace all .watch() with handlers :)
                    .map { ImageResizer.resizeB64Encoded(this.domNode, document) }
                    .map { rhsEdgeRepo.update(EdgedImage(it, sigma = rhsEdgeRepo.current.sigma)) }
                    .watch()
            }
        }
    }
}
