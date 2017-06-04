import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { Holding } from '../holding';
import { HoldingsTableComponent } from './holdings-table.component';

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

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display a row for each holding', () => {
    let testHoldings: Holding[] = [
      { symbol: 'TEST1', purchasePrice: 0.00, datePurchased: '', quantity: 3},
      { symbol: 'TEST2', purchasePrice: 0.00, datePurchased: '', quantity: 4},
      { symbol: 'TEST3', purchasePrice: 0.00, datePurchased: '', quantity: 2}
    ];

    // set components holdings
    component.holdings = testHoldings;
    fixture.detectChanges();

    // expect there to be a table row for each holding given
    expect(debug.queryAll(By.css('tbody tr')).length).toEqual(testHoldings.length);
  });

  describe('rows should display each holdings\':', () => {

    let testHoldings: Holding[];
    let innerText: string;

    beforeEach(() => {
      testHoldings = [
        { symbol: 'TEST1', purchasePrice: 24.50, datePurchased: '', quantity: 3}
      ];

      // set components holdings
      component.holdings = testHoldings;
      fixture.detectChanges();
      innerText = debug.queryAll(By.css('tbody tr'))[0].nativeElement.innerText;
    })

    it('- symbol', () => {
      testHoldings.map(h => h.symbol)
        .forEach((val) => {
          expect(innerText).toContain(val);
        });
    });

    it('- quantity purchased', () => {
      testHoldings.map(h => h.quantity)
        .forEach((val) => {
          expect(innerText).toContain(val);
        });
    });

    it('- purchase price', () => {
      testHoldings.map(h => h.purchasePrice)
        .forEach((val) => {
          expect(innerText).toContain(val);
        });
    });

    // it('- date position created', () => {
    //   testHoldings.map(h => h.datePurchased)
    //     .forEach((val) => {
    //       expect(innerText).toContain(val);
    //     });
    // });

  })
});
