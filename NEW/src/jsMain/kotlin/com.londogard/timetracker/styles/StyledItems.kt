package com.londogard.timetracker.styles

import dev.fritz2.styling.params.BasicParams
import dev.fritz2.styling.params.Style
import kotlinx.coroutines.ExperimentalCoroutinesApi

@ExperimentalCoroutinesApi
object StyledItems {
    val smallMargin: Style<BasicParams> = {
        margin { small }
    }
    val smallTopMargin: Style<BasicParams> = {
        margins {
            top { small }
        }
    }
}