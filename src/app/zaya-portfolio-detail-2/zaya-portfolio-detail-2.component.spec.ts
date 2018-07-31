import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZayaPortfolioDetail2Component } from './zaya-portfolio-detail-2.component';

describe('ZayaPortfolioDetail2Component', () => {
  let component: ZayaPortfolioDetail2Component;
  let fixture: ComponentFixture<ZayaPortfolioDetail2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZayaPortfolioDetail2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZayaPortfolioDetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
