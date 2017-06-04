import { Component, OnInit, Input } from '@angular/core';

import { Holding } from '../holding';

@Component({
  selector: 'app-holdings-table',
  templateUrl: './holdings-table.component.html',
  styleUrls: ['./holdings-table.component.css']
})
export class HoldingsTableComponent implements OnInit {

  constructor() { }

  @Input() holdings: Holding[] = [];

  ngOnInit() {
  }

}
