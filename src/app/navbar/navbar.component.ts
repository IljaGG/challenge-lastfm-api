import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
searchTerm: any;
filterArtists() {
throw new Error('Method not implemented.');
}

  searchQuery: string = '';

  constructor() { }
  ngOnInit(): void {
    
  }
}
