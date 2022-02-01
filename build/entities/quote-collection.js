"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoteCollection = void 0;
class QuoteCollection {
    constructor(id, marketId, market, period, dataSourceId, dataSource, quotes) {
        this.id = id;
        this.marketId = marketId;
        this.market = market;
        this.period = period;
        this.dataSourceId = dataSourceId;
        this.dataSource = dataSource;
        this.quotes = quotes;
    }
}
exports.QuoteCollection = QuoteCollection;
