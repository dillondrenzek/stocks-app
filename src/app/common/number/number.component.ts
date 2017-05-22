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
    console.log('isPositive');
    console.log(this.enableColor);
    console.log(this.value, this.value > 0);
    console.log(this.enableColor && (this.value > 0));
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

  ngOnInit() {
    console.log('enable', this.enableColor);
    console.log('value', this.value);
  }
}
