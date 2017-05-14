import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { QuotePageComponent } from './quote-page.component';

// Test Dependencies
import { QuoteDisplayComponent } from '../quote-display/quote-display.component';
import { QuoteListComponent } from '../quote-list/quote-list.component';
import { QuoteService } from '../quote.service';
import { MockQuoteService } from '../testing';

import { MarkitQuoteService } from '../../vendor/markit';
import { MockMarkitQuoteService} from '../../vendor/markit/testing';

describe('QuotePageComponent', () => {
  let component: QuotePageComponent;
  let fixture: ComponentFixture<QuotePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule
      ],
      declarations: [
        QuotePageComponent,
        QuoteListComponent,
        QuoteDisplayComponent
      ],
      providers: [
        { provide: QuoteService, useClass: MockQuoteService },
        { provide: MarkitQuoteService, useClass: MockMarkitQuoteService }
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
