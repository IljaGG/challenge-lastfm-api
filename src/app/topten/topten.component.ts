import { Component } from '@angular/core';
import { LautfmApiService } from '../service/lautfm-api.service';

@Component({
  selector: 'app-topten',
  templateUrl: './topten.component.html',
  styleUrls: ['./topten.component.scss']
})
export class ToptenComponent {

  constructor(private lautfmapiService: LautfmApiService) {}

  ngOnInit(): void {
    this.lautfmapiService.getTopTen().subscribe(
      (results: any) => {
        console.log(results);
      }
    );
  }
}
