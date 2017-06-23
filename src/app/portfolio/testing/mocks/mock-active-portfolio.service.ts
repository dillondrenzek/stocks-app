/** @module MockActivePortfolioService *//** */

import { Injectable, Inject } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs/Rx';
import { USE_LOCAL_STORAGE } from '../../../core/tokens';
import { Portfolio, NULL_PORTFOLIO } from '../../portfolio';
import { Holding } from '../../holding';
import { ActivePortfolioService } from '../../services/active-portfolio.service';
import { PortfolioStorageService } from '../../services/portfolio-storage.service';



/**
 * Manages the active Portfolio
 *
 * ## Requirements
 * * creates a blank active portfolio
 * * adds a holding to active portfolio
 * * removes a holding from active portfolio
 *
 */
@Injectable()
export class MockActivePortfolioService extends ActivePortfolioService {

  constructor(
    protected portfolioStorage: PortfolioStorageService
  ) { super(portfolioStorage); }

}
