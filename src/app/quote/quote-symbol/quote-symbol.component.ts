import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-quote-symbol',
  templateUrl: './quote-symbol.component.html',
  styleUrls: ['./quote-symbol.component.css']
})
export class QuoteSymbolComponent implements OnInit {

  constructor() { }

  @Input() symbol: string = "";

  ngOnInit() {}
}
