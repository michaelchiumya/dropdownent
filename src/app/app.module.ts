import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { VideosComponent } from './component/videos/videos.component';
import { HomeComponent } from './component/home/home.component';
import { PlayerComponent } from './component/player/player.component';
import { RoutingModule } from './routing.module';
import { NgxAudioPlayerModule } from 'ngx-audio-player';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AlbumsService } from './albums.service';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './data.service';
import { ArtistService } from './artist.service';
import { VideosService } from './videos.service';
import { SafePipePipe } from './safe-pipe.pipe';
import { ArtistComponent } from './component/artist/artist.component';
import { AdminComponent } from './component/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArtistBackComponent } from './component-back/artist-back/artist-back.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    PlayerComponent,
    VideosComponent,
    ArtistComponent,
    AdminComponent,
    SafePipePipe,
    ArtistBackComponent
  ],

  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    NgxAudioPlayerModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [AlbumsService,DataService,ArtistService,VideosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
