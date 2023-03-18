import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{ 
  sbsOn: boolean = true;

  constructor(private router: Router) { }
  ngOnInit(): void {
    
  }

  openSideBySide() {
    this.router.navigate(['/sidebyside']);
    this.sbsOn = false;
  }

  openTopTen() {
    this.router.navigate(['/topten']);
    this.sbsOn = true;
  }

}
