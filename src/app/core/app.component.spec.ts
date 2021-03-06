import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '../common/common.module';

import { PortfolioPageComponent } from '../portfolio/portfolio-page/portfolio-page.component';
import { HoldingsTableComponent } from '../portfolio/holdings-table/holdings-table.component';
import { HoldingFormComponent } from '../portfolio/holding-form/holding-form.component';
import { ActivePortfolioService } from '../portfolio/services/active-portfolio.service';
import { PortfolioStorageService } from '../portfolio/services/portfolio-storage.service';

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
  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     imports: [
  //       CommonModule,
  //       FormsModule,
  //       ReactiveFormsModule
  //     ],
  //     declarations: [
  //       AppComponent,
  //       PortfolioPageComponent,
  //       HoldingsTableComponent,
  //       HoldingFormComponent
  //     ],
  //     providers: [
  //       ActivePortfolioService,
  //       PortfolioStorageService,
  //       { provide: QuoteService, useClass: MockQuoteService },
  //       { provide: MarkitQuoteService, useClass: MockMarkitQuoteService },
  //       { provide: tokens.APP_VERSION, useValue: testAppVersion },
  //       { provide: tokens.USE_LOCAL_STORAGE, useValue: false }
  //     ]
  //   }).compileComponents();
  // }));
  //
  // let fixture: ComponentFixture<AppComponent>;
  // let component: AppComponent;
  //
  // beforeEach(() => {
  //   fixture = TestBed.createComponent(AppComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });
  //
  // it('should create the app', () => {
  //   expect(component).toBeTruthy();
  // });
  //
  // it('should cache the app version', () => {
  //   expect(component.version).toEqual(testAppVersion);
  // });
});
