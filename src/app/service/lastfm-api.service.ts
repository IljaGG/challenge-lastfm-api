import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LastfmApiService {

  apiKey: string = '28fe95c1411f3e7b72d7f7689024e40d';
 
  constructor(private http: HttpClient) { }

  // method to fetch top 10 artists from Last.fm API for a given country
  getTopTen(countryCode: string): Observable<any> {
    const url = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${countryCode}&api_key=${this.apiKey}&format=json`;
    return this.http.get(url);
  }
  // method to fetch top 10 artists for the left panel
  getTopTenL(countryCode: string): Observable<any> {
    const url = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${countryCode}&api_key=${this.apiKey}&format=json`;
    return this.http.get(url);
  }
  // method to fetch top 10 artists for the right panel
  getTopTenR(countryCode: string): Observable<any> {
    const url = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${countryCode}&api_key=${this.apiKey}&format=json`;
    return this.http.get(url);
  }

  // method to fetch artist information from Last.fm API for a given artist name
  getInfo(artistName: string): Observable<any> {
    const artistUrl = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${this.apiKey}&format=json`;
    return this.http.get(artistUrl);
  }
  // method to fetch artist information for the left panel
  getInfoL(artistName: string): Observable<any> {
    const artistUrl = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${this.apiKey}&format=json`;
    return this.http.get(artistUrl);
  }
  // method to fetch artist information for the right panel
  getInfoR(artistName: string): Observable<any> {
    const artistUrl = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${this.apiKey}&format=json`;
    return this.http.get(artistUrl);
  }

}
