import { TestBed, inject } from '@angular/core/testing';

import { Portfolio } from '../portfolio';

import { ActivePortfolioService } from './active-portfolio.service';


describe('ActivePortfolioService', () => {

  let subject: ActivePortfolioService;

  beforeEach(() => {
    let useLocalStorage = false;
    subject = new ActivePortfolioService(false);
  });




  describe('sets the active portfolio', () => {

    let testValue: Portfolio = {
      id: '1',
      holdings: [],
      dateCreated: '',
      dateModified: ''
    };

    beforeEach(() => {
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


  describe('resets active portfolio', () => {

    beforeEach(() => {
      // set portfolio to reset
      subject.setActivePortfolio({
        id: 'valid',
        holdings: [],
        dateCreated: '',
        dateModified: ''
      });

      // perform test
      subject.resetActivePortfolio();
    });

    it('to a non-null portfolio', (done) => {
      subject.activePortfolio.subscribe((portfolio: Portfolio) => {
        expect(portfolio).not.toBeNull();
        done();
      });
    });

    it('to an unsaved portfolio', (done) => {
      subject.activePortfolio.subscribe((portfolio: Portfolio) => {
        expect(portfolio.id).toBeNull();
        expect(portfolio.dateCreated).toBeNull();
        expect(portfolio.dateModified).toBeNull();
        done();
      });
    });

  });
});
