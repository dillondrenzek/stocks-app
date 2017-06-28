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
    if (!portfolio) portfolio = null;
    this._activePortfolio = portfolio;
    this._activePortfolio$.next(this._activePortfolio);
  }

  /**
   * [NEEDS DOCUMENTATION]
   */
  addHolding(h: Holding) {
    // make sure portfolio exists
    this.testPortfolioExists();
    // make sure portfolio doesn't already contain holding
    this.testPortfolioDoesNotContainHolding(h);
    // add holding
    const new_holdings: Holding[] = [h, ...this._activePortfolio.holdings];
    const new_portfolio: Portfolio = Object.assign({}, this._activePortfolio, { holdings: new_holdings });
    // set new active portfolio
    this.setActivePortfolio(new_portfolio);
  }

  /**
   * [NEEDS DOCUMENTATION]
   */
  removeHolding(h: Holding) {
    // make sure portfolio exists
    this.testPortfolioExists();
    // make sure portfolio already contains holding
    this.testPortfolioContainsHolding(h);
    // remove holding
    const new_holdings: Holding[] = this._activePortfolio.holdings.filter(x => x.symbol !== h.symbol);
    const new_portfolio: Portfolio = Object.assign({}, this._activePortfolio, { holdings: new_holdings });
    // set new active portfolio
    this.setActivePortfolio(new_portfolio);
  }

  /**
   * Throws an error when no active portfolio exists
   */
  private testPortfolioExists() {
    if (!this._activePortfolio) throw new Error('Tried to add a Holding when no active portfolio was set.');
  }

  /**
   * Throws an error when portfolio already contains the given holding
   */
  private testPortfolioDoesNotContainHolding(h: Holding) {
    let symbols: string[] = this._activePortfolio.holdings.map(h => h.symbol);
    if (symbols.indexOf(h.symbol) > -1) throw new Error('Holding already exists in the active portfolio.');
  }

  /**
   * Throws an error when portfolio does not contain the given holding
   */
  private testPortfolioContainsHolding(h: Holding) {
    let symbols: string[] = this._activePortfolio.holdings.map(h => h.symbol);
    if (symbols.indexOf(h.symbol) === -1) throw new Error('Holding does not already exist in the active portfolio.');
  }
}
