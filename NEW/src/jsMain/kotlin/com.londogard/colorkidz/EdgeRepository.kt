package com.londogard.colorkidz

import com.londogard.colorkidz.ImageUtils.saveBase64AsFile
import dev.fritz2.binding.RootStore
import dev.fritz2.remote.getBody
import dev.fritz2.remote.http
import dev.fritz2.tracking.tracker
import kotlinx.browser.document

data class EdgedImage(val before: String, val sigma: String = "3", val after: String? = null)
private const val prodApi = "https://londogard.com:8443/api/colorkidz"

class EdgeRepository : RootStore<EdgedImage>(EdgedImage("")) {
    private val edgeApi = http(prodApi).contentType("application/json")
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

            edgeImg.copy(after="data:image/jpg;base64,$b64")
        }
    }

    val setImage = handle<String> { edgeImage, b64Image ->
        edgeImage.copy(before = b64Image)
    }

    val saveImage = handle { edgeImg ->
        document.saveBase64AsFile(edgeImg.after ?: edgeImg.before, "colorkidz.jpg")
        edgeImg
    }
}