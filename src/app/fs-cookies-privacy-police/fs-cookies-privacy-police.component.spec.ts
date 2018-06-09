import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FSCookiesPrivacyPoliceComponent } from './fs-cookies-privacy-police.component';

describe('FsCookiesPrivacyPoliceComponent', () => {
  let component: FSCookiesPrivacyPoliceComponent;
  let fixture: ComponentFixture<FSCookiesPrivacyPoliceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FSCookiesPrivacyPoliceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FSCookiesPrivacyPoliceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
