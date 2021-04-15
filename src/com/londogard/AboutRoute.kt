package com.londogard

import com.londogard.gui.HtmlTemplates.respondHtmlShell
import com.londogard.gui.wideCard
import io.ktor.application.call
import io.ktor.routing.Route
import io.ktor.routing.get
import kotlinx.html.*

fun Route.aboutRoute(): Route = get("/about") {
    call.respondHtmlShell("About") {
        h2 {
            style="text-align:center;"
            +"About Londogard"
        }
        p { +"At Londogard we find order in chaos by creating structures and understanding out of unstructured data. Our belief is that by creating understanding of data new possibilities open up and a lot of automation is possible where today manual tedious work is applied." }
        p {
            +"Our goal is to employ Machine Learning models that makes sense and provide value rather than being made to tick of a check-box. The aim is to provide "
            b { +"Efficient, Performant, Measurable & Understandable" }
            +" models."
        }

        ul {
            li {
                i { +"Efficient " }
                +"should truly run on a single small machine (the edge)"
            }
            li {
                i { +"Performant " }
                +"achieving very close to State-of-the-Art performance, striking a good balance of performance & efficiency."
            }
            li {
                i { +"Measurable " }
                +"in a way that makes sense for your personal use-case. Not some random metrics."
            }
            li {
                i { +"Understandable " }
                +"to the level where you understand why a prediction was made as it was."
            }
        }
        p { +"Through our blog & demos we try to show-case powerful models that all run on the same single Raspberry Pi 4 (4GB)" }
        p {
            +"Our GitHub: "
            a(href="https://github.com/londogard", target="_blank") { img(src="/github.svg", alt="GitHub") { height = "24" }  }
        }
        h2 {
            style="text-align:center;"
            +"People @ Londogard"
        }
        section {
            wideCard("Hampus Londögård", {
                p {
                    +"The main contributor, MsC Computer Science @ Lunds Tekniska Högskola working at AFRY & Londogard."
                    br {  }
                    +"In love with NLP, Functional Programming (especially types) & optimizations."
                }
                svgImage(href="https://www.linkedin.com/in/hampus-londögård-6177aa79", img = "/linkedin.svg", alt = "LinkedIn")
                svgImage(href="https://github.com/Lundez", img="/github.svg", alt="GitHub")
                svgImage(href="https://twitter.com/Lundesidri", img="/twitter.svg", alt="GitHub")
            }, image = "hampus")
            wideCard("Dennis Londögård", {
                p {
                    +"MsC Computer Science @ Lunds Tekniska Högskola working at AFRY & Londogard."
                    br {  }
                    +"Has a big interest in finance, working out and of course coding!"
                }

                svgImage(href="https://www.linkedin.com/in/dennis-londögård-43a26b15b", img="/linkedin.svg", "LinkedIn")
                svgImage(href="https://github.com/denkhan", img="/github.svg", alt="GitHub")
            }, image = "dennis")
        }
    }
}

fun FlowContent.svgImage(href: String, img: String, alt: String) = a(href=href, target="_blank") { img(src=img, alt=alt) {
    style="margin: 4px"
    height="24"
} }