import { Component } from '@angular/core';
import { LastfmApiService } from '../service/lastfm-api.service';

@Component({
  selector: 'app-sidebyside',
  templateUrl: './sidebyside.component.html',
  styleUrls: ['./sidebyside.component.scss']
})
export class SidebysideComponent {

  myDataL: any;
  myDataR: any;
  artistsL: any;
  artistsR: any;
  countrys = ['Germany', 'Spain', 'France'];
  showListL: boolean = true;
  showListR: boolean = true;
  showCardL: boolean = false;
  showCardR: boolean = false;
  selectedArtistL: any;
  selectedArtistR: any;

  constructor(
    private lastfmapiService: LastfmApiService

  ) { }

  ngOnInit(): void {
    this.getTopTenL('germany');
    this.getTopTenR('germany');
  }

  getTopTenL(countryCode: string): void {
    this.lastfmapiService.getTopTenL(countryCode).subscribe((data) => {
      this.myDataL = data;
      this.artistsL = this.myDataL.topartists.artist.slice(0, 10);
    });
  }

  getTopTenR(countryCode: string): void {
    this.lastfmapiService.getTopTenR(countryCode).subscribe((data) => {
      this.myDataR = data;
      this.artistsR = this.myDataR.topartists.artist.slice(0, 10);
    });
  }

  updateCountryL(countryCode: string): void {
    this.getTopTenL(countryCode);
    this.showListL = true;
    this.showCardL = false;
  }

  updateCountryR(countryCode: string): void {
    this.getTopTenR(countryCode);
    this.showListR = true;
    this.showCardR = false;
  }

  getInfoL(artist: any) {
    this.lastfmapiService.getInfo(artist.name).subscribe((data) => {
      this.selectedArtistL = data.artist;
      this.showListL = false;
      this.showCardL = true;
    });
  }

  getInfoR(artist: any) {
    this.lastfmapiService.getInfo(artist.name).subscribe((data) => {
      this.selectedArtistR = data.artist;
      this.showListR = false;
      this.showCardR = true;
    });
  }

  closeInfoL() {
    this.showListL = true;
    this.showCardL = false;
  }

  closeInfoR() {
    this.showListR = true;
    this.showCardR = false;
  }
}


