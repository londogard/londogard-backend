package com.lundekhan.blog

import io.ktor.client.call.*
import io.ktor.client.features.json.*
import io.ktor.http.*
import io.ktor.http.content.*
import io.ktor.utils.io.core.*
import kotlinx.serialization.InternalSerializationApi
import kotlinx.serialization.KSerializer
import kotlinx.serialization.Serializable
import kotlinx.serialization.serializer
import nl.adaptivity.xmlutil.serialization.XML

@InternalSerializationApi
class XMLSerializer(private val format: XML = XML()) : JsonSerializer {

    override fun read(type: TypeInfo, body: Input): Any {
        val text = body.readText()
        val deserializationStrategy = format.serializersModule.serializer(type.kotlinType!!)

        return format.decodeFromString(deserializationStrategy, text) ?: error("Failed to parse response of type $type. The result is null.")
    }

    override fun write(data: Any, contentType: ContentType): OutgoingContent {
        val serializer = data::class.serializer() as KSerializer<Any>
        val text = format.stringify(serializer, data, null)
        return TextContent(text, contentType)
    }
}