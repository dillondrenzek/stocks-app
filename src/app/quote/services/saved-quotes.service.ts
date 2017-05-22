import { Injectable, Optional, Inject } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { USE_LOCAL_STORAGE } from '../../core/tokens';
import { Quote } from '../quote';

const SAVED_QUOTES_LOCALSTORAGE = 'saved_quotes';



/**
 * Manages the
 */
@Injectable()
export class SavedQuotesService {

  constructor(
    @Inject(USE_LOCAL_STORAGE) private useLocalStorage: boolean = true
  ) {
    let cachedQuotes: Quote[] = (useLocalStorage) ? this.getCachedQuotes() : [];
    this.setSavedQuotes(cachedQuotes);
  }



  /**
   * Saved Quotes
   */
  private _savedQuotes = [];
  private savedQuotes$ = new BehaviorSubject<Quote[]>(this._savedQuotes);
  private setSavedQuotes(quotes: Quote[]) {
    quotes = quotes || [];
    this._savedQuotes = quotes;
    this.savedQuotes$.next(this._savedQuotes);
    if (this.useLocalStorage) localStorage.setItem(SAVED_QUOTES_LOCALSTORAGE, JSON.stringify(this._savedQuotes));
  }

  getSavedQuotes(): Quote[] {
    return this._savedQuotes;
  }

  savedQuotes: Observable<Quote[]> = this.savedQuotes$.asObservable();





  /**
   * Add Quote to saved quotes
   */
  saveQuote(quote: Quote): Observable<Quote> {
    const save = Object.assign({}, quote);
    this.setSavedQuotes([
      save,
      ...this._savedQuotes
    ]);
    return Observable.of(save);
  }

  /**
   * Remove Quote from saved notes
   */
  removeQuote(quote: Quote): Observable<Quote> {
    const savedQuotes = this._savedQuotes.filter(q => q !== quote);
    this.setSavedQuotes(savedQuotes);
    return Observable.of(quote);
  }

  /**
   * Delete all saved notes
   */
  clearQuotes(): Observable<void> {
    this.setSavedQuotes([]);
    return Observable.of(null);
  }


  /**
   * Retrieve Cached Quotes from LocalStorage
   */
  private getCachedQuotes(): Quote[] {
    let cached: string = localStorage.getItem(SAVED_QUOTES_LOCALSTORAGE);
    let cachedArr: Quote[]= (cached)
      ? <Quote[]>JSON.parse(cached)
      : null;
    return cachedArr;
  }
}
