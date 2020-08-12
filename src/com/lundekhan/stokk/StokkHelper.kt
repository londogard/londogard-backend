package com.lundekhan.stokk

import kotlin.math.pow

object StokkHelper {
    fun compoundInterest(years: Int, startAmount: Double, interest: Double, monthlyDeposit: Int): Double =
        (0 until years*12).fold(startAmount) { acc, _ -> (acc + monthlyDeposit) * interest.pow(1.0/12) }

    fun compoundInterestMonthByMonth(years: Int, startAmount: Double, interest: Double, monthlyDeposit: Int): List<Double> =
        (0 until years*12).fold(listOf(startAmount)) { acc, index -> acc + (acc[index] + monthlyDeposit) * interest.pow(1.0/12) }

    // Return amount of months you can withdraw X amount of money each month
    fun amountOfMonthsWithdrawal(startAmount: Double = 0.0, interest: Double = 1.0, monthlyWithdrawal: Int = 0): Int {
        var month = 0
        var amount = startAmount
        while(amount > 0){
            amount -= monthlyWithdrawal.toDouble()
            amount = amount * interest.pow(1.0/12)
            month += 1
        }
        return month
    }
}