import { TestBed, inject } from '@angular/core/testing';

import { Portfolio, NULL_PORTFOLIO } from '../portfolio';
import { Holding } from '../holding';
import { ActivePortfolioService } from './active-portfolio.service';


describe('ActivePortfolioService', () => {

  let subject: ActivePortfolioService;

  beforeEach(() => {
    let useLocalStorage = false;
    subject = new ActivePortfolioService(false);
  });



  it('emits a new Portfolio object reference on change', (done) => {

    let testValue: Portfolio = {
      id: '1',
      holdings: [],
      dateCreated: '',
      dateModified: ''
    };

    // perform test
    subject.setActivePortfolio(testValue);

    // subscribe to value stream (behavior subject)
    subject.activePortfolio.subscribe((portfolio: Portfolio) => {
      // expect same portfolio id
      expect(portfolio.id).toEqual(testValue.id);
      // expect different object reference
      expect(portfolio).not.toBe(testValue);
      done();
    });
  });




  it('resets active portfolio', (done) => {
    // perform test
    subject.resetActivePortfolio();
    // subscribe to change in active portfolio
    subject.activePortfolio.subscribe((portfolio: Portfolio) => {
      expect(portfolio).toBe(NULL_PORTFOLIO);
      done();
    });
  });





  it('adds a holding to the active portfolio', (done) => {
    const testValue: Holding = {
      symbol: 'TEST',
      purchasePrice: 32.98,
      datePurchased: null,
      quantity: 2
    };

    // perform test
    subject.addHolding(testValue);

    // subscribe to change in active portfolio
    subject.activePortfolio.subscribe((portfolio: Portfolio) => {
      let symbols: string[] = portfolio.holdings.map((h: Holding) => h.symbol);
      expect(symbols.indexOf(testValue.symbol)).toBeGreaterThan(-1);
      done();
    });
  });


  xit('removes a holding from the active portfolio', () => {});

  xit('updates a holding in the active portfolio', () => {});


});
