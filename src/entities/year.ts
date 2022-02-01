import { Quote } from "./quote";
import { Trade } from "./trade";

export class Year {
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
