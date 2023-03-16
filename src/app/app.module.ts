import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ToptenComponent } from './topten/topten.component';
import { LastfmApiService } from './service/lastfm-api.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ToptenComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatCardModule,
    FormsModule
  ],
  providers: [LastfmApiService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
