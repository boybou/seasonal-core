import { QuoteCollection } from "./quote-collection";

export class DataSource {
  id: number;

  name: string;

  link: string;

  quoteCollections: QuoteCollection[];
}
