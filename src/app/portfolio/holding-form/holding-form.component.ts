import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Holding } from '../holding';

@Component({
  selector: 'app-holding-form',
  templateUrl: './holding-form.component.html',
  styleUrls: ['./holding-form.component.css']
})
export class HoldingFormComponent implements OnInit {

  constructor() {
    this._form = new FormGroup({
      symbol: new FormControl(''),
      purchasePrice: new FormControl(null),
      quantity: new FormControl(null),
      datePurchased: new FormControl(null)
    });
  }

  _form: FormGroup;

  get value(): Holding {
    return this._form.value;
  }

  @Input() startValue: Holding = null;

  reset() {
    this._form.reset();
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let change in changes) {
      switch(change) {
        case 'startValue':
          this._form.patchValue(changes[change].currentValue);
          break;
        default:
          break;
      }
    }
  }

}
