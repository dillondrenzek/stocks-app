import { TestBed, inject } from '@angular/core/testing';

import { Portfolio, NULL_PORTFOLIO } from '../portfolio';
import { Holding } from '../holding';
import { ActivePortfolioService } from './active-portfolio.service';
import { PortfolioStorageService } from './portfolio-storage.service';

describe('ActivePortfolioService', () => {

  let subject: ActivePortfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ActivePortfolioService,
        PortfolioStorageService
      ]
    });
  });

  xit('emits null when there is no active portfolio', () => {});

  xit('adds a holding to the active portfolio', () => {});

  xit('removes a holding from the active portfolio', () => {});

  xit('updates a holding in the active portfolio', () => {});


});
