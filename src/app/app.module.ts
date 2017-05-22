import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MarkitModule } from './vendor/markit/markit.module';
import { QuoteModule } from './quote/quote.module';
import { AppComponent } from './core/app.component';
import { USE_LOCAL_STORAGE } from './core/tokens';

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
  providers: [
    { provide: USE_LOCAL_STORAGE, useValue: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
