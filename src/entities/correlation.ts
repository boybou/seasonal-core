export class Correlation {
  constructor(
    firstMarketId: number,
    secondMarketId: number,
    period: number,
    value: number
  ) {
    this.firstMarketId = firstMarketId;
    this.secondMarketId = secondMarketId;
    this.period = period;
    this.value = value;
  }

  firstMarketId: number;

  secondMarketId: number;

  period: number;

  value: number;
}
