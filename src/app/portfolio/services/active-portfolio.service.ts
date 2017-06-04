/**

 # ActivePortfolioService

 ## Requirements
 * manages the active portfolio



 */

import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs/Rx';
import { Portfolio } from '../portfolio';


/**
 * Manages the active Portfolio
 */
@Injectable()
export class ActivePortfolioService {

  constructor() { }

  private _activePortfolio: Portfolio = null;
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
  }

}
