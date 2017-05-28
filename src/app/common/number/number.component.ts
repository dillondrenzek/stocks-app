import { Component, OnInit, Input, HostBinding } from '@angular/core';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent {

  @Input() value: number = 0;

  @Input() enableColor: boolean = false;

  @HostBinding('class.positive')
  get isPositive(): boolean {
    return this.enableColor && (this.value > 0);
  }

  @HostBinding('class.negative')
  get isNegative(): boolean {
    return this.enableColor && (this.value < 0);
  }

  @HostBinding('class.zero')
  get isZero(): boolean {
    return this.enableColor && (this.value === 0);
  }
}
