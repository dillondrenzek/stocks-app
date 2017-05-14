import { TestBed, inject } from '@angular/core/testing';

import { QuoteService } from './quote.service';

import { MarkitQuoteService, MockMarkitQuoteService } from '../vendor/markit';

describe('QuoteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        QuoteService,
        MarkitQuoteService
      ]
    });
  });

  it('should ...', inject([QuoteService], (service: QuoteService) => {
    expect(service).toBeTruthy();
  }));
});
