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

    describe('each row', () => {

      let subject: DebugElement;
      let subject_holding: Holding;

      beforeEach(() => {
        subject = holding_rows[0];
        subject_holding = test_holdings[0];
      });

      it('should display the holding\'s symbol', () => {
        expect(subject.nativeElement.innerText).toContain(subject_holding.symbol);
      });

      it('should display the holding\'s purchase price', () => {
        expect(subject.nativeElement.innerText).toContain(subject_holding.purchasePrice);
      });

      it('should display the holding\'s quantity purchased', () => {
        expect(subject.nativeElement.innerText).toContain(subject_holding.quantity);
      });

      describe('when clicked', () => {

        beforeEach(() => {
          // spies
          spyOn(component, 'clickedRow').and.callThrough();
          spyOn(component.click, 'emit');
          // click row
          subject.triggerEventHandler('click', null);
          fixture.detectChanges();
        });

        it('should call a click event handler', () => {
          // expect handler to have been called
          expect(component.clickedRow).toHaveBeenCalled();
          // expect handler to have been called with the holding that was clicked
          expect(component.clickedRow).toHaveBeenCalledWith(subject_holding);
        });
        it('should emit a click event', () => {
          // expect event to be emitted
          expect(component.click.emit).toHaveBeenCalled();
          // expect event to be emitted with holding that was clicked
          expect(component.click.emit).toHaveBeenCalledWith(subject_holding);
        });
      });

      describe('should have a remove button', () => {

        let button: DebugElement;
        let className = '.remove-btn';

        beforeEach(() => {
          button = subject.query(By.css(className));
        });

        it('displayed', () => {
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

          it('should emit a remove event', () => {
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
