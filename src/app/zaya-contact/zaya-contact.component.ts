import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zaya-contact',
  templateUrl: './zaya-contact.component.html',
  styleUrls: ['./zaya-contact.component.css']
})
export class ZayaContactComponent{
  
  resolved(captchaResponse: string) {
    console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

  submit(sendMail) {
    console.log(sendMail);
  }

}
