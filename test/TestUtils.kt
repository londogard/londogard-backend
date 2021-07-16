package com.londogard

import com.londogard.auth.JwtConfig
import com.londogard.jwtauth.User
import io.ktor.http.ContentType
import io.ktor.http.HttpHeaders
import io.ktor.http.HttpMethod
import io.ktor.http.escapeIfNeeded
import io.ktor.locations.KtorExperimentalLocationsAPI
import io.ktor.server.testing.*
import io.ktor.util.*
import kotlinx.serialization.ExperimentalSerializationApi
import kotlinx.serialization.InternalSerializationApi

val testUser = """{"name":  "lunde", "password": "123abc"}"""
@InternalAPI
val testUserb64 = "lunde:123abc".encodeBase64()
val testUserTwo = """{"name":  "lunde", "password": "123"}"""

internal fun TestApplicationRequest.addJsonHeader(): Unit =
    addHeader(HttpHeaders.ContentType, ContentType.Application.Json.toString())

internal fun TestApplicationRequest.addJwtHeader(): Unit = addHeader("Authorization", "Bearer ${getToken()}")

internal fun getToken() = JwtConfig.makeToken(User(1, "lol"))

@InternalSerializationApi
@ExperimentalSerializationApi
@ExperimentalStdlibApi
@KtorExperimentalLocationsAPI
@KtorExperimentalAPI
@InternalAPI
internal fun withServer(block: TestApplicationEngine.() -> Unit) {
    withTestApplication({ module() }, block)
}

fun TestApplicationEngine.makeUserRequest(user: String = testUser): TestApplicationCall = handleRequest {
    method = HttpMethod.Post
    uri = "/user/create"
    addHeader(HttpHeaders.ContentType, ContentType.Application.Json.toString())
    setBody(user)
}

fun TestApplicationEngine.makeLoginRequest(user: String = testUser): TestApplicationCall = handleRequest {
    method = HttpMethod.Post
    uri = "/user/login"
    addHeader(HttpHeaders.ContentType, ContentType.Application.Json.toString())
    setBody(user)
}

@InternalAPI
val text = """Skip to content
Pull requests
Issues
Marketplace
Explore
@Lundez
Kotlin/kotlinx.serialization
Code
Issues 178
Pull requests 8
Projects 1
Security
Insights
kotlinx.serialization/docs/examples.md
@sandwwraith sandwwraith Update to 1.3.40 eap2; 6158c39 on Jun 13
@sandwwraith
@0xBADDCAFE
    © 2019 GitHub, Inc.
    Terms
    Privacy
    Security
    Status
    Help

    Contact GitHub
    Pricing
    API
    Training
    Blog
    About

""".trim().escapeIfNeeded().replace('\n', '\t')

val weddingCreate = """
{
	"contact": {
		"entries": [
			{
				"title": "Brudparet",
				"entries": [
					{
						"name": "Hampus & Lina",
						"telephone": "0733 673 179",
						"email": "hampus@londogard.com",
						"address": "Östen Undéns g 172 LGH 1003 (227 62 LUND)"
					}
				]
			},
			{
				"title": "Toastmasters",
				"entries": [
					{
						"name": "Amanda Gabrielson",
						"telephone": "070 216 96 12"
					},
					{
						"name": "Emma Gabrielson",
						"telephone": "076 805 04 61"
					},
					{
						"name": "Victor Fingal",
						"telephone": "076 271 78 06"
					}
				]
			}
		]
	},
	"information": {
		"content": "Bröllopet är precis, som ni kanske förstår i dessa tider, lite osäkert. Vi _hoppas och tror_ att båda lokalerna skall fungera.  \nKyrkan är dock inte hundra procent och vi kommer kontinuerligt hålla denna sida uppdaterad så se till att hålla er själva också uppdaterade kort innan bröllopet!\n\nMen en sak är säkert, en fantastisk kväll med underbart folk skall vi lösa!",
		"date": "Lördag den 16:e oktober",
		"timeline": [
			{
				"title": "Hagshult Kyrka",
				"time": "14:00",
				"description": "Vi ses på Hagshult Kyrka där bröllopet börjar 14:00! 💒"
			},
			{
				"title": "Hörle Herrgård",
				"time": "15:30",
				"description": "Efter bröllopet rör vi oss till Hörle Herrgård där det börjar med lite mingelmat och bubbel för att mingla runt! 🥂"
			},
			{
				"title": "Middag",
				"time": "18:00",
				"description": "För de med matklocka så serveras middagen runt 18:00. Förrätt & huvudrätt kommer ifrån Madame (Värnamo), efterrätt ifrån en gård & tårtan hemgjord!"
			},
			{
				"title": "Slut",
				"time": "01:00",
				"description": "Tyvärr så når festen sitt slut, precis som allt annat gott!"
			}
		]
	},
	"guests": [
		{
			"rsvps": [
				{
					"name": "Dennis Londögård"
				},
				{
					"name": "Theresa Olsson"
				}
			]
		},
		{
			"rsvps": [
				{
					"name": "Karina Londögård"
				},
				{
					"name": "+1"
				},
				{
					"name": "+1"
				}
			]
		},
		{
			"rsvps": [
				{
					"name": "Emma Gabrielson"
				},
				{
					"name": "+1"
				}
			]
		},
		{
			"rsvps": [
				{
					"name": "Jonas"
				},
				{
					"name": "Alexandra"
				}
			]
		},
		{
			"rsvps": [
				{
					"name": "Noah Londögård"
				}
			]
		},
		{
			"rsvps": [
				{
					"name": "Thomas Hansson"
				},
				{
					"name": "Ann-Louise Hansson"
				}
			]
		},
		{
			"rsvps": [
				{
					"name": "Anthon Hansson"
				}
			]
		},
		{
			"rsvps": [
				{
					"name": "Alex"
				},
				{
					"name": "Emelie"
				}
			]
		},
		{
			"rsvps": [
				{
					"name": "Isak Olsson"
				},
				{
					"name": "+1"
				}
			]
		},
		{
			"rsvps": [
				{
					"name": "Ragnhild Grundström"
				}
			]
		},
		{
			"rsvps": [
				{
					"name": "Gunnel Hansson"
				},
				{
					"name": "Olle Hansson"
				}
			]
		},
		{
			"rsvps": [
				{
					"name": "Mats Gabrielson"
				}
			]
		},
		{
			"rsvps": [
				{
					"name": "Anna-Karin Gabrielson"
				}
			]
		},
		{
			"rsvps": [
				{
					"name": "Per-Olof Simfors"
				}
			]
		},
		{
			"rsvps": [
				{
					"name": "Louise Rehnström"
				},
				{
					"name": "+1"
				}
			]
		},
		{
			"rsvps": [
				{
					"name": "Niklas Carlsson"
				},
				{
					"name": "Emma Larsson"
				}
			]
		},
		{
			"rsvps": [
				{
					"name": "Saga Dunehav"
				},
				{
					"name": "Anton Lechner"
				}
			]
		},
		{
			"rsvps": [
				{
					"name": "Magnus Sunesson"
				},
				{
					"name": "Matilda Billsten"
				}
			]
		},
		{
			"rsvps": [
				{
					"name": "Andreas Hagersten"
				},
				{
					"name": "Svandís Sæmundsdóttir"
				}
			]
		},
		{
			"rsvps": [
				{
					"name": "Martin Bergström"
				},
				{
					"name": "+1"
				}
			]
		},
		{
			"rsvps": [
				{
					"name": "Oscar Jönsson"
				},
				{
					"name": "Johanna Axeland"
				}
			]
		},
		{
			"rsvps": [
				{
					"name": "Ola Wendel"
				},
				{
					"name": "Viktoria-Luise Dewár"
				}
			]
		},
		{
			"rsvps": [
				{
					"name": "Adam Lövkvist"
				},
				{
					"name": "Jonna Wedberg"
				}
			]
		},
		{
			"rsvps": [
				{
					"name": "Carolina Licht"
				},
				{
					"name": "Gustav Claésson"
				}
			]
		},
		{
			"rsvps": [
				{
					"name": "Elma Ganibegovic"
				},
				{
					"name": "+1"
				}
			]
		},
		{
			"rsvps": [
				{
					"name": "Katarina Stolt"
				},
				{
					"name": "Per Green"
				}
			]
		},
		{
			"rsvps": [
				{
					"name": "Johanna Simfors"
				},
				{
					"name": "+1"
				}
			]
		},
		{
			"rsvps": [
				{
					"name": "Frida Simfors"
				},
				{
					"name": "+1"
				}
			]
		},
		{
			"rsvps": [
				{
					"name": "Daniel Simfors"
				},
				{
					"name": "+1"
				}
			]
		},
		{
			"rsvps": [
				{
					"name": "Anna Lind"
				},
				{
					"name": "Stefan Lind"
				},
				{
					"name": "Moa Lind"
				},
				{
					"name": "Elis Lind"
				},
				{
					"name": "Morris Lind"
				}
			]
		},
		{
			"rsvps": [
				{
					"name": "Tova Hansson"
				},
				{
					"name": "Rickard Frid"
				},
				{
					"name": "Klara Frid"
				}
			]
		},
		{
			"rsvps": [
				{
					"name": "Christer Simfors"
				},
				{
					"name": "Siw Lindsjö"
				}
			]
		}
	],
	"gift": {
		"title": "Tips på bröllopsgåvor",
		"description": "Vi vill trycka på att vi helst ser ekonomiskt stöd som bröllopspresent.",
		"gifts": [
			{
				"title": "Kosta Boda Ölglas (50cl)",
				"description": "Dricka öl i finglas är något alla behöver. 🍻",
				"img": "https://cervera.cdn.storm.io/c167c676-97d1-4928-b84e-a1f192c97029?width=600&height=600&mode=Max",
				"links": [
					"https://royaldesign.se/friendship-olglas-50-cl"
				],
				"checkable": true
			},
			{
				"title": "Kosta Boda Ölglas (50cl)",
				"description": "Dricka öl i finglas är något alla behöver. 🍻",
				"img": "https://cervera.cdn.storm.io/c167c676-97d1-4928-b84e-a1f192c97029?width=600&height=600&mode=Max",
				"links": [
					"https://royaldesign.se/friendship-olglas-50-cl"
				],
				"checkable": true
			},
			{
				"title": "Kosta Boda Line Gin & Tonic Glas",
				"description": "En GT avnjutes bäst i det rätta glaset! ",
				"img": "https://kostaboda.se/app/uploads/2020/01/7021596_Line-gin-tonic-1400x1090.jpg",
				"links": [
					"https://kostaboda.se/products/line-gin-tonic/"
				],
				"checkable": true
			},
			{
				"title": "Kosta Boda Line Gin & Tonic Glas",
				"description": "En GT avnjutes bäst i det rätta glaset! ",
				"img": "https://kostaboda.se/app/uploads/2020/01/7021596_Line-gin-tonic-1400x1090.jpg",
				"links": [
					"https://kostaboda.se/products/line-gin-tonic/"
				],
				"checkable": true
			},
			{
				"title": "Hjälp till bröllopet (pengar)",
				"description": "Det är dyrt med bröllop och vi hade uppskattat en gåva i form av ekonomiskt stöd av hela vårt hjärta. ❤️",
				"links": [],
				"checkable": false
			},
			{
				"title": "Hjälp till bröllopsresa (pengar)",
				"description": "Vi har tänkt och åka iväg på en underbar bröllopsresa och tycker det vore kul med lite ekonomiskt stöd för denna resa. ",
				"checkable": false
			}
		]
	}
}
""".trimIndent()