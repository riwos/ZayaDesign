import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class ZayaHttpService {

  private _baseUrl: string = "";

  constructor(private httpCall: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this._baseUrl = baseUrl;
  }

  create(resource) {  

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE'
      })
    };

     return this.httpCall.post(this._baseUrl + "api/main/SendMail", JSON.stringify(resource), httpOptions)
      .pipe(
        catchError(this.handleError)
      );
     
  }

  private handleError(error: Response) {
    return Observable.throw(error);
  }

}
