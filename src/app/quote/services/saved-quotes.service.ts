import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

import { Quote } from '../quote';

@Injectable()
export class SavedQuotesService {

  constructor() { }

  /**
   * Private State
   */
  private _savedQuotes = [];
  private savedQuotes$ = new BehaviorSubject<Quote[]>(this._savedQuotes);
  private setSavedQuotes(quotes: Quote[]) {
    this._savedQuotes = quotes;
    this.savedQuotes$.next(quotes);
  }

  /**
   * START Public API
   */

  savedQuotes: Observable<Quote[]> = this.savedQuotes$.asObservable();

  getSavedQuotes(): Quote[] {
    return this._savedQuotes;
  }



  saveQuote(quote: Quote): Observable<Quote> {
    let save = Object.assign({}, quote);
    this.setSavedQuotes([
      save,
      ...this._savedQuotes
    ]);
    return Observable.of(save);
  }

  removeQuote(quote: Quote): Observable<Quote> {
    let savedQuotes = this._savedQuotes.filter(q => q !== quote);
    this.setSavedQuotes(savedQuotes);
    return Observable.of(quote);
  }

  clearQuotes(): Observable<void> {
    this.setSavedQuotes([]);
    return Observable.of(null);
  }
}
