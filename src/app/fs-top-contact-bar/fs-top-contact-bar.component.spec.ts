import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FSTopContactBarComponent } from './fs-top-contact-bar.component';

describe('FsTopContactBarComponent', () => {
  let component: FSTopContactBarComponent;
  let fixture: ComponentFixture<FSTopContactBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FSTopContactBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FSTopContactBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
