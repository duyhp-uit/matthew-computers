import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import  { tap } from 'rxjs/operators'
import { HttpClient, HttpHeaders } from '@angular/common/http';

const url = "https://run.mocky.io/v3/7af6f34b-b206-4bed-b447-559fda148ca5";

@Injectable({
  providedIn: 'root'  
})

export class ProductService {

  cache: any = {};

  constructor( private http: HttpClient) { }

  get(): Observable<any> {

   if (this.cache[url]) {
    return of(this.cache[url])
  }
  return this.http.get(url).pipe(tap(resolvedValue  => {
    this.cache[url] = resolvedValue;
  }))
  }
}
