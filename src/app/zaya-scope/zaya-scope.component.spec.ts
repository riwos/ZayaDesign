import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZayaScopeComponent } from './zaya-scope.component';

describe('ZayaScopeComponent', () => {
  let component: ZayaScopeComponent;
  let fixture: ComponentFixture<ZayaScopeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZayaScopeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZayaScopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
