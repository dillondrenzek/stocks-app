import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Holding } from '../holding';

@Component({
  selector: 'app-holdings-table',
  templateUrl: './holdings-table.component.html',
  styleUrls: ['./holdings-table.component.css']
})
export class HoldingsTableComponent {

  constructor() { }

  @Input() holdings: Holding[] = [];

  @Output() removeHolding = new EventEmitter<Holding>();

  clickedRemoveButton(h: Holding) {
    this.removeHolding.emit(h);
  }
}
