import { Injectable } from '@angular/core';
import { Observable,
  BehaviorSubject } from 'rxjs/Rx';
import { Quote } from './quote.model';

import { MarkitQuoteService } from '../vendor/markit';
import { MarkitQuote } from '../vendor/markit';

@Injectable()
export class QuoteService {

  constructor(private markitQuoteService: MarkitQuoteService) { }






  /**
   * Saved Quotes
   */
  private savedQuotes$ = new BehaviorSubject<Quote[]>([]);
  savedQuotes: Observable<Quote[]> = this.savedQuotes$.asObservable();

  /**
   * Active Quote
   */
  private activeQuote$ = new BehaviorSubject<Quote>(null);
  activeQuote: Observable<Quote> = this.activeQuote$.asObservable();





  /**
   * Search for a Quote from the MarkitOnDemand stocks api
   */
  searchQuote(symbol: string) {
    return this.markitQuoteService.getQuote(symbol)
    .map((mq: MarkitQuote) => this.convertMarkitQuote(mq))
    .subscribe((quote: Quote) => {
      this.activeQuote$.next(quote)
    });
  }

  /**
   * Clear Saved Quotes
   */
  clearSavedQuotes() {
    this.savedQuotes$.next([]);
  }



  private convertMarkitQuote(mq: MarkitQuote): Quote {
    return {
      name: mq.Name,
      symbol: mq.Symbol,
      lastPrice: mq.LastPrice,
      change: mq.Change,
      changePercent: mq.ChangePercent
    };
  }

}
