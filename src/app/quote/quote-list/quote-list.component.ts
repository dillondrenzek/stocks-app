import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Quote } from '../quote';

@Component({
  selector: 'app-quote-list',
  templateUrl: './quote-list.component.html',
  styleUrls: ['./quote-list.component.css']
})
export class QuoteListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() quotes: Quote[] = [];

}
