import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { Quote } from '../../quote';
import { MarkitQuoteService, MarkitQuote } from '../../../vendor/markit';

import { MY_EXAMPLE_QUOTES } from '../examples/quote';

@Injectable()
export class MockQuoteService {

  constructor(private markitQuoteService: MarkitQuoteService) { }


  /**
   * Saved Quotes
   */
  private _savedQuotes: Quote[] = MY_EXAMPLE_QUOTES;

  private savedQuotes$ = new BehaviorSubject<Quote[]>(this._savedQuotes);

  private setSavedQuotes(quotes: Quote[]) {
    this._savedQuotes = quotes;
    this.savedQuotes$.next(this._savedQuotes);
  }

  savedQuotes: Observable<Quote[]> = this.savedQuotes$.asObservable();



  /**
   * Active Quote
   */
  private _activeQuote: Quote = null;

  private activeQuote$ = new BehaviorSubject<Quote>(this._activeQuote);

  private setActiveQuote(quote: Quote) {
    this._activeQuote = quote;
    this.activeQuote$.next(this._activeQuote);
  }

  activeQuote: Observable<Quote> = this.activeQuote$.asObservable();




  /**
   * Search for a Quote from the MarkitOnDemand stocks api
   * NOTE: This *Implicitly* sets the active quote
   */
  searchQuote(symbol: string) {
    return this.markitQuoteService.getQuote(symbol)
    .map((mq: MarkitQuote) => this.convertMarkitQuote(mq))
    .subscribe((quote: Quote) => this.setActiveQuote(quote));
  }

  /**
   * Saves a quote to the array of saved quotes
   */
  saveQuote(symbol?: string) {
    if (!symbol) {
      // no symbol, save activeQuote
      this.setSavedQuotes([this._activeQuote, ...this._savedQuotes]);
    } else {
      console.warn('No support for saving Quote by string yet');
    }
  }

  /**
   * Clear Saved Quotes
   */
  clearSavedQuotes() {
    this.setSavedQuotes([]);
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
