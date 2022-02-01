import {Period} from "../seasonal/seasonal-back/src/enums/period";
import {DataSource} from "../seasonal/seasonal-back/src/entity/data-source";
import {Quote} from "../seasonal/seasonal-back/src/entity/quote";

export enum Trigger {
    LONG = "Long",
    SHORT = "Short",
}


export interface Market{
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

export interface QuoteCollection {
    id: number;
    marketId: number;
    market: Market;
    period: Period;
    dataSourceId: number;
    dataSource: DataSource;
    quotes: Quote[];
}