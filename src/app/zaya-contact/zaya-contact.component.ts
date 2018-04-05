import { PortfolioRequestContact } from './../.model/zaya-portfolio-request-contact';
import { Component, OnInit } from '@angular/core';
import { ZayaMapperService } from '../services/zaya-mapper.service';
import { ToastrService } from 'ngx-toastr';
import { ZayaHttpService } from '../services/zaya-http.service';

@Component({
  selector: 'app-zaya-contact',
  templateUrl: './zaya-contact.component.html',
  styleUrls: ['./zaya-contact.component.css']
})
export class ZayaContactComponent{
  
  constructor(private apiCall : ZayaHttpService, 
    private zayaMapper : ZayaMapperService<PortfolioRequestContact>,
    private toastr: ToastrService){
    
  }

  resolved(captchaResponse: string) {
    //console.log(`Resolved captcha with response ${captchaResponse}:`);
  }

  submit(sendMail) {
    let contactRequest = this.zayaMapper.MapToObject(sendMail.value, PortfolioRequestContact)

    this.apiCall.create(contactRequest).subscribe(resp => {
      this.resetModelContact(sendMail);
      this.toastr.success(resp.reason,  '', {
        timeOut: 6000,
        progressBar: true,
        closeButton: true,
        progressAnimation: 'decreasing',
        positionClass:  'toast-top-center'
      });
    });

  }

  private resetModelContact(contactModel){
      contactModel.reset();
  }
}
