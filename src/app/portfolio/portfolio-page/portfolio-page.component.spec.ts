import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import * as tokens from '../../core/tokens';

import { PortfolioPageComponent } from './portfolio-page.component';
import { HoldingsTableComponent } from '../holdings-table/holdings-table.component';
import { HoldingFormComponent } from '../holding-form/holding-form.component';
import { ActivePortfolioService } from '../services/active-portfolio.service';
import { PortfolioStorageService } from '../services/portfolio-storage.service';

describe('PortfolioPageComponent', () => {
  // let component: PortfolioPageComponent;
  // let fixture: ComponentFixture<PortfolioPageComponent>;
  //
  // beforeEach(async(() => {
  //   TestBed.configureTestingModule({
  //     imports: [ReactiveFormsModule],
  //     declarations: [
  //       PortfolioPageComponent,
  //       HoldingsTableComponent,
  //       HoldingFormComponent
  //     ],
  //     providers: [
  //       ActivePortfolioService,
  //       PortfolioStorageService,
  //       { provide: tokens.USE_LOCAL_STORAGE, useValue: false }
  //     ]
  //   })
  //   .compileComponents();
  // }));
  //
  // beforeEach(() => {
  //   fixture = TestBed.createComponent(PortfolioPageComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });

});
