import { Quote } from "./quote";
import { Trade } from "./trade";

export class Year {
  constructor(
    id: number,
    year: number,
    profitPercentage: number,
    profit: number,
    lowestChange: number,
    highestChange: number,
    highestChangeClose: number,
    lowestChangeClose: number,
    lowestPercentageChange: number,
    highestPercentageChange: number,
    lowestPercentageChangeClose: number,
    highestPercentageChangeClose: number,
    quotes: Quote[],
    trade: Trade
  ) {
    this.id = id;
    this.year = year;
    this.profitPercentage = profitPercentage;
    this.profit = profit;
    this.lowestChange = lowestChange;
    this.highestChange = highestChange;
    this.highestChangeClose = highestChangeClose;
    this.lowestChangeClose = lowestChangeClose;
    this.lowestPercentageChange = lowestPercentageChange;
    this.highestPercentageChange = highestPercentageChange;
    this.lowestPercentageChangeClose = lowestPercentageChangeClose;
    this.highestPercentageChangeClose = highestPercentageChangeClose;
    this.quotes = quotes;
    this.trade = trade;
  }

  id: number;

  year: number;

  profitPercentage: number;

  profit: number;

  lowestChange: number;

  highestChange: number;

  highestChangeClose: number;

  lowestChangeClose: number;

  lowestPercentageChange: number;

  highestPercentageChange: number;

  lowestPercentageChangeClose: number;

  highestPercentageChangeClose: number;

  quotes: Quote[];

  trade: Trade;
}
