import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioService } from './services/portfolio.service';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    PortfolioPageComponent
  ],
  declarations: [
    PortfolioPageComponent
  ],
  providers: [
    PortfolioService
  ]
})
export class PortfolioModule { }
