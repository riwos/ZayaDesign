import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZayaAboutComponent } from './zaya-about.component';

describe('ZayaAboutComponent', () => {
  let component: ZayaAboutComponent;
  let fixture: ComponentFixture<ZayaAboutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZayaAboutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZayaAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
