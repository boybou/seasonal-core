import { Quote } from "./quote";
import { Market } from "./market";
import { Period } from "../enums/period";
import { DataSource } from "./data-source";
export declare class QuoteCollection {
    constructor(id: number, marketId: number, market: Market, period: Period, dataSourceId: number, dataSource: DataSource, quotes: Quote[]);
    id: number;
    marketId: number;
    market: Market;
    period: Period;
    dataSourceId: number;
    dataSource: DataSource;
    quotes: Quote[];
}
