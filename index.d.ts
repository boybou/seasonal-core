export enum Trigger {
    LONG = "Long",
    SHORT = "Short",
}

export enum Period {
    M1 = "M1",
    H1 = "H1",
    D = "D"
}

export enum OrderType {
    DESC = "DESC",
    ASC = "ASC",
}

export enum TradeType {
    Long = "Long",
    Short = "Short"
}


export interface Market {
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

export interface QuoteCollection {
    id: number;
    marketId: number;
    market: Market;
    period: Period;
    dataSourceId: number;
    dataSource: DataSource;
    quotes: Quote[];
}

export interface Correlation {


    firstMarketId: number;


    secondMarketId: number;


    period: number;


    value: number


}

export interface DataSource {

    id: number;


    name: string;

    link: string;
    quoteCollections: QuoteCollection[];
}

export interface Equity {

    timestamp: Date;


    sheetId: number;


    value: number;
}

export interface Quote {

    id: number;


    date: Date;


    open: number;


    close: number;


    high: number;


    low: number;


    quoteCollectionId: number;
    quoteCollection: QuoteCollection;
}

export interface Trade {

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

export interface Year {

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



