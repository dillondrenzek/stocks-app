import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioService } from './services/portfolio.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    PortfolioService
  ]
})
export class PortfolioModule { }
