import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { QuoteService } from '../quote.service';

import { Quote } from '../quote.model';

@Component({
  selector: 'app-quote-page',
  templateUrl: './quote-page.component.html',
  styleUrls: ['./quote-page.component.css']
})
export class QuotePageComponent implements OnInit {

  constructor(private quoteService: QuoteService) { }

  quoteSearchInput: string = '';

  get activeQuote(): Observable<Quote> {
    return this.quoteService.activeQuote;
  }

  get savedQuotes(): Observable<Quote[]> {
    return this.quoteService.savedQuotes;
  }

  save() {
    this.quoteService.saveQuote();
  }

  search() {
    this.quoteService.searchQuote(this.quoteSearchInput);
  }

  clearSavedQuotes() {
    this.quoteService.clearSavedQuotes();
  }

  ngOnInit() {}
}
