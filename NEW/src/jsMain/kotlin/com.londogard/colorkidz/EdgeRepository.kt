package com.londogard.colorkidz

import com.londogard.colorkidz.ImageUtils.saveBase64AsFile
import dev.fritz2.binding.RootStore
import dev.fritz2.remote.getBody
import dev.fritz2.remote.http
import dev.fritz2.tracking.tracker
import kotlinx.browser.document

data class EdgedImage(val before: String, val sigma: String = "3", val after: String? = null)
private const val prodApi = "https://londogard.com/api/colorkidz"

class EdgeRepository : RootStore<EdgedImage>(EdgedImage("")) {
    private val edgeApi = http(prodApi).contentType("application/json")
    private val cache = mutableMapOf<String, String>()
    val loading = tracker()

    val updateSigma = handle<String> { edgeImg, sigma ->
        edgeImg.copy(sigma = sigma)
    }

    val imageConvert = handle { edgeImg ->
        val body = """{
            "sigma": ${5 - (edgeImg.sigma.toDoubleOrNull() ?: 0.0)},
            "b64Image": "${edgeImg.before.split("base64,")[1]}"
            }
            """.trimIndent()

        loading.track("Edgefying Image") {
            val b64 = cache.getOrPut(body, { edgeApi
                .body(body)
                .contentType("application/json")
                .accept("*/*")
                .post()
                .getBody()
            })

            if (cache.size > 10) { // TODO fix stupid caching
                cache.keys
                    .filterNot { it == body }
                    .take(5)
                    .forEach(cache::remove)
            }

            edgeImg.copy(after="data:image/jpg;base64,$b64")
        }
    }

    val setImage = handle<String> { edgeImage, b64Image ->
        if (b64Image.endsWith(DemoImage.lhsEnd)) edgeImage.copy(before = b64Image, after = DemoImage.rhs)
        else edgeImage.copy(before = b64Image)
    }

    val saveImage = handle { edgeImg ->
        document.saveBase64AsFile(edgeImg.after ?: edgeImg.before, "colorkidz.jpg")
        edgeImg
    }
}