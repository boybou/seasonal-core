"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Market = void 0;
class Market {
    constructor(id, symbol, mainDataSourceId, quoteCollections, lastUpdateQuotes, lastStartedTradeCalculation, lastCompletedTradeCalculation, security, trigger88, triggerMom28, intraDayHighestDailyPercentageChangeAfter20YearsOfData, intraDayLowestDailyPercentageChangeAfter20YearsOfData, highestDailyPercentageChangeAfter20YearsOfData, lowestDailyPercentageChangeAfter20YearsOfData) {
        this.id = id;
        this.symbol = symbol;
        this.mainDataSourceId = mainDataSourceId;
        this.quoteCollections = quoteCollections;
        this.lastUpdateQuotes = lastUpdateQuotes;
        this.lastStartedTradeCalculation = lastStartedTradeCalculation;
        this.lastCompletedTradeCalculation = lastCompletedTradeCalculation;
        this.security = security;
        this.trigger88 = trigger88;
        this.triggerMom28 = triggerMom28;
        this.intraDayHighestDailyPercentageChangeAfter20YearsOfData =
            intraDayHighestDailyPercentageChangeAfter20YearsOfData;
        this.intraDayLowestDailyPercentageChangeAfter20YearsOfData =
            intraDayLowestDailyPercentageChangeAfter20YearsOfData;
        this.highestDailyPercentageChangeAfter20YearsOfData =
            highestDailyPercentageChangeAfter20YearsOfData;
        this.lowestDailyPercentageChangeAfter20YearsOfData =
            lowestDailyPercentageChangeAfter20YearsOfData;
    }
}
exports.Market = Market;
