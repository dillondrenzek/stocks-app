import { Holding } from '../../holding';

/**
 * Generates a random Holding for testing purposes
 */
export function generateRandomHolding(): Holding {
  return {
    symbol: Math.random().toString(26).substr(2, 4), // random 4 character string
    purchasePrice: Math.random() * 300, // some price between 0 and 300
    datePurchased: null, // TODO: generate a real date here when necessary
    quantity: Math.floor((Math.random() * 50) + 1) // random integer between 1 and 50
  }
}
