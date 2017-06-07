/**
 * Portfolio
 */

import { Holding } from './holding';

/**
 * An unsaved, effectively null portfolio
 */
export const NULL_PORTFOLIO: Portfolio = {
  id: null,
  dateCreated: null,
  dateModified: null,
  holdings: []
};

/**
 * Portfolio is a basic grouping of Holdings
 */
export interface Portfolio {

  /**
   * Unique identifier
   */
  id: string;

  /**
   * Array of holdings
   */
  holdings: Holding[];

  /**
   * Date last modified, changed on save
   */
  dateModified: string;

  /**
   * Date created, established on creation
   */
  dateCreated: string;
}





export const PortfolioReducers = {

  totalValue: (p: Portfolio): number => {
    let prices: number[] = p.holdings.map((holding: Holding) => holding.purchasePrice * holding.quantity);
    return prices.reduce((acc, curr) => acc + curr, 0);
  }

};
