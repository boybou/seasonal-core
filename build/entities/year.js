"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Year = void 0;
class Year {
    constructor(id, year, profitPercentage, profit, lowestChange, highestChange, highestChangeClose, lowestChangeClose, lowestPercentageChange, highestPercentageChange, lowestPercentageChangeClose, highestPercentageChangeClose, quotes, trade) {
        this.id = id;
        this.year = year;
        this.profitPercentage = profitPercentage;
        this.profit = profit;
        this.lowestChange = lowestChange;
        this.highestChange = highestChange;
        this.highestChangeClose = highestChangeClose;
        this.lowestChangeClose = lowestChangeClose;
        this.lowestPercentageChange = lowestPercentageChange;
        this.highestPercentageChange = highestPercentageChange;
        this.lowestPercentageChangeClose = lowestPercentageChangeClose;
        this.highestPercentageChangeClose = highestPercentageChangeClose;
        this.quotes = quotes;
        this.trade = trade;
    }
}
exports.Year = Year;
