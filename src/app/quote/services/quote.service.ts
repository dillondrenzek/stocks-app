import { Injectable } from '@angular/core';
import { Observable,
  BehaviorSubject } from 'rxjs/Rx';
import { Quote, QuoteFactory } from '../quote';
import { SavedQuotesService } from './saved-quotes.service';
import { MarkitQuoteService } from '../../vendor/markit';
import { MarkitQuote } from '../../vendor/markit';

@Injectable()
export class QuoteService {

  constructor(
    private markitQuoteService: MarkitQuoteService,
    private savedQuotesService: SavedQuotesService
  ) { }


  /**
   * Saved Quotes
   */
  get savedQuotes(): Observable<Quote[]> {
    return this.savedQuotesService.savedQuotes;
  }



  /**
   * Active Quote
   */
  private _activeQuote: Quote = null;

  private activeQuote$ = new BehaviorSubject<Quote>(this._activeQuote);

  setActiveQuote(quote: Quote) {
    console.info('setActiveQuote:', quote);
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
    .map((mq: MarkitQuote) => QuoteFactory.fromMarkitQuote(mq))
    .subscribe((quote: Quote) => this.setActiveQuote(quote));
  }

  /**
   * Saves the active quote to the saved quotes array
   */
  saveActiveQuote() {
    this.savedQuotesService.saveQuote(this._activeQuote);
  }

  /**
   * Removes a quote from the saved quotes
   */
  removeQuote(q: Quote) {
    this.savedQuotesService.removeQuote(q);
  }

  /**
   * Clear Saved Quotes
   */
  clearSavedQuotes() {
    this.savedQuotesService.clearQuotes();
  }


}
