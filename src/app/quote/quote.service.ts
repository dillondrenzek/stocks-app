import { Injectable } from '@angular/core';
import { Observable,
  BehaviorSubject } from 'rxjs/Rx';
import { Quote } from './quote.model';

import { MarkitQuoteService } from '../vendor/markit';
import { MarkitQuote } from '../vendor/markit';

@Injectable()
export class QuoteService {


  private activeQuote$ = new BehaviorSubject<Quote>(null);
  activeQuote: Observable<Quote> = this.activeQuote$.asObservable();

  constructor(private markitQuoteService: MarkitQuoteService) { }


  searchQuote(symbol: string) {
    return this.markitQuoteService.getQuote(symbol)
    .map((mq: MarkitQuote) => this.convertMarkitQuote(mq))
    .subscribe((quote: Quote) => {
      this.activeQuote$.next(quote)
    });
  }

  convertMarkitQuote(mq: MarkitQuote): Quote {
    return {
      name: mq.Name,
      symbol: mq.Symbol,
      lastPrice: mq.LastPrice,
      change: mq.Change,
      changePercent: mq.ChangePercent
    };
  }

}
