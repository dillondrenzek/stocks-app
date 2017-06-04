import { TestBed, inject } from '@angular/core/testing';

import { Portfolio } from '../portfolio';

import { ActivePortfolioService } from './active-portfolio.service';


describe('ActivePortfolioService', () => {

  let subject: ActivePortfolioService;

  describe('sets the active portfolio', () => {

    let testValue: Portfolio = {
      id: '1',
      holdings: [],
      dateCreated: '',
      dateModified: ''
    };

    beforeEach(() => {
      subject = new ActivePortfolioService();

      // perform test
      subject.setActivePortfolio(testValue);
    });

    it('emits new value', (done) => {
      // subscribe to value stream (behavior subject)
      subject.activePortfolio.subscribe((portfolio: Portfolio) => {
          // expect same portfolio id
          expect(portfolio.id).toEqual(testValue.id);
          done();
        });
    });

    it('should emit a different object', (done) => {
      // subscribe to value stream (behavior subject)
      subject.activePortfolio.subscribe((portfolio: Portfolio) => {
          // expect object reference to change
          expect(portfolio).not.toBe(testValue);
          done();
        });
    });
  });
});
