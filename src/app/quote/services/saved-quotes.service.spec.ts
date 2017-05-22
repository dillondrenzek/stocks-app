import { TestBed, inject, async } from '@angular/core/testing';

import * as testing from '../testing';
import { USE_LOCAL_STORAGE } from '../../core/tokens';
import { Quote } from '../quote';
import { SavedQuotesService } from './saved-quotes.service';

describe('SavedQuotesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SavedQuotesService,
        { provide: USE_LOCAL_STORAGE, useValue: false }
      ]
    });
  });

  it('gets the saved quotes', inject([SavedQuotesService], (service: SavedQuotesService) => {
    let preSave = service.getSavedQuotes();
    // always return something
    expect(preSave).toBeDefined();
    // return an array
    expect(preSave.length).toEqual(0);

    let test = testing.TEST_QUOTE;
    service.saveQuote(test).subscribe((saved) => {
      // expect saved quotes to increase when saved to
      expect(service.getSavedQuotes().length).toEqual(preSave.length + 1);
    });
  }));


  /**
   * Save Quote
   */
  describe('saving a quote', () => {

    let service: SavedQuotesService;

    beforeEach(() => {
      let useLocalStorage = false;
      service = new SavedQuotesService(useLocalStorage);
    });

    it('increases the length of saved quotes by 1', (done) => {
      // get length of saved quotes before save
      let preSaveLength: number = service.getSavedQuotes().length;
      // save quote
      service.saveQuote(testing.TEST_QUOTE).subscribe((savedQuote: Quote) => {
        // get length after save
        let postSaveLength = service.getSavedQuotes().length;
        // expect length to have increased
        expect(postSaveLength).toEqual(preSaveLength + 1);
        done();
      });
    });

    it('emits new saved quotes from saved quotes observable', (done) => {
      // spy on callback
      let obj = { callback: (q: Quote[]) => {} };
      spyOn(obj, 'callback');
      // subscribe to saved quotes
      service.savedQuotes.subscribe(obj.callback);
      // save quote
      service.saveQuote(testing.TEST_QUOTE).subscribe((savedQuote: Quote) => {
        // expect callback to have been called
        expect(obj.callback).toHaveBeenCalled();
        done();
      });

    });
  });

  /**
   * Remove Quote
   */
  describe('removing a quote', () => {

    let service: SavedQuotesService;
    let removeQuote: Quote;

    beforeEach(async(() => {
      let useLocalStorage = false;
      service = new SavedQuotesService(useLocalStorage);
      // add quote to remove
      service.saveQuote(testing.TEST_QUOTE).subscribe((quoteToRemove: Quote) => {
        removeQuote = quoteToRemove;
      });
    }));

    it('decreases the length of saved quotes by 1', (done) => {
      // get length of saved quotes before remove
      let preRemoveLength: number = service.getSavedQuotes().length;
      // remove quote
      service.removeQuote(removeQuote).subscribe((removedQuote: Quote) => {
        // get length after remove
        let postRemoveLength = service.getSavedQuotes().length;
        // expect length to have decreased
        expect(postRemoveLength).toEqual(preRemoveLength - 1);
        done();
      });
    });

    it('emits new saved quotes from saved quotes observable', (done) => {
      // spy on callback
      let obj = { callback: (q: Quote[]) => {} };
      spyOn(obj, 'callback');
      // subscribe to saved quotes
      service.savedQuotes.subscribe(obj.callback);
      // remove quote
      service.removeQuote(removeQuote).subscribe((savedQuote: Quote) => {
        // expect callback to have been called
        expect(obj.callback).toHaveBeenCalled();
        done();
      });
    });
  });


  describe('with quotes saved', () => {

    let service: SavedQuotesService;
    let removeQuote: Quote;

    beforeEach(async(() => {
      let useLocalStorage = false;
      service = new SavedQuotesService(useLocalStorage);
      // add quotes to clear
      service.saveQuote(testing.TEST_QUOTE).subscribe((quoteToRemove: Quote) => {
        removeQuote = quoteToRemove;
      });
    }));

    it('clears all saved quotes', (done) => {
      // expect there to already be a quote
      expect(service.getSavedQuotes().length).toBeGreaterThan(0);

      // remove quote
      service.clearQuotes().subscribe(() => {
        // expect length to have decreased
        expect(service.getSavedQuotes().length).toEqual(0);
        done();
      });
    });
  });


  
});
