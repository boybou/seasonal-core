import { QuoteCollection } from "./quote-collection";
import { Trigger } from "../enums/trigger";

export class Market {
  constructor(
    id: number,
    symbol: string,
    mainDataSourceId: number,
    quoteCollections: QuoteCollection[],
    lastUpdateQuotes: Date,
    lastStartedTradeCalculation: Date,
    lastCompletedTradeCalculation: Date,
    security: string,
    trigger88: Trigger,
    triggerMom28: Trigger,
    intraDayHighestDailyPercentageChangeAfter20YearsOfData: number,
    intraDayLowestDailyPercentageChangeAfter20YearsOfData: number,
    highestDailyPercentageChangeAfter20YearsOfData: number,
    lowestDailyPercentageChangeAfter20YearsOfData: number
  ) {
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
