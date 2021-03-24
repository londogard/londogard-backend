package com.londogard

import com.londogard.gui.HtmlTemplates.respondHtmlShell
import com.londogard.gui.wideCard
import io.ktor.application.call
import io.ktor.routing.Route
import io.ktor.routing.get
import kotlinx.html.*

fun A.linkedInLogo(): Unit = unsafe { raw("""
    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" class="global-nav__logo">
                <title>
                LinkedIn
                </title>
                <g>
                <path d="M34,2.5v29A2.5,2.5,0,0,1,31.5,34H2.5A2.5,2.5,0,0,1,0,31.5V2.5A2.5,2.5,0,0,1,2.5,0h29A2.5,2.5,0,0,1,34,2.5ZM10,13H5V29h5Zm.45-5.5A2.88,2.88,0,0,0,7.59,4.6H7.5a2.9,2.9,0,0,0,0,5.8h0a2.88,2.88,0,0,0,2.95-2.81ZM29,19.28c0-4.81-3.06-6.68-6.1-6.68a5.7,5.7,0,0,0-5.06,2.58H17.7V13H13V29h5V20.49a3.32,3.32,0,0,1,3-3.58h.19c1.59,0,2.77,1,2.77,3.52V29h5Z" fill="currentColor"></path>
                </g>
                </svg>
""".trimIndent()) }

fun A.twitterLogo(): Unit = unsafe { raw("""
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="34" height="34" viewBox="0 0 266 209" version="1.1" preserveAspectRatio="xMidYMid">
        <title>
                Twitter
        </title>
        <g>
            <path d="M256,25.4500259 C246.580841,29.6272672 236.458451,32.4504868 225.834156,33.7202333 C236.678503,27.2198053 245.00583,16.9269929 248.927437,4.66307685 C238.779765,10.6812633 227.539325,15.0523376 215.57599,17.408298 C205.994835,7.2006971 192.34506,0.822 177.239197,0.822 C148.232605,0.822 124.716076,24.3375931 124.716076,53.3423116 C124.716076,57.4586875 125.181462,61.4673784 126.076652,65.3112644 C82.4258385,63.1210453 43.7257252,42.211429 17.821398,10.4359288 C13.3005011,18.1929938 10.710443,27.2151234 10.710443,36.8402889 C10.710443,55.061526 19.9835254,71.1374907 34.0762135,80.5557137 C25.4660961,80.2832239 17.3681846,77.9207088 10.2862577,73.9869292 C10.2825122,74.2060448 10.2825122,74.4260967 10.2825122,74.647085 C10.2825122,100.094453 28.3867003,121.322443 52.413563,126.14673 C48.0059695,127.347184 43.3661509,127.988612 38.5755734,127.988612 C35.1914554,127.988612 31.9009766,127.659938 28.694773,127.046602 C35.3777973,147.913145 54.7742053,163.097665 77.7569918,163.52185 C59.7820257,177.607983 37.1354036,186.004604 12.5289147,186.004604 C8.28987161,186.004604 4.10888474,185.75646 0,185.271409 C23.2431033,200.173139 50.8507261,208.867532 80.5109185,208.867532 C177.116529,208.867532 229.943977,128.836982 229.943977,59.4326002 C229.943977,57.1552968 229.893412,54.8901664 229.792282,52.6381454 C240.053257,45.2331635 248.958338,35.9825545 256,25.4500259" fill="#55acee"/>
        </g>
    </svg>
""".trimIndent()) }

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
            a(href="https://github.com/londogard", target="_blank") { img(src="https://github.githubassets.com/favicons/favicon.png", alt="GitHub") }
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
                a(href="https://www.linkedin.com/in/hampus-londögård-6177aa79", target="_blank") { linkedInLogo() }
                a(href="https://github.com/Lundez", target="_blank") { img(src="https://github.githubassets.com/favicons/favicon.png", alt="GitHub") }
                a(href="https://twitter.com/Lundesidri", target="_blank") { twitterLogo() }
            }, image = "hampus")
            wideCard("Dennis Londögård", {
                p {
                    +"MsC Computer Science @ Lunds Tekniska Högskola working at AFRY & Londogard."
                    br {  }
                    +"Has a big interest in finance, working out and of course coding!"
                }

                a(href="https://www.linkedin.com/in/dennis-londögård-43a26b15b", target="_blank") { linkedInLogo() }
                a(href="https://github.com/denkhan", target="_blank") { img(src="https://github.githubassets.com/favicons/favicon.png", alt="GitHub") }
            }, image = "dennis")
        }
    }
}