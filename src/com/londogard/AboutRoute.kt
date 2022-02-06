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
            style = "text-align:center;"
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
            a(href = "https://github.com/londogard", target = "_blank") {
                img(
                    src = "/github.svg",
                    alt = "GitHub"
                ) { height = "24" }
            }
            br {  }
            +"Email us @ "
            a(href = "mailto:dev@londogard.com") { +"dev@londogard.com" }
        }
        h2 {
            style = "text-align:center;"
            +"People @ Londogard"
        }

        section {
            defineSvgShapes()
            blobCard("Hampus Londögård", {
                p {
                    +"The main contributor, MsC Computer Science @ Lunds Tekniska Högskola working at AFRY & Londogard."
                    br { }
                    +"In love with NLP, Functional Programming (especially types) & optimizations."
                }
                svgImage(
                    href = "https://www.linkedin.com/in/hampus-londögård-6177aa79",
                    img = "/linkedin.svg",
                    alt = "LinkedIn"
                )
                svgImage(href = "https://github.com/Lundez", img = "/github.svg", alt = "GitHub")
                svgImage(href = "https://twitter.com/Lundesidri", img = "/twitter.svg", alt = "GitHub")
            }, image = "hampus", "clipTwo")
            blobCard("Dennis Londögård", {
                p {
                    +"MsC Computer Science @ Lunds Tekniska Högskola working at AFRY & Londogard."
                    br { }
                    +"Has a big interest in finance, working out and of course coding!"
                }

                svgImage(
                    href = "https://www.linkedin.com/in/dennis-londögård-43a26b15b",
                    img = "/linkedin.svg",
                    "LinkedIn"
                )
                svgImage(href = "https://github.com/denkhan", img = "/github.svg", alt = "GitHub")
            }, image = "dennis", "clipOne")
        }
    }
}

fun HTMLTag.defineSvgShapes() = unsafe {
    raw(
        """
        <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <clipPath id="clipOne">
<path fill="#FF0066" d="M49.5,-65.4C58.2,-51.8,55.1,-30.5,54.2,-12.9C53.4,4.7,54.7,18.5,49.1,28.6C43.6,38.6,31.1,44.8,17.6,50.9C4.1,57,-10.5,62.8,-22.5,59.5C-34.5,56.1,-44.1,43.5,-53.7,29.7C-63.3,15.8,-73,0.6,-73.4,-15.7C-73.8,-32,-65,-49.4,-51.2,-62.2C-37.4,-75,-18.7,-83.1,0.9,-84.1C20.4,-85.2,40.9,-79.1,49.5,-65.4Z" transform="translate(100 100)"
      </clipPath>
    </defs>
  </svg>
  <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <clipPath id="clipTwo">
<path fill="#FF0066" d="M31.2,-40.8C43.2,-27,57.8,-19.9,63.5,-8.2C69.1,3.5,65.7,19.7,58.4,34.9C51,50.1,39.8,64.3,24.6,71.7C9.3,79.1,-10,79.7,-22.7,71.3C-35.5,62.8,-41.8,45.3,-46.7,30.2C-51.6,15,-55.2,2.3,-56.1,-12.9C-57,-28.1,-55.2,-45.8,-45.4,-60C-35.6,-74.2,-17.8,-84.9,-4.1,-80C9.5,-75.1,19.1,-54.6,31.2,-40.8Z" transform="translate(100 100)" />
      </clipPath>
    </defs>
  </svg>
    """.trimIndent()
    )
}

fun FlowContent.blobCard(
    title: String, body: DIV.() -> Unit, image: String, clip: String
): Unit = aside {
    style = "width:var(--width-card-wide);display:flex;flex-wrap:wrap;"

    img(src = image) {
        width = "200px"
        style = "object-fit: contain; clip-path: url(#$clip);"
    }
    div {
        style = "margin-left:16px;width:50%;"
        h3 { +title }
        body()
    }
}

fun FlowContent.svgImage(href: String, img: String, alt: String) = a(href = href, target = "_blank") {
    img(src = img, alt = alt) {
        style = "margin: 4px"
        height = "24"
    }
}