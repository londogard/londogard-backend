package com.lundekhan.stokk

import kotlin.math.pow

object StokkHelper {
    const val month: Double = 1.0 / 12
    fun compoundInterest(years: Int, startAmount: Double, interest: Double, monthlyDeposit: Int): Double =
        (0 until years*12).fold(startAmount) { acc, _ -> (acc + monthlyDeposit) * interest.pow(month) }

    //TODO create a graph using this method
    @ExperimentalStdlibApi
    fun compoundInterestMonthByMonth(years: Int, startAmount: Double, interest: Double, monthlyDeposit: Int): List<Double> {
        val s = (0 until years*12).scan(startAmount) { acc, _ -> (acc + monthlyDeposit) * interest.pow(month) }
        println(s)
        return s
    }

    // Return amount of months you can withdraw X amount of money each month
    fun amountOfMonthsWithdrawal(startAmount: Double = 0.0, interest: Double = 1.0, monthlyWithdrawal: Int = 0): Int {
        var month = 0
        var amount = startAmount
        while(amount > 0){
            amount -= monthlyWithdrawal.toDouble()
            amount = amount * interest.pow(month)
            month += 1
        }
        return month
    }
}