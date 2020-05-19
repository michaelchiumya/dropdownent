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
import{ AngularFireStorageModule}from '@angular/fire/storage';



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
    LoginComponent
  ],

  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    NgxAudioPlayerModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],

  providers: [
    AlbumsService,
    DataService,
    ArtistService,
    VideosService,
    AdminService,
    AuthService,
    PortalAuthService,
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
