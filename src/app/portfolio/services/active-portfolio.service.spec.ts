import { TestBed, inject, async, fakeAsync, tick } from '@angular/core/testing';

import { Portfolio, NULL_PORTFOLIO } from '../portfolio';
import { Holding } from '../holding';
import { ActivePortfolioService } from './active-portfolio.service';
import { PortfolioStorageService } from './portfolio-storage.service';
import * as ex from '../testing/examples/portfolio';
import * as holding_ex from '../testing/examples/holding';

describe('ActivePortfolioService', () => {

  let subject: ActivePortfolioService;
  let storage: PortfolioStorageService;

  beforeEach(() => {
    storage = new PortfolioStorageService(false);
    spyOn(storage, 'getCachedPortfolio');
    subject = new ActivePortfolioService(storage);
  });



  describe( 'when injected with a portfolio storage service', () => {
    describe('#constructor()', () => {
      it( 'should attempt to get a cached portfolio', () => {
        expect(storage.getCachedPortfolio).toHaveBeenCalled();
      });
    });
  });


  // Assumes:
  // - no active portfolio set after construction
  describe( 'when no active portfolio is set', () => {

    describe( '#getActivePortfolio()', () => {
      it('should return null', () => {
        let test = subject.getActivePortfolio();
        expect(test).toBeNull();
      });
    });

    describe( '#activePortfolio', () => {
      it('should emit null', (done) => {
        subject.activePortfolio.subscribe(p => {
          expect(p).toBeNull();
          done();
        });
      });
    });

    describe( '#addHolding()', () => {
      it('should throw an error', () => {
        const test: Holding = holding_ex.generateRandomHolding();
        let add = () => subject.addHolding(test);
        expect(add).toThrow();
      });
    });
  });



  describe( 'when an active portfolio is set', () => {

    const activePortfolio: Portfolio = ex.TEST_PORTFOLIO;

    beforeEach(() => {
      subject.setActivePortfolio(activePortfolio);
    });

    describe( '#getActivePortfolio()', () => {
      it('should return the active portfolio', () => {
        let test = subject.getActivePortfolio();
        expect(test).not.toBeNull();
        expect(test.id).toEqual(activePortfolio.id);
      });
    });
    describe( '#activePortfolio', () => {
      it('should emit the active portfolio', fakeAsync(() => {
        tick();
        subject.activePortfolio.subscribe(p => {
          expect(p).not.toBeNull();
          expect(p.id).toEqual(activePortfolio.id);
        });
      }));
    });
    describe( '#addHolding()', () => {
      it('should add a holding', () => {
        const test: Holding = holding_ex.generateRandomHolding();
        subject.addHolding(test);
        let holdings_symbols: string[] = subject.getActivePortfolio().holdings.map(h => h.symbol);
        expect(holdings_symbols).toContain(test.symbol);
      });
    });

    describe( 'when adding a holding that already exists', () => {

      const test: Holding = holding_ex.generateRandomHolding();

      beforeEach(() => {
        subject.addHolding(test);
      });

      describe( '#addHolding()', () => {
        it('should throw an error', () => {
          expect(subject.getActivePortfolio().holdings.map(h => h.symbol)).toContain(test.symbol);
          let add = () => subject.addHolding(test);
          expect(add).toThrow();
        });
      });
    });
  });



});
