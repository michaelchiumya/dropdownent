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
import { AlbumsService } from './services/albums.service';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './services/data.service';
import { ArtistService } from './services/artist.service';
import { VideosService } from './services/videos.service';
import { SafePipePipe } from './safe-pipe.pipe';
import { ArtistComponent } from './component/artist/artist.component';
import { AdminComponent } from './component/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArtistBackComponent } from './component-back/artist-back/artist-back.component';
import { CarouselModule } from 'ng-carousel-cdk';

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
    ReactiveFormsModule,
    CarouselModule
  ],
  providers: [AlbumsService,DataService,ArtistService,VideosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
