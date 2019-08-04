package com.lundekhan

import com.fasterxml.jackson.annotation.JsonValue
import com.lundekhan.data.*

// TODO
//  method: "GET" or "UPDATE" or "DELETE"
enum class Method(@get: JsonValue val method: String) {
    GET("get"),
    DELETE("delete"),
    UPDATE("update"),
    CUSTOM("custom"),
    INSERT("insert")
}

data class IngredientPost(val method: Method, val ingredient: Ingredient.Impl)
data class GroceryPost(val method: Method, val grocery: Grocery.Impl)
data class RecipePost(val method: String, val recipe: Recipe.Impl)
data class ShoppingItemPost(val method: String, val shoppingItem: Shoppingitem.Impl)
data class ShoppingListPost(val method: String, val shoppingList: Shoppinglist.Impl)