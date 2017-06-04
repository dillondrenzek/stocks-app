/**
 * Portfolio
 */

import { Holding } from './holding';



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
