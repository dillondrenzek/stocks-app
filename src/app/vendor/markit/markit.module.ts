import { NgModule } from '@angular/core';

import { MarkitQuoteService } from './markitQuote.service';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    {
      provide: MarkitQuoteService,
      useClass: MarkitQuoteService
    }
  ]
})
export class MarkitModule { }
