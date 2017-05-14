import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '../../common/common.module';

import { QuoteDisplayComponent } from './quote-display.component';

describe('QuoteDisplayComponent', () => {
  let component: QuoteDisplayComponent;
  let fixture: ComponentFixture<QuoteDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [ QuoteDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should display the input quote', () => {});

  xit('should display an empty state when no input quote is given', () => {});
});
