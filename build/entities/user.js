"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, email, password, username, role, homePageColumns, tradeSearcherColumns, filters, preferredRiskPercentagePerTrade, accountSize, accountCurrency, customCorrelation, homePageDefaultNumberOfYears, renderHomePageSeventyPercentTradeCollectionOrderedByNumberOfTrades, renderHomePageEightyPercentTradeCollectionOrderedByNumberOfTrades, renderHomePageSeventyPercentTradeCollectionOrderedByPlRatio, renderHomePageEightyPercentTradeCollectionOrderedByPlRatio, renderHomePageSeventyPercentTradeCollectionOrderedByWinPercentage, renderHomePageEightyPercentTradeCollectionOrderedByWinPercentage) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.username = username;
        this.role = role;
        this.homePageColumns = homePageColumns;
        this.tradeSearcherColumns = tradeSearcherColumns;
        this.filters = filters;
        this.preferredRiskPercentagePerTrade = preferredRiskPercentagePerTrade;
        this.accountSize = accountSize;
        this.accountCurrency = accountCurrency;
        this.customCorrelation = customCorrelation;
        this.homePageDefaultNumberOfYears = homePageDefaultNumberOfYears;
        this.renderHomePageSeventyPercentTradeCollectionOrderedByNumberOfTrades =
            renderHomePageSeventyPercentTradeCollectionOrderedByNumberOfTrades;
        this.renderHomePageEightyPercentTradeCollectionOrderedByNumberOfTrades =
            renderHomePageEightyPercentTradeCollectionOrderedByNumberOfTrades;
        this.renderHomePageSeventyPercentTradeCollectionOrderedByPlRatio =
            renderHomePageSeventyPercentTradeCollectionOrderedByPlRatio;
        this.renderHomePageEightyPercentTradeCollectionOrderedByPlRatio =
            renderHomePageEightyPercentTradeCollectionOrderedByPlRatio;
        this.renderHomePageSeventyPercentTradeCollectionOrderedByWinPercentage =
            renderHomePageSeventyPercentTradeCollectionOrderedByWinPercentage;
        this.renderHomePageEightyPercentTradeCollectionOrderedByWinPercentage =
            renderHomePageEightyPercentTradeCollectionOrderedByWinPercentage;
    }
}
exports.User = User;
