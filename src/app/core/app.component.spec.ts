import { TestBed, async, ComponentFixture } from '@angular/core/testing';

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
import * as tokens from './tokens';

const testAppVersion = 'v0.1.5';

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
        { provide: MarkitQuoteService, useClass: MockMarkitQuoteService },
        { provide: tokens.APP_VERSION, useValue: testAppVersion }
      ]
    }).compileComponents();
  }));

  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should cache the app version', () => {
    expect(component.version).toEqual(testAppVersion);
  });
});
