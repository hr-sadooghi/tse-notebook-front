import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ApiCoreService {

  httpOptions;

  apiUrl: any;

  constructor(private httpClient: HttpClient ) {

    this.apiUrl = environment.apiUrl;
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      })
    };


  }


  getRequest(url: string) {
    return this.httpClient.get(url, this.httpOptions);
  }

  deleteRequest(url: string) {
    return this.httpClient.delete(url, this.httpOptions);
  }

  postRequest(url: string, body: any): Observable<any> {
    return this.httpClient.post(url, body, this.httpOptions);
  }

  putRequest(url: string, body: any) {
    return this.httpClient.put(url, body, this.httpOptions);
  }



}
