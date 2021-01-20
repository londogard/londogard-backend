package com.londogard.timetracker

import dev.fritz2.dom.html.RenderContext

object ThirdPartyScripts {
    fun RenderContext.imageComparison(): Unit {
        script {
            type("module")
            src("https://unpkg.com/img-comparison-slider@3/dist/component/component.esm.js")
        }

        script {
            attr("nomodule", "")
            src("https://unpkg.com/img-comparison-slider@3/dist/component/component.js")
        }
        custom("link") {
            attr("rel", "stylesheet")
            attr("href", "https://unpkg.com/img-comparison-slider@3/dist/collection/styles/initial.css")
        }
    }
}