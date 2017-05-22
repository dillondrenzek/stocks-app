import { DebugElement } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '../../common/common.module';
import * as testing from '../testing';
import { Quote } from '../quote';
import { QuoteDisplayComponent } from './quote-display.component';

describe('QuoteDisplayComponent', () => {
  let component: QuoteDisplayComponent;
  let fixture: ComponentFixture<QuoteDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [ QuoteDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('with an input Quote', () => {

    let inputQuote: Quote;
    let debug: DebugElement;
    beforeEach(() => {
      inputQuote = testing.TEST_QUOTE;
      component.quote = inputQuote;
      fixture.detectChanges();
      debug = fixture.debugElement;
    });

    it('should display the name', () => {
      expect(debug.nativeElement.innerText).toContain(inputQuote.name);
    });
    it('should display the symbol', () => {
      expect(debug.nativeElement.innerText).toContain(inputQuote.symbol);
    });
    it('should display the lastPrice', () => {
      let expected = new DecimalPipe('en-US').transform(inputQuote.lastPrice, '1.2-2');
      expect(debug.nativeElement.innerText).toContain(expected);
    });
    it('should display the change', () => {
      let expected = new DecimalPipe('en-US').transform(inputQuote.change, '1.2-2');
      expect(debug.nativeElement.innerText).toContain(expected);
    });
    it('should display the changePercent', () => {
      let expected = new DecimalPipe('en-US').transform(inputQuote.changePercent, '1.2-2');
      expect(debug.nativeElement.innerText).toContain(expected);
    });
  });

});
