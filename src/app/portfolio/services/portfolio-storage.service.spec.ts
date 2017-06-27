import { TestBed, inject } from '@angular/core/testing';
import { USE_LOCAL_STORAGE } from '../../core/tokens';
import { PortfolioStorageService } from './portfolio-storage.service';
import { Portfolio } from '../portfolio';

describe('PortfolioStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PortfolioStorageService
      ]
    });
  });

  describe('#getCachedPortfolio()', () => {
    it('should return null when no portfolio is cached', () => {

    });
  });

  describe('when configured not to use local storage', () => {

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          PortfolioStorageService,
          { provide: USE_LOCAL_STORAGE, useValue: false }
        ]
      });
    });

    it('returns null', inject([PortfolioStorageService], (service: PortfolioStorageService) => {
      expect(service.getCachedPortfolio()).toBeNull();
    }));

    it('doesn\'t cache a portfolio', inject([PortfolioStorageService], (service: PortfolioStorageService) => {
      let test: Portfolio = { id: '1', dateCreated: null, dateModified: null, holdings: []};
      service.setCachedPortfolio(test);
      expect(service.getCachedPortfolio()).toBeNull();
    }));

  });



  describe('when configured to use local storage', () => {

    beforeEach(() => {
      TestBed.configureTestingModule({
        providers: [
          PortfolioStorageService,
          { provide: USE_LOCAL_STORAGE, useValue: true }
        ]
      });
    });

    it('returns null if there is not cached portfolio',  inject([PortfolioStorageService], (service: PortfolioStorageService) => {
      expect(service.getCachedPortfolio()).toBeNull();
    }));

    it('caches portfolio', inject([PortfolioStorageService], (service: PortfolioStorageService) => {
      let test: Portfolio = { id: '1', dateCreated: null, dateModified: null, holdings: []};
      service.setCachedPortfolio(test);
      expect(service.getCachedPortfolio()).not.toBeNull();
      expect(service.getCachedPortfolio().id).toEqual(test.id);
    }));

    it('clears the cached portfolio', inject([PortfolioStorageService], (service: PortfolioStorageService) => {
      service.setCachedPortfolio(null);
      expect(service.getCachedPortfolio()).toBeNull();
    }));

  });

});
