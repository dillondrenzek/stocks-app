import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivePortfolioService } from './services/active-portfolio.service';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { HoldingsTableComponent } from './holdings-table/holdings-table.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    PortfolioPageComponent
  ],
  declarations: [
    PortfolioPageComponent,
    HoldingsTableComponent
  ],
  providers: [
    ActivePortfolioService
  ]
})
export class PortfolioModule { }
