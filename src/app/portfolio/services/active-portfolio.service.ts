/** @module ActivePortfolioService *//** */

import { Injectable, Inject } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { USE_LOCAL_STORAGE } from '../../core/tokens';
import { Portfolio, NULL_PORTFOLIO } from '../portfolio';
import { Holding } from '../holding';

const PORTFOLIO_LOCALSTORAGE = 'portfolio';

/**
 * Manages the active Portfolio
 *
 * ## Requirements
 * * creates a blank active portfolio
 * * adds a holding to active portfolio
 * * removes a holding from active portfolio
 *
 */
@Injectable()
export class ActivePortfolioService {

  constructor(
    @Inject(USE_LOCAL_STORAGE) private useLocalStorage: boolean
  ) {
    // Pull Cached Portfolio from local storage
    // if (useLocalStorage) this.setActivePortfolio(this.getCachedPortfolio());
  }

  private _activePortfolio: Portfolio = NULL_PORTFOLIO;
  private _activePortfolio$ = new BehaviorSubject<Portfolio>(this._activePortfolio);

  /**
   * Active portfolio as an Observable
   */
  activePortfolio: Observable<Portfolio> = this._activePortfolio$.asObservable();


  /**
   * Sets the active portfolio
   * @param portfolio   The portfolio to set as active
   */
  setActivePortfolio(portfolio: Portfolio) {
    this._activePortfolio = Object.assign({}, portfolio);
    this._activePortfolio$.next(this._activePortfolio);

    if (this.useLocalStorage) this.pushCachedPortfolio(this._activePortfolio);
  }

  addHolding(holding: Holding) {
    const newHoldings: Holding[] = [
      holding,
      ...this._activePortfolio.holdings
    ];
    this.setActivePortfolio(Object.assign({}, this._activePortfolio, {holdings: newHoldings}));
  }

  /**
   * Resets the active portfolio to the default placeholder portfolio
   */
  resetActivePortfolio() {
    this._activePortfolio = NULL_PORTFOLIO;
    this._activePortfolio$.next(this._activePortfolio);
  }




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
