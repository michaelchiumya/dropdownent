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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DataService } from './services/data.service';
import { ArtistService } from './services/artist.service';
import { VideosService } from './services/videos.service';
import { PlatformService } from './services/platform.service';
import { SafePipePipe } from './safe-pipe.pipe';
import { ArtistComponent } from './component/artist/artist.component';
import { AdminComponent } from './component-back/admin/admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ArtistBackComponent } from './component-back/artist-back/artist-back.component';

import { SignupComponent } from './component-back/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { AdminService } from './services/admin.service';
import { AuthService } from './services/auth.service';
import { PortalAuthService } from './services/portal-auth.service';
import { HttpConfigInterceptor} from './interceptor/httpconfig.interceptor';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { SongsComponent } from './component-back/songs/songs.component';
import { SongEditComponent } from './component-back/song-edit/song-edit.component';
import { VideoEditComponent } from './component-back/video-edit/video-edit.component';
import { VideosBackComponent } from './component-back/videos-back/videos-back.component';



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
    ArtistBackComponent,
    SignupComponent,
    LoginComponent,
    SongsComponent,
    SongEditComponent,
    VideoEditComponent,
    VideosBackComponent
  ],

  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    NgxAudioPlayerModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp( {
      apiKey: "AIzaSyAQY-hpjYnB7JBTBbkMDvi5FO2YmcWqUkA",
      authDomain: "dropdown-entertainment.firebaseapp.com",
      databaseURL: "https://dropdown-entertainment.firebaseio.com",
      projectId: "dropdown-entertainment",
      storageBucket: "dropdown-entertainment.appspot.com",
      messagingSenderId: "299668417535",
      appId: "1:299668417535:web:784e6ab6d9d0ae647a55ca",
      measurementId: "G-V7GK6GGDSZ"
    } )
  ],

  providers: [
    AlbumsService,
    DataService,
    ArtistService,
    VideosService,
    AdminService,
    AuthService,
    PortalAuthService,
    PlatformService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
