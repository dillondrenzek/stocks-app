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




});
