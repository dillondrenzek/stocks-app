import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';

import { Quote } from '../quote';

const SAVED_QUOTES_LOCALSTORAGE = 'saved_quotes';


@Injectable()
export class SavedQuotesService {



  constructor() {

    this.setSavedQuotes(this.getCachedQuotes());
  }

  /**
   * Private State
   */
  private _savedQuotes = [];
  private savedQuotes$ = new BehaviorSubject<Quote[]>(this._savedQuotes);
  private setSavedQuotes(quotes: Quote[]) {
    quotes = quotes || [];
    this._savedQuotes = quotes;
    this.savedQuotes$.next(quotes);
    localStorage.setItem(SAVED_QUOTES_LOCALSTORAGE, JSON.stringify(quotes));
  }

  /**
   * START Public API
   */

  savedQuotes: Observable<Quote[]> = this.savedQuotes$.asObservable();

  getSavedQuotes(): Quote[] {
    return this._savedQuotes;
  }

  getCachedQuotes(): Quote[] {
    let cached: string = localStorage.getItem(SAVED_QUOTES_LOCALSTORAGE);
    let cachedArr: Quote[]= (cached)
      ? <Quote[]>JSON.parse(cached)
      : null;
    return cachedArr;
  }

  saveQuote(quote: Quote): Observable<Quote> {
    const save = Object.assign({}, quote);
    this.setSavedQuotes([
      save,
      ...this._savedQuotes
    ]);
    return Observable.of(save);
  }

  removeQuote(quote: Quote): Observable<Quote> {
    const savedQuotes = this._savedQuotes.filter(q => q !== quote);
    this.setSavedQuotes(savedQuotes);
    return Observable.of(quote);
  }

  clearQuotes(): Observable<void> {
    this.setSavedQuotes([]);
    return Observable.of(null);
  }
}
