import { QuoteCollection } from "./quote-collection";

export class DataSource {
  constructor(
    id: number,
    name: string,
    link: string,
    quoteCollections: QuoteCollection[]
  ) {
    this.id = id;
    this.name = name;
    this.link = link;
    this.quoteCollections = quoteCollections;
  }

  id: number;

  name: string;

  link: string;

  quoteCollections: QuoteCollection[];
}
