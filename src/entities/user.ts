import { Currency } from "../enums/currency";
import { Role } from "../enums/role";

export class User {
  constructor(
    id: number,
    email: string,
    password: string,
    username: string,
    role: Role,
    homePageColumns: string[],
    tradeSearcherColumns: string[],
    filters: string[],
    preferredRiskPercentagePerTrade: number,
    accountSize: number,
    accountCurrency: Currency,
    customCorrelation: number,
    homePageDefaultNumberOfYears: number,
    renderHomePageSeventyPercentTradeCollectionOrderedByNumberOfTrades: boolean,
    renderHomePageEightyPercentTradeCollectionOrderedByNumberOfTrades: boolean,
    renderHomePageSeventyPercentTradeCollectionOrderedByPlRatio: boolean,
    renderHomePageEightyPercentTradeCollectionOrderedByPlRatio: boolean,
    renderHomePageSeventyPercentTradeCollectionOrderedByWinPercentage: boolean,
    renderHomePageEightyPercentTradeCollectionOrderedByWinPercentage: boolean
  ) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.username = username;
    this.role = role;
    this.homePageColumns = homePageColumns;
    this.tradeSearcherColumns = tradeSearcherColumns;
    this.filters = filters;
    this.preferredRiskPercentagePerTrade = preferredRiskPercentagePerTrade;
    this.accountSize = accountSize;
    this.accountCurrency = accountCurrency;
    this.customCorrelation = customCorrelation;
    this.homePageDefaultNumberOfYears = homePageDefaultNumberOfYears;
    this.renderHomePageSeventyPercentTradeCollectionOrderedByNumberOfTrades =
      renderHomePageSeventyPercentTradeCollectionOrderedByNumberOfTrades;
    this.renderHomePageEightyPercentTradeCollectionOrderedByNumberOfTrades =
      renderHomePageEightyPercentTradeCollectionOrderedByNumberOfTrades;
    this.renderHomePageSeventyPercentTradeCollectionOrderedByPlRatio =
      renderHomePageSeventyPercentTradeCollectionOrderedByPlRatio;
    this.renderHomePageEightyPercentTradeCollectionOrderedByPlRatio =
      renderHomePageEightyPercentTradeCollectionOrderedByPlRatio;
    this.renderHomePageSeventyPercentTradeCollectionOrderedByWinPercentage =
      renderHomePageSeventyPercentTradeCollectionOrderedByWinPercentage;
    this.renderHomePageEightyPercentTradeCollectionOrderedByWinPercentage =
      renderHomePageEightyPercentTradeCollectionOrderedByWinPercentage;
  }

  id: number;

  email: string;

  password: string;

  username: string;

  role: Role;

  homePageColumns: string[];

  tradeSearcherColumns: string[];

  filters: string[];

  preferredRiskPercentagePerTrade: number;

  accountSize: number;

  accountCurrency: Currency;

  customCorrelation: number;

  homePageDefaultNumberOfYears: number;

  renderHomePageSeventyPercentTradeCollectionOrderedByNumberOfTrades: boolean;

  renderHomePageEightyPercentTradeCollectionOrderedByNumberOfTrades: boolean;

  renderHomePageSeventyPercentTradeCollectionOrderedByPlRatio: boolean;

  renderHomePageEightyPercentTradeCollectionOrderedByPlRatio: boolean;

  renderHomePageSeventyPercentTradeCollectionOrderedByWinPercentage: boolean;

  renderHomePageEightyPercentTradeCollectionOrderedByWinPercentage: boolean;
}
