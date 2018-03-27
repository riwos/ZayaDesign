import { Injectable } from '@angular/core';
import { PortoflioDetailData } from '../zaya-static-data/zaya-portfolio-detail-data';

@Injectable()
export class ZayaPortfolioDetailService {

  private dataToRead : any = null;

  constructor() {
    this.dataToRead = PortoflioDetailData;
   }


   getPathForLargeImages(name : string): Array<string>{
      let resultArray = new Array(),
          foundObject = this.findByName(name),
          rootPath = foundObject.model.images.rootpath;

      for(let obj in foundObject.model.images.imgnames){
        resultArray.push(rootPath + foundObject.model.images.imgnames[obj]);
      }    

      return resultArray;
   }

   getCountOfImages() : number{
     return this.dataToRead.length;
   }

   private findByName(currentName : string){
     let result = null,
         counter = this.dataToRead.length;

     for(let i = 0; i < counter; i++){
        if(this.dataToRead[i].name === currentName){
          result = this.dataToRead[i];
          break;
        }
     }
     return  result;
   }

}
