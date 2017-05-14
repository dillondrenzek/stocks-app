import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotePageComponent } from './quote-page.component';

// Test Dependencies
import { QuoteSymbolComponent } from '../quote-symbol/quote-symbol.component';
import { QuoteListComponent } from '../quote-list/quote-list.component';

describe('QuotePageComponent', () => {
  let component: QuotePageComponent;
  let fixture: ComponentFixture<QuotePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        QuotePageComponent, 
        QuoteListComponent,
        QuoteSymbolComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
