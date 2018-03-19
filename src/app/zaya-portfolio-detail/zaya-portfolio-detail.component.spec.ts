import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZayaPortfolioDetailComponent } from './zaya-portfolio-detail.component';

describe('ZayaPortfolioDetailComponent', () => {
  let component: ZayaPortfolioDetailComponent;
  let fixture: ComponentFixture<ZayaPortfolioDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZayaPortfolioDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZayaPortfolioDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
