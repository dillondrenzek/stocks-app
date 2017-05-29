import { Holding } from './holding';

export interface Portfolio {
  holdings: Holding[];
  dateModified: string;
  dateCreated: string;
}
