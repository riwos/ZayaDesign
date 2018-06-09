import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BaseComponent } from '../.common/zaya-base-component';

@Component({
  selector: 'app-fs-cookies-privacy-police',
  templateUrl: './fs-cookies-privacy-police.component.html',
  styleUrls: ['./fs-cookies-privacy-police.component.css']
})
export class FSCookiesPrivacyPoliceComponent extends BaseComponent implements OnInit {

  isShowCookie: boolean = false;
  isShowSocialMedia: boolean = false;
  isShowPrivacy: boolean = false;
  wwwAddress = "www.zaya.pl";
  wwwMail = "contact@zaya.com";
  wwwName = "Zaya Projektowanie Wnętrz i Ogrodów";

  constructor(private route: ActivatedRoute) { super(); }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.setService(+params['id']);
    });
  }

  private setService(value: number) {
    if (value == 0) {
      this.isShowCookie = false;
      this.isShowPrivacy = true;
      this.isShowSocialMedia = true;
    } else if (value == 1) {
      this.isShowPrivacy = false;
      this.isShowCookie = true;
      this.isShowSocialMedia = true;

    } else {
      this.isShowSocialMedia = false;
      this.isShowCookie = true;
      this.isShowPrivacy = true;
    }
    super.goToUpScroll();
  }
}
