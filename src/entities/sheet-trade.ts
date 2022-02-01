import { TradeStage } from "../enums/trade-stage";
import { Trade } from "./trade";

export class SheetTrade {
  constructor(
    trade: Trade,
    tradeId: string,
    sheetId: number,
    tradeStage: TradeStage
  ) {
    this.trade = trade;
    this.tradeId = tradeId;
    this.sheetId = sheetId;
    this.tradeStage = tradeStage;
  }

  trade: Trade;

  tradeId: string;

  sheetId: number;

  tradeStage: TradeStage;
}
