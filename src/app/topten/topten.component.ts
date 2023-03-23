
import { Component, OnInit } from '@angular/core';
import { LastfmApiService } from '../service/lastfm-api.service';

@Component({
  selector: 'app-topten',
  templateUrl: './topten.component.html',
  styleUrls: ['./topten.component.scss']
})

export class ToptenComponent implements OnInit {

  // Declaring class properties with default values
  myData: any;
  artists: any;
  countrys = ['Germany', 'Spain', 'France'];
  showList: boolean = true;
  showCard: boolean = false;
  selectedArtist: any;
  searchText: string = '';

  /**
This method is called when the search text is entered in the search input field.
It sets the class property searchText to the value entered by the user.
@param searchValue The string value entered by the user in the search input field.
*/
  onSearchTextEntered(searchValue: string) {
    this.searchText = searchValue;
  }

  // Injecting the LastfmApiService into the component
  constructor(
    private lastfmapiService: LastfmApiService
  ) { }

  ngOnInit(): void {
    // Calling getTopTen method with default country on component initialization
    this.getTopTen('germany');
  }

  // fetch top ten artists from Last.fm API based on country code
  getTopTen(countryCode: string): void {
    // Calling the LastfmApiService to fetch data using the getTopTen method
    this.lastfmapiService.getTopTen(countryCode).subscribe((data) => {
      // Storing the returned data in class property myData
      this.myData = data;
      // Slicing the first ten artists from the data and storing them in class property artists
      this.artists = this.myData.topartists.artist.slice(0, 10);
    });
  }

  // update the country code and fetch the new set of top ten artists
  updateCountry(countryCode: string): void {
    // getTopTen method with the updated country code
    this.getTopTen(countryCode);

    this.showList = true;
    this.showCard = false;
  }

  // fetch detailed information of the selected artist from Last.fm API
  getInfo(artist: any) {
    // Calling the LastfmApiService to fetch data using the getInfo method
    this.lastfmapiService.getInfo(artist.name).subscribe((data) => {
      // Storing the returned data in class property selectedArtist
      this.selectedArtist = data.artist;

      this.showList = false;
      this.showCard = true;
    });
  }

  // close the artist details and show the artist list
  closeInfo() {

    this.showList = true;
    this.showCard = false;
  }
}

