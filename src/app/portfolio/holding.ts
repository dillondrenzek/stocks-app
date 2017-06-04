
/**
 * Holding represents a position held of a certain symbol
 */
export interface Holding {

  /**
   * Stock quote symbol
   */
  symbol: string;

  /**
   * Price purchased
   *
   * - Format: `{2}[0-9]+\.{2}[0-9]`
   * - Example: `123.90`
   */
  purchasePrice: number;

  quantity: number;

  datePurchased: string;

}
