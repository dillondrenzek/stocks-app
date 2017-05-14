import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { QuoteService } from '../quote.service';

@Component({
  selector: 'app-quote-page',
  templateUrl: './quote-page.component.html',
  styleUrls: ['./quote-page.component.css']
})
export class QuotePageComponent implements OnInit {

  constructor(private quoteService: QuoteService) { }

  quoteSearchInput: string = '';

  get lastPrice(): Observable<number> {
    return this.quoteService.activeQuote.map(q => q.lastPrice);
  }

  search() {
    this.quoteService.searchQuote(this.quoteSearchInput);
  }

  ngOnInit() {}
}
