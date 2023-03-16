import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LastfmApiService {

  constructor(private http: HttpClient) { }

  // fetch top 10
  getTopTen(): Observable<any> {
    return this.http.get('https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=28fe95c1411f3e7b72d7f7689024e40d&format=json')
  }

  // fetch band using the top 10 bdid
  getBand(bdid: number = 1) {
    
  }
}
