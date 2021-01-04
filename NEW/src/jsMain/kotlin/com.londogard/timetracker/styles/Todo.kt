package com.londogard.timetracker.styles

import dev.fritz2.styling.params.BasicParams
import dev.fritz2.styling.params.Style
import kotlinx.coroutines.ExperimentalCoroutinesApi

@ExperimentalCoroutinesApi
object Todo {
    val todoInput: Style<BasicParams> = {
        border { style { none } }
    }
}