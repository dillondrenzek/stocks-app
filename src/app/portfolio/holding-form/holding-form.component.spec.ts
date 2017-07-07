import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleChange, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { Holding } from '../holding';
import { HoldingFormComponent } from './holding-form.component';
import * as holding_ex from '../testing/examples/holding';

describe('HoldingFormComponent', () => {
  let component: HoldingFormComponent;
  let fixture: ComponentFixture<HoldingFormComponent>;
  let debug: DebugElement;

  let debugElementLabel = (propName: string): DebugElement => {
    let selector = 'label[for="'+propName+'"]';
    return debug.query(By.css(selector));
  };

  let debugElementInput = (propName: string): DebugElement => {
    let selector = 'input[name="'+propName+'"]';
    return debug.query(By.css(selector));
  };

  let testTemplateForProperty = (propName: string) => {
    it('a label exists', () => {
      expect(debugElementLabel(propName)).not.toBeNull();
    });
    it('an input exists', () => {
      expect(debugElementInput(propName)).not.toBeNull();
    });
  };

  let testInputValueForProperty = (propName: string, value: string) => {
    it('an input shows the correct value', () => {});
  };






  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [ HoldingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoldingFormComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement;
    fixture.detectChanges();
  });



  it('should create', () => {
    expect(component).toBeTruthy();
  });



  describe('displays a Holding\'s', () => {

    // test holding value
    let holding: Holding = holding_ex.generateRandomHolding();

    // standard test for a Holding's property
    let testProperty = (propName: string) => {
      return () => {
        // test template for common HTML elements
        testTemplateForProperty(propName);
      };
    };

    describe('symbol', testProperty('symbol'));

    describe('purchase price', testProperty('purchasePrice'));

    describe('quantity', testProperty('quantity'));

    describe('date purchased', testProperty('datePurchased'));
  });

  // label for the symbol exists
  // input for the symbol value exists
  // input shows correct value


  // it('accepts an input Holding as a starting value', () => {
  //   let startValue: Holding = {
  //     symbol: 'START',
  //     purchasePrice: 123.90,
  //     quantity: 3,
  //     datePurchased: ''
  //   };
  //   component.startValue = startValue;
  //   component.ngOnChanges({
  //     'startValue': new SimpleChange(null, startValue, false)
  //   });
  //   fixture.detectChanges();
  //
  //   let formValue: any = component.value;
  //
  //   for(let key in startValue) {
  //     expect(formValue[key]).toEqual(startValue[key]);
  //   }
  // });
  //
  // it('resets the form value', () => {
  //   let startValue: Holding = {
  //     symbol: 'START',
  //     purchasePrice: 123.90,
  //     quantity: 3,
  //     datePurchased: ''
  //   };
  //   component.startValue = startValue;
  //   component.ngOnChanges({
  //     'startValue': new SimpleChange(null, startValue, false)
  //   });
  //   fixture.detectChanges();
  //   for(let key in startValue) {
  //     // expect values to be there
  //     expect(component.value[key]).toEqual(startValue[key]);
  //   }
  //   // perform test
  //   component.reset();
  //   fixture.detectChanges();
  //
  //   for(let key in startValue) {
  //     // expect values to be falsy
  //     expect(component.value[key]).toBeFalsy();
  //   }
  //
  // });
});
