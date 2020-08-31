package com.lundekhan.blog

import com.lundekhan.Database
import io.ktor.routing.*
import org.intellij.markdown.flavours.gfm.GFMFlavourDescriptor
import org.intellij.markdown.parser.MarkdownParser
import org.koin.ktor.ext.inject

fun Route.tilRoute(): Route = route("/til") {
    val db by inject<Database>()
    val flavor = GFMFlavourDescriptor()
    val parser = MarkdownParser(flavor)


}