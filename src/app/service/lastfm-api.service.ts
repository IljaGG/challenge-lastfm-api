import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LastfmApiService {

  constructor(private http: HttpClient) { }

  // fetch top 10
  getTopTen(countryCode: string): Observable<any> {
    const url = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${countryCode}&api_key=28fe95c1411f3e7b72d7f7689024e40d&format=json`;
    return this.http.get(url);
  }

  getInfo(artistName: string): Observable<any> {
    const artistUrl = `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=28fe95c1411f3e7b72d7f7689024e40d&format=json`;
    return this.http.get(artistUrl);
  }

}
