import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZayaNotFoundComponent } from './zaya-not-found.component';

describe('ZayaNotFoundComponent', () => {
  let component: ZayaNotFoundComponent;
  let fixture: ComponentFixture<ZayaNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZayaNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZayaNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
