"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataSource = void 0;
class DataSource {
    constructor(id, name, link, quoteCollections) {
        this.id = id;
        this.name = name;
        this.link = link;
        this.quoteCollections = quoteCollections;
    }
}
exports.DataSource = DataSource;
