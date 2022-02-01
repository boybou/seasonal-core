import { Year } from "./year";
import { Market } from "./market";
import { TradeType } from "../enums/trade-type";

export class Trade {
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
