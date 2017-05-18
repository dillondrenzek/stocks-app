import { TestBed, async } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '../common/common.module';

import { QuotePageComponent } from '../quote/quote-page/quote-page.component';
import { QuoteListComponent } from '../quote/quote-list/quote-list.component';
import { QuoteDisplayComponent } from '../quote/quote-display/quote-display.component';
import { QuotesAnalyticsComponent } from '../quote/quotes-analytics/quotes-analytics.component';
import { QuoteService } from '../quote/services/quote.service';
import { MockQuoteService } from '../quote/testing';

import { MarkitQuoteService } from '../vendor/markit';
import { MockMarkitQuoteService} from '../vendor/markit/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule
      ],
      declarations: [
        AppComponent,
        QuotePageComponent,
        QuoteListComponent,
        QuoteDisplayComponent,
        QuotesAnalyticsComponent
      ],
      providers: [
        { provide: QuoteService, useClass: MockQuoteService },
        { provide: MarkitQuoteService, useClass: MockMarkitQuoteService }
      ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
