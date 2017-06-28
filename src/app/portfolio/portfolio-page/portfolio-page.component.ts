import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivePortfolioService } from '../services/active-portfolio.service';
import { Portfolio, PortfolioReducers } from '../portfolio';
import { Holding } from '../holding';

import { HoldingFormComponent } from '../holding-form/holding-form.component';
import { HoldingsTableComponent } from '../holdings-table/holdings-table.component';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent implements OnInit {

  constructor(private activePortfolioService: ActivePortfolioService) { }

  get totalValue(): Observable<number> {
    return this.activePortfolioService.activePortfolio.map((p: Portfolio) => {
      return (!!p) ? PortfolioReducers.totalValue(p) : 0.00;
    });
  }

  get holdings(): Observable<Holding[]> {
    return this.activePortfolioService.activePortfolio.map((p: Portfolio) => {
      return (!!p) ? p.holdings : [];
    });
  }

  @ViewChild(HoldingFormComponent) holdingForm: HoldingFormComponent;
  @ViewChild(HoldingsTableComponent) holdingsTable: HoldingsTableComponent;

  /**
   * Template Handler: Clicked Add Button
   * - adds holding to active portfolio service
   * - resets the holding form's value
   */
  clickedAddHoldingButton(){
    // get current holding form value
    let newHolding: Holding = this.holdingForm.value;
    // add holding to active portfolio
    this.activePortfolioService.addHolding(newHolding);
    // reset holding form
    this.holdingForm.reset();
  }

  /**
   * Template handler: Holdings table removed a holding
   */
  tableRemovedHolding(h: Holding) {
    this.activePortfolioService.removeHolding(h);
  }

  ngOnInit() {
  }

}
