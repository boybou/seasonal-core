import { TradeStage } from "../enums/trade-stage";
import { Trade } from "./trade";

export class SheetTrade {
  trade: Trade;

  tradeId: string;

  sheetId: number;

  tradeStage: TradeStage;
}
