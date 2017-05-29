import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MarkitModule } from './vendor/markit/markit.module';
import { QuoteModule } from './quote/quote.module';
import { PortfolioModule } from './portfolio/portfolio.module';
import { AppComponent } from './core/app.component';
import * as tokens from './core/tokens';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MarkitModule,
    QuoteModule,
    PortfolioModule
  ],
  providers: [
    { provide: tokens.USE_LOCAL_STORAGE, useValue: true },
    { provide: tokens.APP_VERSION, useValue: 'v0.1.6' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
