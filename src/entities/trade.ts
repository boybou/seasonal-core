import { Year } from "./year";
import { Market } from "./market";
import { TradeType } from "../enums/trade-type";

export class Trade {
  constructor(
    id: string,
    market: Market,
    openDay: number,
    openMonth: number,
    closeDay: number,
    closeMonth: number,
    type: TradeType,
    winners: number,
    losers: number,
    biggestWinStreak: number,
    biggestLossStreak: number,
    avgProfit: number,
    avgProfitPercentage: number,
    avgLoss: number,
    avgLossPercentage: number,
    plRatio: number,
    winPercentage: number,
    numberOfTrades: number,
    lowestPercentageChange: number,
    lowestPercentageChangeClose: number,
    highestPercentageChangeClose: number,
    highestPercentageChange: number,
    currentWinStreak: number,
    currentLossStreak: number,
    payoutRate: number,
    payoutRateOfPercentages: number,
    lowestChange: number,
    lowestChangeClose: number,
    highestChange: number,
    highestChangeClose: number,
    years: Year[],
    avgBars: number,
    derivedTrade: boolean
  ) {
    this.id = id;
    this.market = market;
    this.openDay = openDay;
    this.openMonth = openMonth;
    this.closeDay = closeDay;
    this.closeMonth = closeMonth;
    this.type = type;
    this.winners = winners;
    this.losers = losers;
    this.biggestWinStreak = biggestWinStreak;
    this.biggestLossStreak = biggestLossStreak;
    this.avgProfit = avgProfit;
    this.avgProfitPercentage = avgProfitPercentage;
    this.avgLoss = avgLoss;
    this.avgLossPercentage = avgLossPercentage;
    this.plRatio = plRatio;
    this.winPercentage = winPercentage;
    this.numberOfTrades = numberOfTrades;
    this.lowestPercentageChange = lowestPercentageChange;
    this.lowestPercentageChangeClose = lowestPercentageChangeClose;
    this.highestPercentageChangeClose = highestPercentageChangeClose;
    this.highestPercentageChange = highestPercentageChange;
    this.currentWinStreak = currentWinStreak;
    this.currentLossStreak = currentLossStreak;
    this.payoutRate = payoutRate;
    this.payoutRateOfPercentages = payoutRateOfPercentages;
    this.lowestChange = lowestChange;
    this.lowestChangeClose = lowestChangeClose;
    this.highestChange = highestChange;
    this.highestChangeClose = highestChangeClose;
    this.years = years;
    this.avgBars = avgBars;
    this.derivedTrade = derivedTrade;
    this.marketId = market.id;
  }

  id: string;

  marketId: number;

  market: Market;

  openDay: number;

  openMonth: number;

  closeDay: number;

  closeMonth: number;

  type: TradeType;

  winners: number;

  losers: number;

  biggestWinStreak: number;

  biggestLossStreak: number;

  avgProfit: number;

  avgProfitPercentage: number;

  avgLoss: number;

  avgLossPercentage: number;

  plRatio: number;

  winPercentage: number;

  numberOfTrades: number;

  lowestPercentageChange: number;

  lowestPercentageChangeClose: number;

  highestPercentageChangeClose: number;

  highestPercentageChange: number;

  currentWinStreak: number;

  currentLossStreak: number;

  payoutRate: number;

  payoutRateOfPercentages: number;

  lowestChange: number;

  lowestChangeClose: number;

  highestChange: number;

  highestChangeClose: number;

  avgBars: number;

  derivedTrade: boolean;

  years: Year[];
}
