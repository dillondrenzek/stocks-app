import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '../common/common.module';
import { QuotePageComponent } from './quote-page/quote-page.component';
import { QuoteService } from './quote.service';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { QuoteDisplayComponent } from './quote-display/quote-display.component';
import { QuotesAnalyticsComponent } from './quotes-analytics/quotes-analytics.component';


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
  providers: [QuoteService]
})
export class QuoteModule { }
