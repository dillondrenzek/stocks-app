import { Component, OnInit, Input } from '@angular/core';

import { Quote } from '../quote';

@Component({
  selector: 'app-quotes-analytics',
  templateUrl: './quotes-analytics.component.html',
  styleUrls: ['./quotes-analytics.component.css']
})
export class QuotesAnalyticsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
  }

  @Input() quotes: Quote[] = [];

  get lastPriceSum(): number {
    return this.quotes
      .map(quote => quote.lastPrice)
      .reduce((prev: number, curr: number) => prev + curr, 0);
  }
  get dayChange(): number {
    return this.quotes
      .map(quote => quote.change)
      .reduce((prev: number, curr: number) => prev + curr, 0);
  }
  get dayChangePercent(): number {
    return (this.lastPriceSum) ? (this.dayChange / this.lastPriceSum * 100) : 0;
  }
}
