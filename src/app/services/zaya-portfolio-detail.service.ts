import { Injectable } from '@angular/core';
import { PortoflioDetailData } from '../zaya-static-data/zaya-portfolio-detail-data';

@Injectable()
export class ZayaPortfolioDetailService {

  private dataToRead;

  constructor() {
    this.dataToRead = PortoflioDetailData;
   }


   getCountOfImages(){
     return this.dataToRead.length;
   }

  test(){
    console.log(this.dataToRead);
  }

}
