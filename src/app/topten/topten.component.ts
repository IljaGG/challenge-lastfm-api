import { Component, OnInit } from '@angular/core';
import { LastfmApiService } from '../service/lastfm-api.service';


@Component({
  selector: 'app-topten',
  templateUrl: './topten.component.html',
  styleUrls: ['./topten.component.scss']
})
export class ToptenComponent implements OnInit {
  myData: any;
  artists: any;
  countrys = ['Germany', 'Spain', 'France'];
  showList: boolean = true;
  showCard: boolean = false;
  selectedArtist: any;

  constructor(
    private lastfmapiService: LastfmApiService
  ) { }


  ngOnInit(): void {
    this.getTopTen('germany');
  }

  getTopTen(countryCode: string): void {
    this.lastfmapiService.getTopTen(countryCode).subscribe((data) => {
      this.myData = data;
      this.artists = this.myData.topartists.artist.slice(0, 10);
    });
  }

  updateCountry(countryCode: string): void {
    this.getTopTen(countryCode);
    this.showList = true;
    this.showCard = false;
  }

  getInfo(artist: any) {
    this.lastfmapiService.getInfo(artist.name).subscribe((data) => {
      this.selectedArtist = data.artist;
      this.showList = false;
      this.showCard = true;
    });
  }

  closeInfo() {
    this.showList = true;
    this.showCard = false;
  }
}


