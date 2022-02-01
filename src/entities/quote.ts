import { QuoteCollection } from "./quote-collection";

export class Quote {
  constructor(
    id: number,
    date: Date,
    open: number,
    close: number,
    high: number,
    low: number,
    quoteCollectionId: number,
    quoteCollection: QuoteCollection
  ) {
    this.id = id;
    this.date = date;
    this.open = open;
    this.close = close;
    this.high = high;
    this.low = low;
    this.quoteCollectionId = quoteCollectionId;
    this.quoteCollection = quoteCollection;
  }

  id: number;

  date: Date;

  open: number;

  close: number;

  high: number;

  low: number;

  quoteCollectionId: number;

  quoteCollection: QuoteCollection;
}
