import { Injectable } from '@angular/core';
import { PortoflioDetailData } from '../zaya-static-data/zaya-portfolio-detail-data';

@Injectable()
export class ZayaPortfolioDetailService {

  private dataToRead: any = null;
  private foundArrayObject: any = null;

  constructor() {
    this.dataToRead = PortoflioDetailData;
  }

  getDataForModel(name: number){
    this.SetFoundArrayObject(this.findByName(name));
    return this.GetFoundArrayObject().model;
  }

  getPathForLargeImages(name: number): Array<string> {
    
    let resultArray = new Array(),
      foundObject = this.GetFoundArrayObject(),
      rootPath = foundObject.model.images.rootpath;

    if (foundObject !== null && foundObject != undefined) {
      let arrayOfImages = foundObject.model.images.imgnames;
      for (let obj in arrayOfImages) {
        resultArray.push(rootPath + arrayOfImages[obj]);
      }
    }

    return resultArray;
  }

  getPathForThumbnails(name: number): Array<any> {
    let resultArray: Array<any> = [],
        rootPath = this.GetFoundArrayObject().model.images.rootpath;

    var tempArrayOfThumbnails = JSON.parse(JSON.stringify(this.GetFoundArrayObject().model.images.imgthumb));    // copy of array

    resultArray = this.createArryForThumbnails(tempArrayOfThumbnails, rootPath);

    return resultArray;
  }

  getCountOfImages(): number {
    return this.dataToRead.length;
  }

  private GetFoundArrayObject() {
    return this.foundArrayObject
  }

  private SetFoundArrayObject(value) {
    this.foundArrayObject = value;
  }

  private createArryForThumbnails(arrThumb: Array<string>, rootPath: string): Array<any> {
    let array = [],
      totalNumber = parseInt((arrThumb.length / 5).toString()),
      modNumber = arrThumb.length % 5,
      indexAttribute = 0;
    for (let i = 0; i <= totalNumber; i++) {
      array[i] = [];
      let jCounter = (i + 1) <= totalNumber ? 5 : (modNumber);
      for (let j = 0; j < jCounter; j++) {
        array[i][j] = { index: indexAttribute++, thumb: rootPath + arrThumb[j] };
      }
      arrThumb.splice(0, jCounter);
    }
    return array;
  }

  private findByName(currentName: number) {
    let result = null,
      counter = this.dataToRead.length;

    for (let i = 0; i < counter; i++) {
      if (this.dataToRead[i].name === currentName) {
        result = this.dataToRead[i];
        break;
      }
    }
    return result;
  }

}
