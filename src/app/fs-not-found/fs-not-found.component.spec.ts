import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FSNotFoundComponent } from './fs-not-found.component';

describe('FsNotFoundComponent', () => {
  let component: FSNotFoundComponent;
  let fixture: ComponentFixture<FSNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FSNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FSNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
