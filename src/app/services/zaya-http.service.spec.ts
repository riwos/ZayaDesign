import { TestBed, inject } from '@angular/core/testing';

import { ZayaHttpService } from './zaya-http.service';

describe('ZayaHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZayaHttpService]
    });
  });

  it('should be created', inject([ZayaHttpService], (service: ZayaHttpService) => {
    expect(service).toBeTruthy();
  }));
});
