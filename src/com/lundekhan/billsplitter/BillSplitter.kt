package com.lundekhan.billsplitter

import kotlin.math.min

data class PersonPayment(val payer: String, val owed: String, val amount: Double)

fun MutableMap<String, Double>.addOrPut(key: String, value: Double) {
    this[key] = this.getOrDefault(key, 0.0) + value
}

object a {
    @JvmStatic
    fun main(args: Array<String>) {
        println(
            splitBills(listOf("hampus" to 50.0, "thomas" to 50.0, "isak" to 0.0, "dennis" to 25.0, "hans" to 100.0))
        )
    }
}

fun splitBills(personAmounts: List<Pair<String, Double>>): List<PersonPayment> {
    val mutableMap = mutableMapOf<String, Double>()
    personAmounts.forEach { (person, amount) -> mutableMap.addOrPut(person, amount) }

    val avg = mutableMap.values.average()
    val (owed, owing) = mutableMap
        .mapValues { it.value - avg }.toList()
        .sortedBy { -it.second }
        .partition { (_, amount) -> amount > 0 }
    val mutableOwing = owing.reversed().toMutableList()

    return owed.fold(listOf()) { acc, (person, amount) ->
        var leftToPay = amount
        val payments = mutableListOf<PersonPayment>()
        while (leftToPay > 0) {
            val payment = makePayment(leftToPay, person, mutableOwing)
            leftToPay -= payment.amount
            payments.add(payment)
        }
        acc + payments
    }
}

fun makePayment(leftToPay: Double, name: String, mutableOwing: MutableList<Pair<String, Double>>): PersonPayment {
    val (payer, cash) = mutableOwing.first()
    val amountPaid = min(leftToPay, -cash)

    if (-cash <= leftToPay) mutableOwing.removeAt(0)
    else mutableOwing[0] = Pair(payer, cash + amountPaid)

    return PersonPayment(payer, name, amountPaid)
}