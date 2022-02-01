import { Quote } from "./quote";
import { Market } from "./market";
import { Period } from "../enums/period";
import { DataSource } from "./data-source";

export class QuoteCollection {
  constructor(
    id: number,
    marketId: number,
    market: Market,
    period: Period,
    dataSourceId: number,
    dataSource: DataSource,
    quotes: Quote[]
  ) {
    this.id = id;
    this.marketId = marketId;
    this.market = market;
    this.period = period;
    this.dataSourceId = dataSourceId;
    this.dataSource = dataSource;
    this.quotes = quotes;
  }

  id: number;

  marketId: number;

  market: Market;

  period: Period;

  dataSourceId: number;

  dataSource: DataSource;

  quotes: Quote[];
}
