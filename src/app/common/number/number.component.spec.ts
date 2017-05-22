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

  /**
   *
   */
  it('should display its value to 2 decimal places', () => {
    //
    let value = 123.12987;
    let expected = '123.13';
    component.value = value;
    fixture.detectChanges();
    // fixture.debugElement.
    //
    expect(fixture.debugElement.nativeElement.innerText).toContain(expected);
  });


  describe('with coloring enabled', () => {

    beforeEach(() => {
      component.enableColor = true;
      fixture.detectChanges();
    });

    it('should have the class "positive" when the value is positive', () => {
      let value = 1.23;
      component.value = value;
      fixture.detectChanges();
      //
      expect(fixture.debugElement.classes['positive']).toBe(true);
    });

    it('should have the class "negative" when the value is negative', () => {
      let value = -42;
      component.value = value;
      fixture.detectChanges();
      //
      expect(fixture.debugElement.classes['negative']).toBe(true);
    });

    it('should have the class "zero" when the value is 0', () => {
      let value = 0;
      component.value = value;
      fixture.detectChanges();
      //
      expect(fixture.debugElement.classes['zero']).toBe(true);
    });

  });

  describe('with coloring disabled', () => {

    beforeEach(() => {
      component.enableColor = false;
      fixture.detectChanges();
    });

    it('should not have the class "positive" when the value is positive', () => {
      let value = 1.23;
      component.value = value;
      fixture.detectChanges();
      //
      expect(fixture.debugElement.classes['positive']).toBe(false);
    });

    it('should not have the class "negative" when the value is negative', () => {
      let value = -42;
      component.value = value;
      fixture.detectChanges();
      //
      expect(fixture.debugElement.classes['negative']).toBe(false);
    });

    it('should not have the class "zero" when the value is 0', () => {
      let value = 0;
      component.value = value;
      fixture.detectChanges();
      //
      expect(fixture.debugElement.classes['zero']).toBe(false);
    });

  });

});
