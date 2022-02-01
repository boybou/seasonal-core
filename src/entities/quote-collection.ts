import { Quote } from "./quote";
import { Market } from "./market";
import { Period } from "../enums/period";
import { DataSource } from "./data-source";

export class QuoteCollection {
  id: number;

  marketId: number;

  market: Market;

  period: Period;

  dataSourceId: number;

  dataSource: DataSource;

  quotes: Quote[];
}
