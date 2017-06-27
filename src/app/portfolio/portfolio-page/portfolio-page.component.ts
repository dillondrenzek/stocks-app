import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivePortfolioService } from '../services/active-portfolio.service';
import { Portfolio, PortfolioReducers } from '../portfolio';
import { Holding } from '../holding';

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

  saveNewHolding(h: Holding) {
    // this.activePortfolioService.addHolding(h);
  }


  ngOnInit() {
  }

}
