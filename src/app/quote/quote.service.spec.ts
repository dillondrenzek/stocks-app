import { TestBed, inject } from '@angular/core/testing';

import { QuoteService } from './quote.service';
import { MockQuoteService } from './testing';

import { MarkitQuoteService } from '../vendor/markit';
import { MockMarkitQuoteService} from '../vendor/markit/testing';

describe('QuoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: QuoteService, useClass: MockQuoteService },
        { provide: MarkitQuoteService, useClass: MockMarkitQuoteService }
      ]
    });
  });

  describe('.searchQuote()', () => {

    xit('- should emit the active quote when successful', inject([QuoteService], (service: QuoteService) => {}));

    xit('- should set the active quote when successful', inject([QuoteService], (service: QuoteService) => {}));

  });

  describe('.saveQuote()', () => {

    xit('- should save the active quote when no symbol is passed', inject([QuoteService], (service: QuoteService) => {}));

    xit('- should save the quote with the given symbol when the symbol is passed', inject([QuoteService], (service: QuoteService) => {}));

    xit('- should extend the length of the saved quotes array by 1', inject([QuoteService], (service: QuoteService) => {}));

  });
  describe('.clearSavedQuotes()', () => {

    xit('- should reset the saved quotes array to a length of 0', inject([QuoteService], (service: QuoteService) => {}));

  });
});
