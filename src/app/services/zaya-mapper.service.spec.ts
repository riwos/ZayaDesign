import { PortfolioDetailModel } from './../.model/zaya-portfolio-detail-model';
import { TestBed, inject } from '@angular/core/testing';

import { ZayaMapperService } from './zaya-mapper.service';

describe('ZayaMapperService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZayaMapperService]
    });
  });

  it('should be created', inject([ZayaMapperService], (service: ZayaMapperService<PortfolioDetailModel>) => {
    expect(service).toBeTruthy();
  }));
});
