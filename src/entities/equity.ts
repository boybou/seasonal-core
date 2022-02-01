
export class Equity {
  constructor(timestamp: Date, sheetId: number, value: number) {
    this.timestamp = timestamp;
    this.sheetId = sheetId;
    this.value = value;
  }


  timestamp: Date;


  sheetId: number;

  value: number;
}
