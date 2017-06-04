import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ActivePortfolioService } from '../services/active-portfolio.service';
import { Portfolio } from '../portfolio';
import { Holding } from '../holding';

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.css']
})
export class PortfolioPageComponent implements OnInit {

  constructor(private activePortfolioService: ActivePortfolioService) { }

  get holdings(): Observable<Holding[]> {
    return this.activePortfolioService.activePortfolio.map((p: Portfolio) => p.holdings);
  }

  addRandomHolding() {
    this.activePortfolioService.addHolding({
      symbol: 'TEST',
      purchasePrice: 10.94,
      datePurchased: '',
      quantity: 3
    });
  }


  ngOnInit() {
  }

}
