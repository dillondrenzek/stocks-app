import { MarkitQuote } from '../vendor/markit';

export interface Quote {
  name: string;
  symbol: string;
  lastPrice: number;
  change: number;
  changePercent: number;
  lastUpdated?: string;
}

export const initialQuote: Quote = {
  name: null,
  symbol: null,
  lastPrice: null,
  change: null,
  changePercent: null,
  lastUpdated: null
};

export class QuoteFactory {

  static fromMarkitQuote(mq: MarkitQuote): Quote {
    return {
      name: mq.Name,
      symbol: mq.Symbol,
      lastPrice: mq.LastPrice,
      change: mq.Change,
      changePercent: mq.ChangePercent,
      lastUpdated: new Date().toISOString()
    };
  }

}

// private convertMarkitQuote(mq: MarkitQuote): Quote {
//   return new Quote( mq.Name, mq.Symbol, mq.LastPrice, mq.Change, mq.ChangePercent );
// }
//
// export function fromMarkitQuote(mQuote: MarkitQuote) {
//
// }
