import { QuoteCollection } from "./quote-collection";
export declare class DataSource {
    constructor(id: number, name: string, link: string, quoteCollections: QuoteCollection[]);
    id: number;
    name: string;
    link: string;
    quoteCollections: QuoteCollection[];
}
