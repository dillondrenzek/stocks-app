import { NgModule }         from '@angular/core';
import { FormsModule }      from '@angular/forms';
import { CommonModule }     from '../common/common.module';

import { QuotePageComponent }         from './quote-page/quote-page.component';
import { QuoteListComponent }         from './quote-list/quote-list.component';
import { QuoteDisplayComponent }      from './quote-display/quote-display.component';
import { QuotesAnalyticsComponent }   from './quotes-analytics/quotes-analytics.component';

import { QuoteService }         from './services/quote.service';
import { SavedQuotesService }   from './services/saved-quotes.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    QuotePageComponent
  ],
  declarations: [
    QuotePageComponent,
    QuoteListComponent,
    QuoteDisplayComponent,
    QuotesAnalyticsComponent
  ],
  providers: [
    QuoteService,
    SavedQuotesService
  ]
})
export class QuoteModule { }
