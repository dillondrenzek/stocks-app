import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Holding } from '../holding';
import { HoldingsTableComponent } from './holdings-table.component';

import * as holding_ex from '../testing/examples/holding';

describe('HoldingsTableComponent', () => {
  let component: HoldingsTableComponent;
  let fixture: ComponentFixture<HoldingsTableComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoldingsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoldingsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debug = fixture.debugElement;
  });


  describe('when displaying no holdings', () => {

    beforeEach(() => {
      // set no holdings
      component.holdings = [];
      fixture.detectChanges();
    });

    it('should show an empty state', () => {
      let className = '.empty-state';
      expect(debug.query(By.css(className))).not.toBeNull();
    });
  });


  describe('when displaying one or more holdings', () => {

    let holding_rows: DebugElement[];
    let test_holdings: Holding[] = [
      holding_ex.generateRandomHolding(),
      holding_ex.generateRandomHolding(),
      holding_ex.generateRandomHolding(),
      holding_ex.generateRandomHolding()
    ];

    beforeEach(() => {
      // set holdings
      component.holdings = test_holdings;
      fixture.detectChanges();
      // get template rows
      holding_rows = debug.queryAll(By.css('tr.holding'));
    });

    it('should display one row per holding', () => {
      expect(holding_rows.length).toEqual(test_holdings.length);
    });

    describe('each row should display', () => {

      let subject: DebugElement;
      let subject_holding: Holding;

      beforeEach(() => {
        subject = holding_rows[0];
        subject_holding = test_holdings[0];
      });

      describe('the holding\'s', () => {
        it('symbol', () => {
          expect(subject.nativeElement.innerText).toContain(subject_holding.symbol);
        });
        it('purchase price', () => {
          expect(subject.nativeElement.innerText).toContain(subject_holding.purchasePrice);
        });
        it('quantity purchased', () => {
          expect(subject.nativeElement.innerText).toContain(subject_holding.quantity);
        });
      });

      describe('a remove button', () => {

        let button: DebugElement;
        let className = '.remove-btn';

        beforeEach(() => {
          button = subject.query(By.css(className));
        });

        it('in the row', () => {
          expect(button).not.toBeNull();
        });

        describe('when clicked', () => {

          beforeEach(() => {
            // spy
            spyOn(component, 'clickedRemoveButton').and.callThrough();
            spyOn(component.removeHolding, 'emit');

            // click remove button
            button.triggerEventHandler('click', null);
            fixture.detectChanges();
          });

          it('should call a click event handler', () => {
            // expect handler to have been called
            expect(component.clickedRemoveButton).toHaveBeenCalled();
            // expect handler to have been called with the holding to be removed
            expect(component.clickedRemoveButton).toHaveBeenCalledWith(subject_holding);
          });

          it('a remove event should be emitted', () => {
            // expect event to be emitted
            expect(component.removeHolding.emit).toHaveBeenCalled();
            // expect event to be emitted with holding to be removed
            expect(component.removeHolding.emit).toHaveBeenCalledWith(subject_holding);
          });
        });
      });
    });
  });
});
