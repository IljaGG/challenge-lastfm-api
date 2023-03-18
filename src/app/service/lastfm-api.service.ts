import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LastfmApiService {

  apiKey: string = '28fe95c1411f3e7b72d7f7689024e40d';
 
  constructor(private http: HttpClient) { }

  // fetch top 10
  getTopTen(countryCode: string): Observable<any> {
    const url = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${countryCode}&api_key=${this.apiKey}&format=json`;
    return this.http.get(url);
  }
  getTopTenL(countryCode: string): Observable<any> {
    const url = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${countryCode}&api_key=${this.apiKey}&format=json`;
    return this.http.get(url);
  }
  getTopTenR(countryCode: string): Observable<any> {
    const url = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${countryCode}&api_key=${this.apiKey}&format=json`;
    return this.http.get(url);
  }
  //fetch artist infos
  getInfo(artistName: string): Observable<any> {
    const artistUrl = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${this.apiKey}&format=json`;
    return this.http.get(artistUrl);
  }
  getInfoL(artistName: string): Observable<any> {
    const artistUrl = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${this.apiKey}&format=json`;
    return this.http.get(artistUrl);
  }
  getInfoR(artistName: string): Observable<any> {
    const artistUrl = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${this.apiKey}&format=json`;
    return this.http.get(artistUrl);
  }

}
