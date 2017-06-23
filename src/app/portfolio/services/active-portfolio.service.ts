/** @module ActivePortfolioService *//** */

import { Injectable, Inject } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import { USE_LOCAL_STORAGE } from '../../core/tokens';
import { Portfolio, NULL_PORTFOLIO } from '../portfolio';
import { Holding } from '../holding';
import { PortfolioStorageService } from './portfolio-storage.service';



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
    protected portfolioStorage: PortfolioStorageService
  ) {
    // Pull Cached Portfolio from storage
    this.setActivePortfolio(this.portfolioStorage.getCachedPortfolio());
  }

  private _activePortfolio: Portfolio = null;
  private _activePortfolio$ = new BehaviorSubject<Portfolio>(null);

  /**
   * Active portfolio as an Observable
   */
  activePortfolio: Observable<Portfolio> = this._activePortfolio$.asObservable();




  addHolding(holding: Holding) {
    // const newHoldings: Holding[] = [
    //   holding,
    //   ...this._activePortfolio.holdings
    // ];
    // this.setActivePortfolio(Object.assign({}, this._activePortfolio, {holdings: newHoldings}));
  }



  /**
   * Gets the active portfolio
   * @return { Portfolio }
   */
  getActivePortfolio(): Portfolio {
    return this._activePortfolio;
  }

  /**
   * Sets the active portfolio
   * @param portfolio   The portfolio to set as active
   */
  setActivePortfolio(portfolio: Portfolio) {

    this._activePortfolio = (this._activePortfolio)
      ? Object.assign({}, portfolio)
      : null;

    this._activePortfolio$.next(this._activePortfolio);
  }


  /**
   * Resets the active portfolio to the default placeholder portfolio
   */
  resetActivePortfolio() {
    this._activePortfolio = NULL_PORTFOLIO;
    this._activePortfolio$.next(this._activePortfolio);
  }

}
