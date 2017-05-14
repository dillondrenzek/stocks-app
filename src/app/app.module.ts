import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MarkitModule } from './vendor/markit/markit.module';
import { QuoteModule } from './quote/quote.module';
import { AppComponent } from './core/app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MarkitModule,
    QuoteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
