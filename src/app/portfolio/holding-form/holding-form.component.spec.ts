import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SimpleChange } from '@angular/core';
import { Holding } from '../holding';
import { HoldingFormComponent } from './holding-form.component';

describe('HoldingFormComponent', () => {
  let component: HoldingFormComponent;
  let fixture: ComponentFixture<HoldingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoldingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoldingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('value is a Holding', () => {
    let formValue: any = component.value;
    expect(formValue.hasOwnProperty('symbol')).toBe(true);
    expect(formValue.hasOwnProperty('purchasePrice')).toBe(true);
    expect(formValue.hasOwnProperty('quantity')).toBe(true);
    expect(formValue.hasOwnProperty('datePurchased')).toBe(true);
  });

  it('accepts an input Holding as a starting value', () => {
    let startValue: Holding = {
      symbol: 'START',
      purchasePrice: 123.90,
      quantity: 3,
      datePurchased: ''
    };
    component.startValue = startValue;
    component.ngOnChanges({
      'startValue': new SimpleChange(null, startValue, false)
    });
    fixture.detectChanges();

    let formValue: any = component.value;

    for(let key in startValue) {
      expect(formValue[key]).toEqual(startValue[key]);
    }
  });
});
