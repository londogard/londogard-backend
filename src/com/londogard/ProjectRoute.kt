package com.londogard

import com.londogard.gui.HtmlTemplates.respondHtmlShell
import com.londogard.gui.wideCard
import io.ktor.server.routing.*
import kotlinx.html.*

fun Route.projectRoute(): Route = get("") {
    context.respondHtmlShell("Projects") {
        h2 {
            style = "text-align:center;"
            +"Projects by Londogard"
        }
        div {
            style = "display:flex;"
            div {
                p {
                    b { +"Quick Links" }
                    ul {
                        li { a(href = "projects/safe-cosmetics") { +"Cosmetics Checker" } }
                        li { a(href = "https://colorkidz.londogard.com", target = "_blank") { +"ColorKidz↗" } }
                        li { a(href = "projects/smry") { +"Summarizer" } }
                        li {
                            a(
                                href = "https://photo-fritz2.pages.dev/",
                                target = "_blank"
                            ) { +"NightVision (KotlinJS+ONNXWebRuntime)↗" }
                        }
                        li {
                            a(
                                href = "https://huggingface.co/lunde/gpt2-snapsvisor",
                                target = "_blank"
                            ) { +"Snapsvisegenerator (GPT-2)↗" }
                        }
                    }
                    details {
                        open = true
                        summary { +"Other Projects" }
                        small {
                            ul {
                                li { a(href = "projects/ner") { +"SweNER" } }
                                li { a(href = "projects/fuzsearch") { +"Fuzzy Search" } }
                                li { a(href = "projects/textgen") { +"Text Generation" } }
                                li { a(href = "projects/billsplit") { +"Billsplitter" } }
                                li { a(href = "projects/url") { +"URL Shortener" } }
                                li { a(href = "projects/stokk") { +"Stokk" } }
                            }
                        }
                    }
                }
            }
            section {
                wideCard("Safe Cosmetics", {
                    p {
                        i { +"A simple app to validate if your cosmetics, shampoo or anything contains toxic ingredients." }
                        br { }
                        +"Snap or upload a photo or simply paste the text and the models will show you!"
                    }
                }, url = "projects/safe-cosmetics", image = "safe-cosmetics.jpg")
                wideCard("NightVision (KotlinJS+ONNXWebRuntime)", {
                    p {
                        i { +"A Deep Learning model running in the browser, on the edge-device." }
                        br { }
                        +"This model fixes dark images to be bright, even if you might not see anything with your bare eye. "
                        +"The model runs on Smartphones, PCs and anything really. Using ONNX Runtime + KotlinJS."
                    }
                }, url = "https://photo-fritz2.pages.dev/")
                wideCard("SweNER", {
                    p {
                        i { +"A "; b { +"State-of-the-Art" }; +" Named Entity Recognizer for Swedish" }
                        br { }
                        +"Developed to strike a balance between performance, efficiency & usability there exists two models of different architectures."
                        br { }
                        +"The models are quantized (1/4th size & 4x faster)."
                    }
                }, url = "projects/ner", image = "swener.jpg")
                wideCard("ColorKidz", {
                    p {
                        i { +"Convert your images into colouring pages" }
                        br { }
                        +"Our only Progressive Web App (PWA) this far. ColorKidz turns your photo into a colouring page using an algorithmic approach. "
                    }
                }, url = "https://colorkidz.londogard.com", image = "colorkidz.jpg")
                wideCard("Summarizer", {
                    p {
                        i { +"A "; b { +"State-of-the-Art" }; +" language-independent extractive summarizer." }
                        br { }
                        +"Built a very powerful yet simple summarizer that uses pure statistics, no large neural networks or anything. It does "
                        i { +"extractive summarization" }
                        +" and it's only the TfIdf-variant is language independent."
                    }
                }, url = "projects/smry")

                fun DIV.miniProject(
                    url: String,
                    title: String,
                    description: String,
                    openDescription: DIV.() -> Unit = {}
                ) {
                    p {
                        b { a(href = url) { +title } }
                        br { }
                        +description
                    }
                    openDescription()
                }
                wideCard("Mini/Fun Projects", {
                    miniProject("projects/textgen", "Text Generation", "") {
                        +"A "; i { +"char-2-char" }; +" text generator (pure statistics) which includes some very cool work-arounds to actually run on a small embedded device."
                        br { }
                        +"The Text Generation itself is pretty underwhelming, but the internals are really cool!"
                    }
                    miniProject("projects/fuzsearch", "Fuzzy Search", "") {
                        +"A drop-in utility object which takes a list of items and allows you to fuzzy search these items."
                        br { }
                        +"My hope is that this can help all people who are setting up either a small internal/hobby project to have a little bit better search. :)"
                    }
                    miniProject(
                        "projects/url",
                        "URL Shortener",
                        "Need to shorten your urls? Then this tool might be handy!"
                    )
                    miniProject(
                        "projects/billsplit",
                        "Billsplitter",
                        "A very simple billsplitter which is great when you need to split the bills with your buddies."
                    )
                    miniProject("projects/stokk", "Stokk", "A very simple stokk calculator for all your calculations.")
                })
            }
        }
    }
}
