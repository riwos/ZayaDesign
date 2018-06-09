import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FsFooterCookiePrivacySocialComponent } from './fs-footer-cookie-privacy-social.component';

describe('FsFooterCookiePrivacySocialComponent', () => {
  let component: FsFooterCookiePrivacySocialComponent;
  let fixture: ComponentFixture<FsFooterCookiePrivacySocialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FsFooterCookiePrivacySocialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FsFooterCookiePrivacySocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
