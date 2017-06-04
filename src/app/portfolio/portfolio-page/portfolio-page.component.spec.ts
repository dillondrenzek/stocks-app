import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import * as tokens from '../../core/tokens';

import { PortfolioPageComponent } from './portfolio-page.component';
import { HoldingsTableComponent } from '../holdings-table/holdings-table.component';
import { ActivePortfolioService } from '../services/active-portfolio.service';

describe('PortfolioPageComponent', () => {
  let component: PortfolioPageComponent;
  let fixture: ComponentFixture<PortfolioPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PortfolioPageComponent, HoldingsTableComponent ],
      providers: [
        ActivePortfolioService,
        { provide: tokens.USE_LOCAL_STORAGE, useValue: false }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
