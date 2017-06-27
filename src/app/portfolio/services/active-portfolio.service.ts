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
}
