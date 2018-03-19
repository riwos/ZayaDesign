import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZayaPortfolioComponent } from './zaya-portfolio.component';

describe('ZayaPortfolioComponent', () => {
  let component: ZayaPortfolioComponent;
  let fixture: ComponentFixture<ZayaPortfolioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZayaPortfolioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZayaPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
