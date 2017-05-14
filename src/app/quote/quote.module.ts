import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuotePageComponent } from './quote-page/quote-page.component';
import { QuoteSymbolComponent } from './quote-symbol/quote-symbol.component';
import { QuoteService } from './quote.service';
import { QuoteListComponent } from './quote-list/quote-list.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    QuotePageComponent,
    QuoteSymbolComponent
  ],
  declarations: [
    QuotePageComponent,
    QuoteSymbolComponent,
    QuoteListComponent
  ],
  providers: [QuoteService]
})
export class QuoteModule { }
