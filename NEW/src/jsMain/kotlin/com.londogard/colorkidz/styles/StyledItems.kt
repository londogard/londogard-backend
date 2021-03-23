package com.londogard.colorkidz.styles

import dev.fritz2.styling.params.*
import kotlinx.coroutines.ExperimentalCoroutinesApi

@ExperimentalCoroutinesApi
object StyledItems {
    val smallMargin: Style<BasicParams> = {
        margins {
            left { auto }
            right { auto }
            top { small }
        }
    }
    val floatingCard: Style<FlexParams> = {
            margin { normal }
            padding { normal }
            boxShadow { raised }
            radius { "1.5rem" }
            justifyContent { JustifyContentValues.center }
            direction { DirectionValues.column }
    }
}