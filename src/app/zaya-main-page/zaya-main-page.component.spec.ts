import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZayaMainPageComponent } from './zaya-main-page.component';

describe('ZayaMainPageComponent', () => {
  let component: ZayaMainPageComponent;
  let fixture: ComponentFixture<ZayaMainPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZayaMainPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZayaMainPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
