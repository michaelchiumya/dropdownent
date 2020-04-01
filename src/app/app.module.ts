import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { HomeComponent } from './component/home/home.component';
import { ArtistComponent } from './component/artist/artist.component';
import { PlayerComponent } from './component/player/player.component';
import { RoutingModule } from './routing.module';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlbumsService } from './albums.service';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { ArtistService } from './artist.service';
import { VideosService } from './videos.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ArtistComponent,
    PlayerComponent
  ],

  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    NgxAudioPlayerModule,
    HttpClientModule
  ],
  providers: [AlbumsService,DataService,ArtistService,VideosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
