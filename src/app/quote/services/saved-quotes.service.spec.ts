import { TestBed, inject } from '@angular/core/testing';

import * as testing from '../testing';
import { Quote } from '../quote';
import { SavedQuotesService } from './saved-quotes.service';

describe('SavedQuotesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SavedQuotesService]
    });
  });

  it('should save a quote', inject([SavedQuotesService], (service: SavedQuotesService) => {
    let test: Quote = testing.TEST_QUOTE;

    service.saveQuote(test).subscribe((q: Quote) => {
      let saved = service.getSavedQuotes();
      // expect saved to contain the returned copy of saveQuote
      expect(saved).toContain(q);
      // expect saved symbols to contain symbol
      expect(saved.map(x => x.symbol)).toContain(test.symbol);
    });
  }));



  it('should remove a quote', inject([SavedQuotesService], (service: SavedQuotesService) => {
    let test: Quote = testing.TEST_QUOTE;
    // first save a quote
    service.saveQuote(test)
      // then remove it
      .flatMap(q => service.removeQuote(q))
      .subscribe((q: Quote) => {
        let saved = service.getSavedQuotes();
        // expect saved not to contain the quote
        expect(saved).not.toContain(q);
        // expect saved symbols not to contain symbol
        expect(saved.map(x => x.symbol)).not.toContain(test.symbol);
      });
  }));



  it('clear all quotes', inject([SavedQuotesService], (service: SavedQuotesService) => {
    let saveQuote: Quote = testing.TEST_QUOTE;
    // first save a quote
    service.saveQuote(saveQuote)
      // clear all quotes
      .flatMap(q => service.clearQuotes())
      .subscribe(() => {
        // expect array to be zero-length
        expect(service.getSavedQuotes().length).toEqual(0);
      });
  }));
});
