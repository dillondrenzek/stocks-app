import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DecimalPipe } from '@angular/common';
import { NumberComponent } from './number.component';

describe('NumberComponent', () => {
  let component: NumberComponent;
  let fixture: ComponentFixture<NumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display its value to 2 decimal places', () => {
    //
    let value = 123.12987;
    let expected = '123.13';
    component.value = value;
    fixture.detectChanges();
    //
    expect(fixture.debugElement.nativeElement.innerText).toContain(expected);
  });
});
