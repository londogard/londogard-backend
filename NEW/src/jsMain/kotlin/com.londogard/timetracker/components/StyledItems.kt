package com.londogard.timetracker.components

import dev.fritz2.styling.params.BasicParams
import dev.fritz2.styling.params.Style
import kotlinx.coroutines.ExperimentalCoroutinesApi

@ExperimentalCoroutinesApi
object StyledItems {
    val buttonStyle: Style<BasicParams> = {
        margin { small }
    }
    val veryImportant: Style<BasicParams> = {
        boxShadow { raised }
        background { color { danger } }
        color { light }
        radius { "1.5rem" }
    }
}