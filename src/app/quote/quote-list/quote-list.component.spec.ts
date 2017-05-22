import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '../../common/common.module';
import * as testing from '../testing';
import { QuoteListComponent } from './quote-list.component';

describe('QuoteListComponent', () => {
  let component: QuoteListComponent;
  let fixture: ComponentFixture<QuoteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [ QuoteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('with more than one input quote', () => {

    let inputQuotes = testing.MY_EXAMPLE_QUOTES;

    beforeEach(() => {
      component.quotes = testing.MY_EXAMPLE_QUOTES;
      fixture.detectChanges();
    });

    it('should display one row for every quote input', () => {
      let rowElements: DebugElement[] = fixture.debugElement.queryAll(By.css('.quote'));
      expect(rowElements.length).toEqual(inputQuotes.length);
    });

    it('should have an accessory button for each row', () => {
      let accessoryButtonElements: DebugElement[] = fixture.debugElement.queryAll(By.css('.quote .btn.accessory'));
      expect(accessoryButtonElements.length).toEqual(inputQuotes.length);
    });

    describe('on click', () => {
      it('should emit the Quote that was clicked',  () => {
        spyOn(component.clickedQuote, 'emit');
        let accessoryButtonElements: DebugElement[] = fixture.debugElement.queryAll(By.css('.quote'));
        accessoryButtonElements[0].nativeElement.click();
        expect(component.clickedQuote.emit).toHaveBeenCalled();
      });
    });

    describe('on accessory button click', () => {
      it('should emit the Quote that the accessory button clicked on',  () => {
        spyOn(component.clickedQuoteAccessory, 'emit');
        let accessoryButtonElements: DebugElement[] = fixture.debugElement.queryAll(By.css('.quote .btn.accessory'));
        accessoryButtonElements[0].nativeElement.click();
        expect(component.clickedQuoteAccessory.emit).toHaveBeenCalled();
      });
    });
  });

});
