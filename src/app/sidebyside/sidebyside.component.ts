import { Component } from '@angular/core';
import { LastfmApiService } from '../service/lastfm-api.service';

@Component({
  selector: 'app-sidebyside',
  templateUrl: './sidebyside.component.html',
  styleUrls: ['./sidebyside.component.scss']
})
export class SidebysideComponent {

  myDataL: any; // Data for the left side
  myDataR: any; // Data for the right side
  artistsL: any; // List of artists for the left side
  artistsR: any; // List of artists for the right side
  countrys = ['Germany', 'Spain', 'France'];
  showListL: boolean = true;
  showListR: boolean = true;
  showCardL: boolean = false;
  showCardR: boolean = false; 
  selectedArtistL: any; // Selected artist for the left card
  selectedArtistR: any; // Selected artist for the right card

  // Constructor injection of the LastfmApiService
  constructor(
    private lastfmapiService: LastfmApiService
  ) { }

  // Lifecycle hook, called after component initialization
  ngOnInit(): void {
    // Initialize both sides with data from Germany
    this.getTopTenL('germany');
    this.getTopTenR('germany');
  }

  // fetch top 10 artists for the left side
  getTopTenL(countryCode: string): void {
    this.lastfmapiService.getTopTenL(countryCode).subscribe((data) => {
      this.myDataL = data;
      this.artistsL = this.myDataL.topartists.artist.slice(0, 10);
    });
  }

  // fetch top 10 artists for the right side
  getTopTenR(countryCode: string): void {
    this.lastfmapiService.getTopTenR(countryCode).subscribe((data) => {
      this.myDataR = data;
      this.artistsR = this.myDataR.topartists.artist.slice(0, 10);
    });
  }

  // update the left side with data from a different country
  updateCountryL(countryCode: string): void {
    this.getTopTenL(countryCode);
    this.showListL = true;
    this.showCardL = false;
  }

  // update the right side with data from a different country
  updateCountryR(countryCode: string): void {
    this.getTopTenR(countryCode);
    this.showListR = true;
    this.showCardR = false;
  }

  // fetch artist info for the left card
  getInfoL(artist: any) {
    this.lastfmapiService.getInfo(artist.name).subscribe((data) => {
      this.selectedArtistL = data.artist;
      this.showListL = false;
      this.showCardL = true;
    });
  }

  // fetch artist info for the right card
  getInfoR(artist: any) {
    this.lastfmapiService.getInfo(artist.name).subscribe((data) => {
      this.selectedArtistR = data.artist;
      this.showListR = false;
      this.showCardR = true;
    });
  }

  // close Info left and right infos
  closeInfoL() {
    this.showListL = true;
    this.showCardL = false;
  }

  closeInfoR() {
    this.showListR = true;
    this.showCardR = false;
  }
}


