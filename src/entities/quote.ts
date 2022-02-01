import { QuoteCollection } from "./quote-collection";

export class Quote {
  id: number;
  date: Date;

  open: number;

  close: number;

  high: number;

  low: number;

  quoteCollectionId: number;

  quoteCollection: QuoteCollection;
}
