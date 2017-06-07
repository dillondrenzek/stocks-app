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
    return this.activePortfolioService.activePortfolio
      .map((p: Portfolio) => PortfolioReducers.totalValue(p));
  }

  get holdings(): Observable<Holding[]> {
    return this.activePortfolioService.activePortfolio.map((p: Portfolio) => p.holdings);
  }

  saveNewHolding(h: Holding) {
    this.activePortfolioService.addHolding(h);
  }


  ngOnInit() {
  }

}
