"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quote = void 0;
class Quote {
    constructor(id, date, open, close, high, low, quoteCollectionId, quoteCollection) {
        this.id = id;
        this.date = date;
        this.open = open;
        this.close = close;
        this.high = high;
        this.low = low;
        this.quoteCollectionId = quoteCollectionId;
        this.quoteCollection = quoteCollection;
    }
}
exports.Quote = Quote;
