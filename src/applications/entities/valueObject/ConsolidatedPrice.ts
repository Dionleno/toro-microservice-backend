export class ConsolidatedPrice {
  public readonly consolidatedPrice: number;

  constructor(current: number) {
    this.consolidatedPrice = current;
    Object.freeze(this);
  }

  static create(current: number): ConsolidatedPrice {
    return new ConsolidatedPrice(current);
  }
}
