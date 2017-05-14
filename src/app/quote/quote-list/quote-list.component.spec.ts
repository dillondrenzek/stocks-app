import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonModule } from '../../common/common.module';

import { QuoteListComponent } from './quote-list.component';

describe('QuoteListComponent', () => {
  let component: QuoteListComponent;
  let fixture: ComponentFixture<QuoteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonModule],
      declarations: [ QuoteListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  xit('should show an empty state when no quotes are input', () => {});
});
