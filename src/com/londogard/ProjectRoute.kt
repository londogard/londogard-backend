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
            style="display:flex;"
            div {
                p {
                    b { +"Quick Links" }
                    ul {
                        li { a(href = "projects/safe-cosmetics") { +"Cosmetics Checker" } }
                        li { a(href = "https://colorkidz.londogard.com") { +"ColorKidz" } }
                        li { a(href = "projects/smry") { +"Summarizer" }}
                    }
                    details {
                        summary { +"Other Projects" }
                        small {
                            ul {
                                li { a(href = "projects/ner") { +"SweNER" } }
                                li { a(href = "https://huggingface.co/lunde/gpt2-snapsvisor") { +"Snapsvisegenerator (GPT-2)" } }
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
                wideCard("SweNER", {
                    p {
                        i { +"A "; b { +"State-of-the-Art" }; +" Named Entity Recognizer for Swedish" }
                        br { }
                        +"Developed to strike a balance between performance, efficiency & usability there exists two models of different architectures."
                        br { }
                        +"The models are quantized (1/4th size & 4x faster)."
                    }
                    a(href = "projects/ner") { +"Test SweNER" }
                }, image = "swener.jpg")
                wideCard("ColorKidz", {
                    p {
                        i { +"Convert your images into colouring pages" }
                        br { }
                        +"Our only Progressive Web App (PWA) this far. ColorKidz turns your photo into a colouring page using an algorithmic approach. "
                    }
                    a(href = "https://colorkidz.londogard.com") { +"Test ColorKidz" }
                }, image = "colorkidz.jpg")
                wideCard("Summarizer", {
                    p {
                        i { +"A "; b { +"State-of-the-Art" }; +" language-independent extractive summarizer." }
                        br { }
                        +"Built a very powerful yet simple summarizer that uses pure statistics, no large neural networks or anything. It does "
                        i { +"extractive summarization" }
                        +" and it's only the TfIdf-variant is language independent."
                    }
                    a(href = "projects/smry") { +"Test Summarizer" }
                })
                wideCard("Fuzzy Search", {
                    p {
                        +"A drop-in utility object which takes a list of items and allows you to fuzzy search these items."
                        br { }
                        +"My hope is that this can help all people who are setting up either a small internal/hobby project to have a little bit better search. :)"
                    }
                    a(href = "projects/fuzsearch") { +"Test Fuzzy Search" }
                })
                wideCard("Text Generation", {
                    p {
                        +"A "; i { +"char-2-char" }; +" text generator (pure statistics) which includes some very cool work-arounds to actually run on a small embedded device."
                        br { }
                        +"The Text Generation itself is pretty underwhelming, but the internals are really cool."
                        br { }
                        +"Currently able to generate Shakespeare & 'Cards Against Humanity'."
                    }
                    a(href = "projects/textgen") { +"Test Text Generation" }
                })

                wideCard("Mini/Fun Projects", {
                    p {
                        b { a(href = "projects/url") { +"URL Shortener" } }
                        br { }
                        +"Need to shorten your urls? Then this tool might be handy!"
                    }
                    p {
                        b { a(href = "projects/billsplit") { +"Billsplitter" } }
                        br { }
                        +"A very simple billsplitter which is great when you need to split the bills with your buddies."
                    }
                    p {
                        b { a(href = "projects/stokk") { +"Stokk" } }
                        br { }
                        +"A very simple stokk calculator for all your calculations."
                    }
                })
            }
        }
    }
}
