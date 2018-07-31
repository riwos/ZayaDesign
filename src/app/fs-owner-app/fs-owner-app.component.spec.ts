import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FSOwnerAppComponent } from './fs-owner-app.component';

describe('FsOwnerAppComponent', () => {
  let component: FSOwnerAppComponent;
  let fixture: ComponentFixture<FSOwnerAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FSOwnerAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FSOwnerAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
