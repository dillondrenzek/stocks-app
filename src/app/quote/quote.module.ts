import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { QuotePageComponent } from './quote-page/quote-page.component';
import { QuoteService } from './quote.service';
import { QuoteListComponent } from './quote-list/quote-list.component';
import { QuoteDisplayComponent } from './quote-display/quote-display.component';


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
    QuoteDisplayComponent
  ],
  providers: [QuoteService]
})
export class QuoteModule { }
