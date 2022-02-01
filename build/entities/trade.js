"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trade = void 0;
class Trade {
    constructor(id, market, openDay, openMonth, closeDay, closeMonth, type, winners, losers, biggestWinStreak, biggestLossStreak, avgProfit, avgProfitPercentage, avgLoss, avgLossPercentage, plRatio, winPercentage, numberOfTrades, lowestPercentageChange, lowestPercentageChangeClose, highestPercentageChangeClose, highestPercentageChange, currentWinStreak, currentLossStreak, payoutRate, payoutRateOfPercentages, lowestChange, lowestChangeClose, highestChange, highestChangeClose, years, avgBars, derivedTrade) {
        this.id = id;
        this.market = market;
        this.openDay = openDay;
        this.openMonth = openMonth;
        this.closeDay = closeDay;
        this.closeMonth = closeMonth;
        this.type = type;
        this.winners = winners;
        this.losers = losers;
        this.biggestWinStreak = biggestWinStreak;
        this.biggestLossStreak = biggestLossStreak;
        this.avgProfit = avgProfit;
        this.avgProfitPercentage = avgProfitPercentage;
        this.avgLoss = avgLoss;
        this.avgLossPercentage = avgLossPercentage;
        this.plRatio = plRatio;
        this.winPercentage = winPercentage;
        this.numberOfTrades = numberOfTrades;
        this.lowestPercentageChange = lowestPercentageChange;
        this.lowestPercentageChangeClose = lowestPercentageChangeClose;
        this.highestPercentageChangeClose = highestPercentageChangeClose;
        this.highestPercentageChange = highestPercentageChange;
        this.currentWinStreak = currentWinStreak;
        this.currentLossStreak = currentLossStreak;
        this.payoutRate = payoutRate;
        this.payoutRateOfPercentages = payoutRateOfPercentages;
        this.lowestChange = lowestChange;
        this.lowestChangeClose = lowestChangeClose;
        this.highestChange = highestChange;
        this.highestChangeClose = highestChangeClose;
        this.years = years;
        this.avgBars = avgBars;
        this.derivedTrade = derivedTrade;
        this.marketId = market.id;
    }
}
exports.Trade = Trade;
