import { TestBed, inject, fakeAsync, tick } from '@angular/core/testing';

import { Portfolio, NULL_PORTFOLIO } from '../portfolio';
import { Holding } from '../holding';
import { ActivePortfolioService } from './active-portfolio.service';
import { PortfolioStorageService } from './portfolio-storage.service';

describe('ActivePortfolioService', () => {

  describe('when injected with a portfolio storage service', () => {

    let subject: ActivePortfolioService;
    let storage: PortfolioStorageService;

    beforeEach(() => {
      storage = new PortfolioStorageService(false);
      spyOn(storage, 'getCachedPortfolio');
      subject = new ActivePortfolioService(storage);
    });

    it( 'should attempt to get a cached portfolio', () => {
      expect(storage.getCachedPortfolio).toHaveBeenCalled();
    });

    it( 'emits a portfolio when there is an active portfolio', fakeAsync((done) => {

      let test: Portfolio = {id: '1', holdings: [], dateCreated: null, dateModified: null};



      subject.setActivePortfolio(test);


      tick();
      console.warn('subject', subject);

      subject.activePortfolio
        // .skip(1)
        .subscribe((port: Portfolio) => {
          expect(port).not.toBeUndefined();
          expect(port).not.toBeNull();
          expect(port.id).toEqual(test.id);
          console.warn(port);
          done();
        });
    }));



    it( 'emits null when there is no active portfolio', (done) => {

      subject.setActivePortfolio(null);

      subject.activePortfolio
        .subscribe((port: Portfolio) => {
          expect(port).toBeNull();
          done();
        });
    });

    it('adds a holding to the active portfolio', (done) => {

      let add: Holding = { symbol: 'xcdf', quantity: 1, datePurchased: null, purchasePrice: 0.00 };

      subject.addHolding(add);

      subject.activePortfolio
        .map(p => p.holdings.map(h => h.symbol))
        .subscribe((holdingSymbols: string[]) => {
          expect(holdingSymbols).toContain(add.symbol);
          done();
        });


    });

    xit('removes a holding from the active portfolio', () => {});

    xit('updates a holding in the active portfolio', () => {});

  });

});
