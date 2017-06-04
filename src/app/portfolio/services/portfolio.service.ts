import { Injectable, Inject } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { USE_LOCAL_STORAGE } from '../../core/tokens';
import { Quote } from '../../quote/quote';
import { Portfolio } from '../portfolio';

const PORTFOLIO_LOCALSTORAGE = 'portfolio';


/**
 # PortfolioService

 ## Requirements
 - should use local storage to cache portfolios when configured


 */
@Injectable()
export class PortfolioService {

  constructor(
    @Inject(USE_LOCAL_STORAGE) private useLocalStorage: boolean
  ) {
    // Pull Cached Portfolio from local storage
    if (useLocalStorage) this.setActivePortfolio(this.getCachedPortfolio());
  }

  /**
   * Active Portfolio
   */

  // truth
  private _activePortfolio: Portfolio = {
    id: '1',
    holdings: [],
    dateModified: '1992-07-27',
    dateCreated: '1992-07-27'
  };
  // subject
  private activePortfolio$ = new BehaviorSubject<Portfolio>(this._activePortfolio);

  activePortfolio: Observable<Portfolio> = this.activePortfolio$.asObservable();

  // Sets the active Portfolio
  setActivePortfolio(p: Portfolio) {
    this._activePortfolio = p;
    this.activePortfolio$.next(this._activePortfolio);
    if (this.useLocalStorage) this.pushCachedPortfolio(this._activePortfolio);
  }



  /**
   * Add Quote to Portfolio
   */
  // addQuote(quote: Quote, portfolio: Portfolio): Observable<Portfolio> {
  //   return Observable.of({
  //     quotes: [ quote, ...portfolio.quotes]
  //   });
  // }
  //
  // /**
  //  * Remove Quote from Portfolio
  //  */
  // removeQuote(quote: Quote, portfolio: Portfolio): Observable<Portfolio> {
  //   return Observable.of({
  //     quotes: portfolio.quotes.filter(q => q !== quote)
  //   });
  // }



  //--------------------------------------------------------------------


  /**
   * Gets the cached Portfolio
   */
  private getCachedPortfolio(): Portfolio {
    let cached: string = localStorage.getItem(PORTFOLIO_LOCALSTORAGE);
    let cachedPort: Portfolio = (cached)
      ? <Portfolio>JSON.parse(cached)
      : null;
    return cachedPort;
  }

  /**
   * Sets the cached Portfolio
   * NOTE: if passed falsy value, clears cache
   */
  private pushCachedPortfolio(p: Portfolio) {
    if (!p) {
      localStorage.removeItem(PORTFOLIO_LOCALSTORAGE);
    } else {
      localStorage.setItem(PORTFOLIO_LOCALSTORAGE, JSON.stringify(p));
    }
  }


}
