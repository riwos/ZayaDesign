import { Injectable } from '@angular/core';
import { JsonConvert } from 'json2typescript';

@Injectable()
export class ZayaMapperService<T> {

  private jsonConvert: JsonConvert = null; 

  constructor() {
    this.jsonConvert = new JsonConvert();
   }

  MapToObject(jsonObject: any, obj : new () => T ) {
    let result: any = undefined;
    try {
      result = this.jsonConvert.deserialize(jsonObject, obj);
    } catch (e) {
      console.log((<Error>e));
    }
    return result;
  }

}
