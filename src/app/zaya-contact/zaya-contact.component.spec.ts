import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZayaContactComponent } from './zaya-contact.component';

describe('ZayaContactComponent', () => {
  let component: ZayaContactComponent;
  let fixture: ComponentFixture<ZayaContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZayaContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZayaContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
