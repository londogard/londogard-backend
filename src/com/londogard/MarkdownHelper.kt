package com.londogard

import org.intellij.markdown.flavours.gfm.GFMFlavourDescriptor
import org.intellij.markdown.html.HtmlGenerator
import org.intellij.markdown.parser.MarkdownParser

object MarkdownHelper {
    private val flavour = GFMFlavourDescriptor()
    private val parser = MarkdownParser(flavour)

    fun markdownToHtml(markdownText: String): String {
        val parsedTree = parser.buildMarkdownTreeFromString(markdownText)
        return HtmlGenerator(markdownText, parsedTree, flavour, false).generateHtml()
    }
}