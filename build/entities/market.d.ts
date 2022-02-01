import { QuoteCollection } from "./quote-collection";
import { Trigger } from "../enums/trigger";
export declare class Market {
    constructor(id: number, symbol: string, mainDataSourceId: number, quoteCollections: QuoteCollection[], lastUpdateQuotes: Date, lastStartedTradeCalculation: Date, lastCompletedTradeCalculation: Date, security: string, trigger88: Trigger, triggerMom28: Trigger, intraDayHighestDailyPercentageChangeAfter20YearsOfData: number, intraDayLowestDailyPercentageChangeAfter20YearsOfData: number, highestDailyPercentageChangeAfter20YearsOfData: number, lowestDailyPercentageChangeAfter20YearsOfData: number);
    id: number;
    symbol: string;
    mainDataSourceId: number;
    quoteCollections: QuoteCollection[];
    lastUpdateQuotes: Date;
    lastStartedTradeCalculation: Date;
    lastCompletedTradeCalculation: Date;
    security: string;
    trigger88: Trigger;
    triggerMom28: Trigger;
    intraDayHighestDailyPercentageChangeAfter20YearsOfData: number;
    intraDayLowestDailyPercentageChangeAfter20YearsOfData: number;
    highestDailyPercentageChangeAfter20YearsOfData: number;
    lowestDailyPercentageChangeAfter20YearsOfData: number;
}
//# sourceMappingURL=market.d.ts.map