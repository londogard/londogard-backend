package com.lundekhan

import com.fasterxml.jackson.module.kotlin.jacksonObjectMapper
import com.fasterxml.jackson.module.kotlin.readValue
import com.londogard.summarize.summarizers.TfIdfSummarizer
import com.londogard.textgen.GenerationLevel
import com.londogard.textgen.LanguageModel
import com.londogard.textgen.LanguageModelImpl
import com.londogard.textgen.PretrainedModels
import com.lundekhan.billsplitter.PersonPayment
import com.squareup.sqldelight.Transacter
import com.squareup.sqldelight.db.SqlDriver
import com.squareup.sqldelight.sqlite.driver.JdbcSqliteDriver
import io.ktor.http.*
import io.ktor.locations.KtorExperimentalLocationsAPI
import io.ktor.server.testing.handleRequest
import io.ktor.server.testing.setBody
import io.ktor.server.testing.withTestApplication
import io.ktor.util.InternalAPI
import io.ktor.util.KtorExperimentalAPI
import kotlinx.serialization.ImplicitReflectionSerializer
import org.junit.Before
import org.koin.core.context.loadKoinModules
import org.koin.dsl.module
import org.koin.ktor.ext.inject
import kotlin.test.BeforeTest
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

@KtorExperimentalAPI
@ImplicitReflectionSerializer
@KtorExperimentalLocationsAPI
@InternalAPI
class ApplicationTest {
    private val testUser = """{"name":  "lunde", "password": "123abc"}"""
    private val testUserTwo = """{"name":  "lunde", "password": "123"}"""

    @BeforeTest
    fun cleanup() {
        withTestApplication ({ module() }){
            this.application.inject<Database>().value.utilsQueries.dropAll()
        }
    }

    @Test
    fun testRoot() {
        withTestApplication({ module() }) {
            handleRequest(HttpMethod.Get, "/").apply {
                assertEquals(HttpStatusCode.OK, response.status())
            }
        }
    }

    @Test
    fun testJwtAuth() {
        withTestApplication({ module() }) {
            handleRequest(HttpMethod.Post, "/createuser") {
                addHeader(HttpHeaders.ContentType, ContentType.Application.Json.toString())
                setBody(testUser)
            }.apply {
                assertEquals(HttpStatusCode.Created, response.status())
                assertTrue(response.content != null)

                val responseJson = jacksonObjectMapper().readValue<ResultResponse>(response.content!!)
                assertEquals(ResultResponse("User created"), responseJson)
            }
            handleRequest(HttpMethod.Post, "/login") {
                addHeader(HttpHeaders.ContentType, ContentType.Application.Json.toString())
                setBody(testUser)
            }.apply {
                assertEquals(HttpStatusCode.OK, response.status())
                assertTrue(response.content != null)

                val responseJson = jacksonObjectMapper().readValue<ResultResponse>(response.content!!)
                assertTrue(responseJson.result.isNotEmpty())
            }
            handleRequest(HttpMethod.Post, "/login") {
                addHeader(HttpHeaders.ContentType, ContentType.Application.Json.toString())
                setBody(testUserTwo)
            }.apply {
                assertEquals(HttpStatusCode.Unauthorized, response.status())
                assertTrue(response.content != null)

                val responseJson = jacksonObjectMapper().readValue<ResultResponse>(response.content!!)
                assertTrue(responseJson.result.isNotEmpty())
            }
            handleRequest(HttpMethod.Post, "/createuser") {
                addHeader(HttpHeaders.ContentType, ContentType.Application.Json.toString())
                setBody(testUser)
            }.apply {
                assertEquals(HttpStatusCode.BadRequest, response.status())
            }
            // handleRequest(HttpMethod.Get, "/secret") {
            //     addHeader(HttpHeaders.ContentType, ContentType.Application.Json.toString())
            //     addHeader(HttpHeaders.Authorization, )
            // }.apply {
            //     assertEquals(HttpStatusCode.OK, response.status())
            // }
        }
    }

    @Test
    fun testBillSplit() {
        withTestApplication({ module() }) {
            handleRequest(HttpMethod.Post, "/billsplit") {
                addHeader(HttpHeaders.ContentType, ContentType.Application.Json.toString())
                setBody(
                    """
                    {"payments": [
                    {"person": "hampus", "amount":  100},
                    {"person": "dennis", "amount":  50},
                    {"person": "noah", "amount":  0}
                    ]
                    }
                """.trimIndent()
                )
            }.apply {
                assertEquals(HttpStatusCode.OK, response.status())
                val correctResponse = jacksonObjectMapper()
                    .readValue<List<PersonPayment>>(response.byteContent!!)
                    .any { it.amount == 50.0 && it.payer == "noah" && it.owed == "hampus" }

                assertTrue(correctResponse)
            }
        }
    }

    @Test
    fun testSummarizer() {
        withTestApplication({ module() }) {
            assert(handleRequest(HttpMethod.Get, "/smry/ui").response.status() == HttpStatusCode.OK)
            handleRequest(HttpMethod.Post, "/smry") {
                addHeader(HttpHeaders.ContentType, ContentType.Application.Json.toString())
                println("""{"text":${getText()}}""".substring(0, 10))
                val text = getText()
                val body = """{"text": $text}"""
                println(body)
                setBody(body)
            }.apply {
                assertEquals(HttpStatusCode.OK, response.status())
                val correctResponse = jacksonObjectMapper()
                    .readValue<ResultResponse>(response.byteContent!!).result.length < getText().length
                assert(correctResponse)
            }
        }
    }

}

@InternalAPI
fun getText(): String = """Skip to content
Pull requests
Issues
Marketplace
Explore
@Lundez

86
1.6k

    131

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
@elizarov
@BenWoodworth
318 lines (235 sloc) 11.2 KB
Serialization documentation and example cases

Note: Cases are presented here as a series of unit-tests using non-standard unquoted JSON for ease of presentation. It was created as val json = Json(JsonConfiguration.Stable.copy(unquoted = true)). Standards-compliant JSON is supported, too. Just use .Stable or .Default configurations or create your own.
Supported properties

    Class constructor val and var properties. It is required for constructor to have only properties (no parameters).

    @Serializable
    data class Data(val a: Int, val b: Int)
    val data = Data(1, 2)

    // Serialize with internal serializer for Data class
    assertEquals("{a:1,b:2}", json.stringify(Data.serializer(), data))
    assertEquals(data, Json.parse(Data.serializer(), "{a:1,b:2}"))

    // Serialize with external serializer for Data class
    @Serializer(forClass=Data::class)
    object ExtDataSerializer
    assertEquals("{a:1,b:2}", json.stringify(ExtDataSerializer, data))
    assertEquals(data, Json.parse(ExtDataSerializer, "{a:1,b:2}"))

    In case of usage of internal serialization (@Serializable annotation on class), both body vals and vars are supported with any visibility levels.

    @Serializable
    class Data(val a: Int) {
        private val b: String = "42"

        override fun equals(other: Any?) = /*...*/
    }

    assertEquals("{a:1, b:42}", json.stringify(Data.serializer(), Data(1)))
    assertEquals(Data(1), json.parse(Data.serializer(), "{a:1, b:42}"))

    Property will be considered optional if it has default value (kotlin 1.3.30 or higher is required).

    @Serializable
    data class Data(val a: Int, val b: Int = 42)

    // Serialization and deserialization with internal serializer
    assertEquals("{a:0,b:42}",json.stringify(Data.serializer(), Data(0)))
    assertEquals(json.parse(Data.serializer(), "{a:0,b:43}"),Data(0, b = 43))
    assertEquals(json.parse(Data.serializer(), "{a:0,b:42}"),Data(0))
    assertEquals(json.parse(Data.serializer(), "{a:0}"),Data(0))

    // This will throw SerializationException, because 'a' is missing.
    json.parse(Data.serializer(), "{b:0}")

        Tip: you can omit default values during serialization with Json(encodeDefaults = false) (see here).

        Tip: Deprecated @Optional annotation was used in older version and older kotlin version.

    By default, only properties which have backing fields will be serialized and restored back.

    @Serializable
    data class Data(val a: Int) {
        private val b: String
            get() = "42"
    }

    // b is not in serialized form!
    assertEquals("{a:1}", json.stringify(Data.serializer(), Data(1)))

    You should be careful with this, especially when you have hierarchy of serializable classes with several overrides.

    Moreover, if you have several properties with the same name and different backing fields (e.g. open/override pair), a compiler exception will be thrown. To resolve such conflicts, use @SerialName (see below).

    Important note: In this case, body properties initializers and setters are not called. So, following approach would not work:

    @Serializable
    class Data(val a: String = "42") {
        val b: String = computeWithSideEffects()

        private fun computeWithSideEffects(): String {
            println("I'm a side effect")
            return "b"
        }
    }

    // prints nothing.
    val data = json.parse(Data.serializer(), "{a: 100500, b: 10}")

    Initializers are called iff (if and only if) property is @Transient or optional and was not read (see below).

    @Serializable
    class Data(val a: String = "42") {
        val b: String = computeWithSideEffects()

        private fun computeWithSideEffects(): String {
            println("I'm a side effect")
            return "b"
        }
    }

    // prints "I'm a side effect" once.
    val data = json.parse(Data.serializer(), "{a: 100500, b: 10}")
    val data = json.parse(Data.serializer(), "{a: 100500}")

    Common pattern: Validation.

    Such classes are not serializable, because they have constructor parameters which are not properties:

    class Data(_a: Int) {
        val a: Int = if ( _a >= 0) _a else throw IllegalArgumentException()
    }

    They can be easily refactored to be used with init blocks. init blocks in internal deserialization, unlike initialization expressions, are always executed after all variables have been set.

    @Serializable
    class Data(val a: Int) {
        init {
            check(a >= 0)
        }
    }

    External deserialization (annotation @Serializer(forClass=...)) has more limitations: it supports only primary constructor's vals/vars and class body var properties with visibility higher than protected. Body val properties and all private properties are unseen for external serializer/deserializer. It also invokes all setters on body vars and all initialization expressions with init blocks.

    It isn't supported yet in JavaScript.

    class Data {
        var a = 0
        var b = 0
        val unseen = 42
        override fun equals(other: Any?) = /*..*/
    }

    val data = Data().apply {
        a = 1
        b = 2
    }

    // Serialize with external serializer for Data class
    @Serializer(forClass=Data::class)
    object ExtDataSerializer

    assertEquals("{a:1,b:2}", json.stringify(ExtDataSerializer, data))
    assertEquals(data, Json.parse(ExtDataSerializer, "{a:1,b:2}"))

    Having both @Serialiable class A and @Serializer(forClass=A::class) is possible. In this case, object marked as serializer will try to deserialize class A internally, and some strange effects may happen. But it's not exactly.

Annotations

    @SerialName annotation for overriding property name with custom name in formats with name support, like JSON.

    @Serializable
    data class Names(
            @SerialName("value1")
            val custom1: String,
            @SerialName("value2")
            val custom2: Int
    )

    assertEquals("{value1: a, value2: 42}", json.stringify(Names.serializer(), Names("a", 42)))

        Starting from 0.6, @SerialName can be used on classes, too.

    @Required annotation for supported properties. It makes property with default value still be mandatory and always present in serialized form.

    @Serializable
    class Data(@Required val a: Int = 0, val b: Int = 42) {
       var c = "Hello"

       override fun equals(other: Any?) = /*...*/
    }

    // Serialization and deserialization with internal serializer
    // External serializer also supported
    assertEquals("{a:0,b:42,c:Hello}",json.stringify(Data.serializer(), Data()))
    assertEquals(json.parse(Data.serializer(), "{a:0,b:43,c:Hello}"), Data(b = 43))
    assertEquals(json.parse(Data.serializer(), "{a:0,b:42,c:Hello}"), Data())
    assertEquals(json.parse(Data.serializer(), "{a:0,c:Hello}"), Data())
    assertEquals(json.parse(Data.serializer(), "{a:0}"), Data())

    // This will throw SerializationException, because 'a' is missing.
    json.parse(Data.serializer(), "{b:0}")

    @Transient annotation for supported properties. This annotation excludes marked properties from process of serialization or deserialization. Requires default value. Don't confuse with kotlin.jvm.Transient!

    @Serializable
    class Data(val a: Int = 0, @Transient val b: Int = 42) {
        var c = "Hello"

        @Transient
        var d = "World"

        override fun equals(other: Any?) = /*...*/
    }

    // Serialization and deserialization with internal serializer
    // External serializer also supported
    assertEquals("{a:0,c:Hello}",json.stringify(Data.serializer(), Data()))
    assertEquals(json.parse(Data.serializer(), "{a:0,c:Hello}"), Data())
    assertEquals(json.parse(Data.serializer(), "{a:0}"), Data())


    // This will throw SerializationException, because
    // property 'b' is unknown to deserializer.
    json.parse(Data.serializer(), "{a:0,b:100500,c:Hello}")

    Initializing @Transient or optional fields in init blocks is not supported.

    // This class is not serializable.
    class Data(val a: String = "42") {
        val b: String

        init {
            b = "b"
        }
    }

    Delegates are not supported and they're by default @Transient (since they do not have backing field), so this example works fine:

    @Serializable
    data class WithDelegates(val myMap: Map<String, String>) {

        // implicit @Transient
        val prop by myMap
    }

    assertEquals("value", json.parse(WithDelegates.serializer(), "{myMap:{prop:value}}").prop)

Nesting

    Nested values are recursively serialized, enums, primitive types, arrays, lists and maps are supported, plus other serializable classes.

    // Enums are implicitly @Serializable
    enum class TintEnum { LIGHT, DARK }

    @Serializable
    data class Data(
            val a: String,
            val b: List<Int>,
            val c: Map<String, TintEnum>
    )
    val data = Data("Str", listOf(1, 2), mapOf("lt" to TintEnum.LIGHT, "dk" to TintEnum.DARK))

    // Serialize with internal serializer for Data class
    assertEquals("{a:Str,b:[1,2],c:{lt:LIGHT,dk:DARK}}", json.stringify(Data.serializer(), data))
    assertEquals(data, Json.parse("{a:Str,b:[1,2],c:{lt:LIGHT,dk:DARK}}"))

    // Serialize with external serializer for Data class
    @Serializer(forClass=Data::class)
    object ExtDataSerializer
    assertEquals("{a:Str,b:[1,2],c:{lt:LIGHT,dk:DARK}}", json.stringify(ExtDataSerializer, data))
    assertEquals(data, Json.parse(ExtDataSerializer, "{a:Str,b:[1,2],c:{lt:LIGHT,dk:DARK}}"))

    To obtain serializers for root-level collections, you can use extension functions defined on serializers, like .list (see this issue)

User-defined serial annotations

In some cases, one may like to save additional format-specific information in the object itself. For example, protobuf field id. For this purpose, you can define your own annotation class and annotate it with @SerialInfo:

@SerialInfo
@Target(AnnotationTarget.PROPERTY)
annotation class ProtoId(val id: Int)

@Serializable
data class MyData(@ProtoId(2) val a: Int, @ProtoId(1) val b: String)

Note that it has to be explicitly targeted to property.

Inside a process of serialization/deserialization, they are available in KSerialClassDesc object:

override fun encodeElement(desc: SerialDescriptor, index: Int): Boolean {
            val id = desc.getElementAnnotations(index).filterIsInstance<ProtoId>().single().id
            ...
}

You can apply any number of annotations with any number of arguments. Limitations: @SerialInfo annotation class properties must have one of the following types: primitive, String, enum, or primitive array (IntArray, BooleanArray, etc)

    Starting from 0.6, @SerialInfo-marked annotations can be used on classes, too. Use .getEntityAnnotations() method of SerialDescriptor to obtain them.

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