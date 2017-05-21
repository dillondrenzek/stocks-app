import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { QuotePageComponent } from './quote-page.component';

import { CommonModule } from '../../common/common.module';

// Test Dependencies
import { QuoteDisplayComponent } from '../quote-display/quote-display.component';
import { QuoteListComponent } from '../quote-list/quote-list.component';
import { QuotesAnalyticsComponent } from '../quotes-analytics/quotes-analytics.component';
import { QuoteService } from '../services/quote.service';
import { MockQuoteService } from '../testing';

import { MarkitQuoteService } from '../../vendor/markit';
import { MockMarkitQuoteService} from '../../vendor/markit/testing';

describe('QuotePageComponent', () => {
  let component: QuotePageComponent;
  let fixture: ComponentFixture<QuotePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule
      ],
      declarations: [
        QuotePageComponent,
        QuoteListComponent,
        QuoteDisplayComponent,
        QuotesAnalyticsComponent
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


});
