package com.londogard.timetracker

import com.londogard.timetracker.ThirdPartyScripts.imageComparison
import com.londogard.timetracker.components.StyledItems.buttonStyle
import com.londogard.timetracker.components.TodoItem
import dev.fritz2.binding.RootStore
import dev.fritz2.binding.storeOf
import dev.fritz2.binding.watch
import dev.fritz2.components.*
import dev.fritz2.dom.files
import dev.fritz2.dom.html.RenderContext
import dev.fritz2.dom.html.render
import dev.fritz2.dom.mount
import dev.fritz2.routing.router
import dev.fritz2.tracking.tracker
import kotlinx.coroutines.DisposableHandle
import kotlinx.coroutines.ExperimentalCoroutinesApi
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.*
import org.w3c.dom.url.URL
import org.w3c.files.FileList
import org.w3c.files.get

@ExperimentalCoroutinesApi
fun main() {
    val router = router("")

    render {
        imageComparison()

        div("content") {
            router.data.render { site ->
                when (site) {
                    "todo" -> mainContent()
                    else -> mainContent()
                }
            }
        }

        div("footer") {
            hr { }
            p { +"Footer" }
        }

    }.mount("target")
}

@ExperimentalCoroutinesApi
fun RenderContext.mainContent() {
    val rhsStore =
        storeOf("https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/64_365_Color_Macro_%285498808099%29.jpg/1024px-64_365_Color_Macro_%285498808099%29.jpg")
    val lhsStore =
        storeOf("https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Donald_Trump_official_portrait.jpg/375px-Donald_Trump_official_portrait.jpg")
    val buttonStore = object : RootStore<Int>(0) {
        val loading = tracker()

        val showMsg = handle { model ->
            console.log("HELLO WORLDS")
            loading.track("running...") {
                delay(3000)
                modal() {}
            }
            model
        }
    }


    flexBox({
        width { full }
        alignItems { center }
        direction { column }
        justifyContent { center }

    }) {
        h1 { +"ColorKidz" }
        inputField({
            width { "25%" }
            margin { normal }
        }) {
            base {
                type("file")
                accept("image/*")
                changes
                    .files()
                    .mapNotNull { value: FileList? -> value?.get(0) }
                    .map { file -> URL.createObjectURL(file) }
                    .onEach { file -> lhsStore.update(file) }
                    .watch()
            }
        }
        flexBox({
            justifyContent { center }
        }) {
            clickButton(buttonStyle) {
                loading(buttonStore.loading)
                loadingText("Converting...")
                text("Convert Image")
            }  handledBy buttonStore.showMsg

            clickButton(buttonStyle) {
                loadingText("playing")
                text("Save Image")
            } handledBy buttonStore.showMsg
        }

        // TODO handle click, make request and return


        custom("img-comparison-slider") {
            img {
                attr("slot", "before")
                src(rhsStore.data)
            }
            img {
                attr("slot", "after")
                attr("width", "100%")
                src(lhsStore.data)
            }
        }
    }
}