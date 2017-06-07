import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ActivePortfolioService } from './services/active-portfolio.service';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';
import { HoldingsTableComponent } from './holdings-table/holdings-table.component';
import { HoldingFormComponent } from './holding-form/holding-form.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    PortfolioPageComponent
  ],
  declarations: [
    PortfolioPageComponent,
    HoldingsTableComponent,
    HoldingFormComponent
  ],
  providers: [
    ActivePortfolioService
  ]
})
export class PortfolioModule { }
