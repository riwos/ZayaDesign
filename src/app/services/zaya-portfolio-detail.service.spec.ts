import { TestBed, inject } from '@angular/core/testing';

import { ZayaPortfolioDetailService } from './zaya-portfolio-detail.service';

describe('ZayaPortfolioDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZayaPortfolioDetailService]
    });
  });

  it('should be created', inject([ZayaPortfolioDetailService], (service: ZayaPortfolioDetailService) => {
    expect(service).toBeTruthy();
  }));
});
