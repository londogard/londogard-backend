package com.londogard.timetracker.components

import com.londogard.timetracker.styles.Todo
import dev.fritz2.binding.Store
import dev.fritz2.components.*
import dev.fritz2.dom.html.RenderContext
import dev.fritz2.dom.states
import dev.fritz2.styling.style
import kotlinx.coroutines.ExperimentalCoroutinesApi

@ExperimentalCoroutinesApi
data class TodoItem(val completed: Store<Boolean>, val text: String? = null) {
    fun render(context: RenderContext) =
        context.flexBox {
            checkbox {
                checked { completed.data }
                events {
                    changes.states() handledBy completed.update
                }
            }
            inputField(Todo.todoInput) {
                base {
                    // changes.values() handledBy user.update
                    if (text != null) value(text)
                    else placeholder("Fix the garden")
                }
            }
        }
}