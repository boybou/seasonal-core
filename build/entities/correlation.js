"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Correlation = void 0;
class Correlation {
    constructor(firstMarketId, secondMarketId, period, value) {
        this.firstMarketId = firstMarketId;
        this.secondMarketId = secondMarketId;
        this.period = period;
        this.value = value;
    }
}
exports.Correlation = Correlation;
