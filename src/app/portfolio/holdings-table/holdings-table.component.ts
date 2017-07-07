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

  @Output() rowClick = new EventEmitter<Holding>();

  @Output() rowRemove = new EventEmitter<Holding>();

  clickedRow(h: Holding) {
    this.rowClick.emit(h);
  }

  clickedRemoveButton(h: Holding) {
    this.rowRemove.emit(h);
  }
}
