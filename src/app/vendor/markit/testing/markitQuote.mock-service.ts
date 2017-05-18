import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable, Subscriber } from 'rxjs/Rx';

import { MarkitQuote } from '../MarkitQuote';

@Injectable()
export class MockMarkitQuoteService {
  constructor() {  }

  DATA_SRC = 'http://dev.markitondemand.com/Api/v2/Quote/jsonp';

  getQuote(quote: string): Observable<MarkitQuote> {
    return Observable.create((obs: Subscriber<MarkitQuote>) => {

      return {
        Status: 'SUCCESS',
        Name: 'Test',
        Symbol: quote,
        LastPrice: 123.45,
        Change: 0.12,
        ChangePercent: 1.34,
        Timestamp: 'timestap',
        MSDate: 'msdate?',
        MarketCap: 0,
        Volume: 0.00,
        ChangeYTD: 0.00,
        ChangePercentYTD: 0.00,
        High: 0.00,
        Low: 0.00,
        Open: 0.00
      };

    })
  }
}
