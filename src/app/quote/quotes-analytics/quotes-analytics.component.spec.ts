import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '../../common/common.module';

import { QuotesAnalyticsComponent } from './quotes-analytics.component';

describe('QuotesAnalyticsComponent', () => {
  let component: QuotesAnalyticsComponent;
  let fixture: ComponentFixture<QuotesAnalyticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [ QuotesAnalyticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesAnalyticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
