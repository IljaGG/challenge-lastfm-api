import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LautfmApiService {
  private readonly apiUrl : string = 'http://www.last.fm/api/auth/?api_key=95995054afd0ca02adacb6ea286409ee';

  constructor(private http: HttpClient) { }

  // fetch top 10
  getTopTen(size: number = 10): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/?result=${size}`)
  }

  // fetch band using the top 10 bdid
  getBand(bdid: number = 1): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/?bdid=${bdid}`)
  }
}
