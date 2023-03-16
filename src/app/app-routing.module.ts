import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToptenComponent } from './topten/topten.component';

const routes: Routes = [
  { path: 'topten', component: ToptenComponent },
  { path: '**', redirectTo: 'topten' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
