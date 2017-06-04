/**
 * Portfolio
 */

import { Holding } from './holding';



/**
 * Portfolio is a basic grouping of Holdings
 */
export interface Portfolio {
  id: string;
  holdings: Holding[];
  dateModified: string;
  dateCreated: string;
}
