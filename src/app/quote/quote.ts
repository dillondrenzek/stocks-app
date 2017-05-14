export class Quote {
  constructor(
    public name: string,
    public symbol: string,
    public lastPrice: number,
    public change: number,
    public changePercent: number
  ) {}
}

export const initialQuote: Quote = {
  name: '',
  symbol: '',
  lastPrice: 0.00,
  change: 0.00,
  changePercent: 0.00
};
