import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteSymbolComponent } from './quote-symbol.component';
import { QuoteService } from '../quote.service';

describe('QuoteSymbolComponent', () => {
  let component: QuoteSymbolComponent;
  let fixture: ComponentFixture<QuoteSymbolComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        QuoteSymbolComponent
      ],
      providers: [
        QuoteService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteSymbolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
