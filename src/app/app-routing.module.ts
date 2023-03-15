import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BandDetailComponent } from './band-detail/band-detail.component';
import { ToptenComponent } from './topten/topten.component';

const routes: Routes = [
  { path: 'topten', component: ToptenComponent },
  { path: 'band-detail/:bdid', component: BandDetailComponent },
  { path: '**', redirectTo: 'topten' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
