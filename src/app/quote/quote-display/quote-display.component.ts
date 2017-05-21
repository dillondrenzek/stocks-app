import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Quote } from '../quote';

/**
 * Displays relevant information about a given Quote
 */
@Component({
  selector: 'app-quote-display',
  templateUrl: './quote-display.component.html',
  styleUrls: ['./quote-display.component.css']
})
export class QuoteDisplayComponent {

  @Input() quote: Quote = null;

}
