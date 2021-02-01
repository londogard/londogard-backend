package com.londogard.timetracker

import com.londogard.timetracker.ImageUtils.saveBase64AsFile
import dev.fritz2.binding.RootStore
import dev.fritz2.remote.getBody
import dev.fritz2.remote.http
import dev.fritz2.tracking.tracker
import org.w3c.dom.Document

data class EdgedImage(val before: String, val sigma: String = "3", val after: String? = null)

class EdgeRepository : RootStore<EdgedImage>(EdgedImage("")) {
    private val testApi = "http://localhost:8080/colorkidz/api"
    private val prodApi = "https://londogard.com:8443/colorkidz/api"
    private val edgeApi = http(testApi).contentType("application/json")

    val loading = tracker()

    val imageConvert = handle { edgeImg ->
        loading.track("Edgefying Image") {
            val b64 = edgeApi
                .body(
                    """{
            "sigma": ${edgeImg.sigma},
            "b64Image": "${edgeImg.before.split("base64,")[1]}"
            }
            """.trimIndent()
                )
                .contentType("application/json")
                .accept("*/*")
                .post()
                .getBody()

            edgeImg.copy(after="data:image/png;base64,$b64")
        }
    }


    val saveImage = handle { edgeImg, doc: Document ->
        doc.saveBase64AsFile(edgeImg.after ?: edgeImg.before, "colorkidz.jpg")
        edgeImg
    }
}