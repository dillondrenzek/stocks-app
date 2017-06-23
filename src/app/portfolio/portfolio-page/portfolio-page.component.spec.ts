import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import * as tokens from '../../core/tokens';

import {MockActivePortfolioService} from '../testing/mocks/mock-active-portfolio.service';
import {MockPortfolioStorageService} from '../testing/mocks/mock-portfolio-storage.service';

import { Holding } from '../holding';
import { PortfolioPageComponent } from './portfolio-page.component';
import { HoldingsTableComponent } from '../holdings-table/holdings-table.component';
import { HoldingFormComponent } from '../holding-form/holding-form.component';
import { ActivePortfolioService } from '../services/active-portfolio.service';
import { PortfolioStorageService } from '../services/portfolio-storage.service';

describe('PortfolioPageComponent', () => {
  let component: PortfolioPageComponent;
  let activePortfolioSvc: ActivePortfolioService;
  let portfolioStorageSvc: PortfolioStorageService;
  let fixture: ComponentFixture<PortfolioPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [
        PortfolioPageComponent,
        HoldingsTableComponent,
        HoldingFormComponent
      ],
      providers: [
        {
          provide: ActivePortfolioService,
          useClass: MockActivePortfolioService
        },
        {
          provide: PortfolioStorageService,
          useClass: MockPortfolioStorageService
        },
        {
          provide: tokens.USE_LOCAL_STORAGE,
          useValue: false
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioPageComponent);
    component = fixture.componentInstance;
    activePortfolioSvc = fixture.componentRef.injector.get(ActivePortfolioService);
    portfolioStorageSvc = fixture.componentRef.injector.get(PortfolioStorageService);
    fixture.detectChanges();
  });

  describe('when active portfolio is null', () => {

    beforeEach(async(() => {
      activePortfolioSvc.setActivePortfolio(null);
    }));

    it('holdings should emit an empty array', (done) => {

      component.holdings.subscribe((h: Holding[]) => {
        expect(h).toBeDefined();
        expect(h.length).toBe(0);
        done();
      });

    });

  });
});
