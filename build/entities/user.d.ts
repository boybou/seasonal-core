import { Currency } from "../enums/currency";
import { Role } from "../enums/role";
export declare class User {
    constructor(id: number, email: string, password: string, username: string, role: Role, homePageColumns: string[], tradeSearcherColumns: string[], filters: string[], preferredRiskPercentagePerTrade: number, accountSize: number, accountCurrency: Currency, customCorrelation: number, homePageDefaultNumberOfYears: number, renderHomePageSeventyPercentTradeCollectionOrderedByNumberOfTrades: boolean, renderHomePageEightyPercentTradeCollectionOrderedByNumberOfTrades: boolean, renderHomePageSeventyPercentTradeCollectionOrderedByPlRatio: boolean, renderHomePageEightyPercentTradeCollectionOrderedByPlRatio: boolean, renderHomePageSeventyPercentTradeCollectionOrderedByWinPercentage: boolean, renderHomePageEightyPercentTradeCollectionOrderedByWinPercentage: boolean);
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
