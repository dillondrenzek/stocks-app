import { Injectable, Inject, Optional } from '@angular/core';
import { USE_LOCAL_STORAGE } from '../../../core/tokens';
import { Portfolio } from '../../portfolio';
import { PortfolioStorageService } from '../../services/portfolio-storage.service';


const PORTFOLIO_LOCALSTORAGE = 'portfolio';


@Injectable()
export class MockPortfolioStorageService extends PortfolioStorageService {

  constructor(
    @Inject(USE_LOCAL_STORAGE) protected useLocalStorage: boolean
  ) { super(useLocalStorage); }


}
