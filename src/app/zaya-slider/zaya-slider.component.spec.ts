import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZayaSliderComponent } from './zaya-slider.component';

describe('ZayaSliderComponent', () => {
  let component: ZayaSliderComponent;
  let fixture: ComponentFixture<ZayaSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZayaSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZayaSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
