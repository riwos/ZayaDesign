import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZayaHeaderComponent } from './zaya-header.component';

describe('ZayaHeaderComponent', () => {
  let component: ZayaHeaderComponent;
  let fixture: ComponentFixture<ZayaHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZayaHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZayaHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
