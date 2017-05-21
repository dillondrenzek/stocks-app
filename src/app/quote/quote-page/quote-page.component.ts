import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { QuoteService } from '../services/quote.service';

import { Quote } from '../quote';

@Component({
  selector: 'app-quote-page',
  templateUrl: './quote-page.component.html',
  styleUrls: ['./quote-page.component.css']
})
export class QuotePageComponent implements OnInit {

  constructor(private quoteService: QuoteService) { }

  quoteSearchInput: string = 'ADBE';

  get activeQuote(): Observable<Quote> {
    return this.quoteService.activeQuote;
  }

  get savedQuotes(): Observable<Quote[]> {
    return this.quoteService.savedQuotes;
  }

  save() {
    this.quoteService.saveActiveQuote();
  }

  search() {
    this.quoteService.searchQuote(this.quoteSearchInput);
  }

  refreshSavedQuotes() {
    // this.quoteService.
  }

  clearSavedQuotes() {
    this.quoteService.clearSavedQuotes();
  }

  ngOnInit() {
    this.search();
  }
}
