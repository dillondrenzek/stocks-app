import { Injectable, Inject, Optional } from '@angular/core';
import { USE_LOCAL_STORAGE } from '../../core/tokens';
import { Portfolio } from '../portfolio';


const PORTFOLIO_LOCALSTORAGE = 'portfolio';


@Injectable()
export class PortfolioStorageService {

  constructor(
    @Inject(USE_LOCAL_STORAGE) protected useLocalStorage: boolean
  ) { }

  /**
   * Gets the cached Portfolio from local storage
   */
  getCachedPortfolio(): Portfolio {
    if (!this.useLocalStorage) return null;
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
  setCachedPortfolio(p: Portfolio) {
    if (!this.useLocalStorage) return;
    if (!p) {
      localStorage.removeItem(PORTFOLIO_LOCALSTORAGE);
    } else {
      localStorage.setItem(PORTFOLIO_LOCALSTORAGE, JSON.stringify(p));
    }
  }

}
