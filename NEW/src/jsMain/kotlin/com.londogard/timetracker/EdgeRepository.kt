package com.londogard.timetracker

import dev.fritz2.binding.RootStore
import dev.fritz2.remote.http
import dev.fritz2.repositories.rest.restEntity

class EdgeRepository : RootStore<String>("") {
    val a = http("https://londogard.com:8443/colorkidz/api")
    val b = a.
    //private val rest = restEntity("", "https://londogard.com:8443/colorkidz/api")
//
    //val load = handle<String> { person, id ->
    //    rest.load(person, id)
    //}
//
    //val saveOrUpdate = handle { rest.saveOrUpdate(it) }
//
    //val delete = handle { rest.delete(it) }
//
    //init {
    //    syncBy(saveOrUpdate)
    //}
}