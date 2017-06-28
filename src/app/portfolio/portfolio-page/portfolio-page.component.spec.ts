import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
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

import * as holding_ex from '../testing/examples/holding';

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
    activePortfolioSvc = fixture.componentRef.injector.get(ActivePortfolioService);
    portfolioStorageSvc = fixture.componentRef.injector.get(PortfolioStorageService);
    fixture.detectChanges();
  });

  describe('when add button is clicked', () => {

    let addButton: DebugElement;

    beforeEach(() => {

      // spy: template event handlers
      spyOn(component, 'clickedAddHoldingButton').and.callThrough(); // NOTE callThrough: next two spies will get called, not intercepted
      // spy: handler callees
      spyOn(component.holdingForm, 'reset');
      spyOn(activePortfolioSvc, 'addHolding');

      // perform click
      addButton = debug.query(By.css('button.add-holding'));
      addButton.triggerEventHandler('click', null);
      fixture.detectChanges();
    });

    it('should call the event handler', () => {
      expect(component.clickedAddHoldingButton).toHaveBeenCalled();
    });

    it('should add the holding form\'s value as a holding to the active portfolio', () => {
      // expect addHolding to be called
      expect(activePortfolioSvc.addHolding).toHaveBeenCalled();
      // expect addHolding to be called with the holding form's value
      const expected = component.holdingForm.value;
      expect(activePortfolioSvc.addHolding).toHaveBeenCalledWith(expected);
    });

    it('should reset the new holding form\'s value', () => {
      expect(component.holdingForm.reset).toHaveBeenCalled();
    });

  });



  describe('has a holdings table', () => {

    let subject: DebugElement;

    beforeEach(() => {
      subject = debug.query(By.directive(HoldingsTableComponent));
    });

    it('that is defined', () => {
      // expect view child to be defined
      expect(component.holdingsTable).toBeDefined();
      // expect debug element to be defined
      expect(subject).not.toBeNull();
    })

    it('that displays the portfolios holdings', fakeAsync(() => {
      component.holdings.subscribe((holdings: Holding[]) => {
        expect(component.holdingsTable.holdings).toEqual(holdings);
      });
    }));

    describe('when harvest table removes a row', () => {

      const test_holding: Holding = holding_ex.generateRandomHolding();

      beforeEach(() => {
        // set up spies
        spyOn(component, 'tableRemovedHolding').and.callThrough();
        spyOn(activePortfolioSvc, 'removeHolding');
        // simulate holdings table remove holding event
        component.holdingsTable.removeHolding.emit(test_holding);
        fixture.detectChanges();
      });

      it('should call the event handler', () => {
        expect(component.tableRemovedHolding).toHaveBeenCalledWith(test_holding);
      });

      it('should call the active portfolio service with the holding to be called', () => {
        expect(activePortfolioSvc.removeHolding).toHaveBeenCalledWith(test_holding);
      });
    });
  });




  describe('when active portfolio is null', () => {

    beforeEach(() => {
      activePortfolioSvc.setActivePortfolio(null);
    });

    it('total value should be 0.00', () => {
      component.totalValue.subscribe((val: number) => {
        expect(val).toEqual(0.00);
      });
    });

    it('holdings should emit an empty array', fakeAsync(() => {
      component.holdings.subscribe((h: Holding[]) => {
        expect(h).toBeDefined();
        expect(h.length).toBe(0);
      });
    }));
  });




});
