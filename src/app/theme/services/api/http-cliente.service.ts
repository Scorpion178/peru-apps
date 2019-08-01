import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HttpClienteService {
  constructor(private http: HttpClient) { }

  createAuthorizationHeader() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };
    return httpOptions;
  }

  get(url: string): Observable<any> {
    return this.http.get(url);
  }

  post(url: string, data: any): Observable<any> {
    return this.http.post(url, data);
  }
  postHeader(url: string, data: any, token: string): Observable<any> {
    const options = this.createAuthorizationHeader();
    return this.http.post(url, data, options);
  }

  put(url: string, data: any): Observable<any> {
    return this.http.put(url, data);
  }
  putHeader(url: string, data: any): Observable<any> {
    const options = this.createAuthorizationHeader();
    return this.http.put(url, data, options);
  }
  
  patch(url: string, data: any): Observable<any> {
    return this.http.patch(url, data);
  }

  delete(url: string): Observable<any> {
    return this.http.delete(url);
  }

}
