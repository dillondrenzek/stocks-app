import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
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
  let debug: DebugElement;

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
    debug = fixture.debugElement;
    activePortfolioSvc = debug.injector.get(ActivePortfolioService);
    portfolioStorageSvc = debug.injector.get(PortfolioStorageService);
    fixture.detectChanges();
  });

  it('should call saveNewHolding when add button is clicked', () => {

    let addButton: DebugElement = debug.query(By.css('button.add-holding'));
    spyOn(component, 'saveNewHolding');

    // perform
    addButton.triggerEventHandler('click', null);
    expect(component.saveNewHolding).toHaveBeenCalled();
  });

  describe('when active portfolio is null', () => {

    beforeEach(async(() => {
      activePortfolioSvc.setActivePortfolio(null);
      // fixture.detectChanges();
    }));

    it('total value should be 0.00', () => {
      component.totalValue.subscribe((val: number) => {
        expect(val).toEqual(0.00);
      });
    });

    it('holdings should emit an empty array', () => {
      component.holdings.subscribe((h: Holding[]) => {
        expect(h).toBeDefined();
        expect(h.length).toBe(0);
      });
    });
  });
});
