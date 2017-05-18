import { TestBed, inject } from '@angular/core/testing';

import { Quote } from '../quote';
import { QuoteService } from './quote.service';
import { MockQuoteService } from '../testing';

import { MarkitQuoteService } from '../../vendor/markit';
import { MockMarkitQuoteService} from '../../vendor/markit/testing';

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

    it('- should emit the active quote when successful', inject([QuoteService], (service: QuoteService) => {
      // set up spy
      const callback = () => {};
      const obj = {callback: callback};
      spyOn(obj, 'callback');
      // subscribe with spy'd function
      service.activeQuote.subscribe(obj.callback);
      // perform search
      const test_expect = 'TEST';
      service.searchQuote(test_expect);
      // expect
      expect(obj.callback).toHaveBeenCalled();
    }));

    it('- should set the active quote when successful', inject([QuoteService], (service: QuoteService, done) => {
      let symbol = 'TEST';
      service.activeQuote.subscribe((quote: Quote) => {
        expect(quote.symbol).toEqual(symbol);
        done();
      });
      service.searchQuote(symbol);
    }));

  });

});
