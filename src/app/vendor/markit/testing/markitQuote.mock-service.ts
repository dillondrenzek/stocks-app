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

      // $.ajax({
      //   data: { symbol: quote },
      //   url: this.DATA_SRC,
      //   dataType: "jsonp",
      //   success: (res: MarkitQuote) => {
      //     obs.next(res);
      //     obs.complete();
      //   },
      //   error: (err) => {
      //     obs.error(err);
      //     obs.complete();
      //   }
      // });

    })
  }
}
