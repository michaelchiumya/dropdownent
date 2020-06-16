import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ArtistComponent } from './component/artist/artist.component';
import { VideosComponent } from './component/videos/videos.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { AdminComponent } from './component-back/admin/admin.component';
import { ArtistBackComponent } from './component-back/artist-back/artist-back.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component-back/signup/signup.component';
import { PortalAuthGuard } from './portal-auth.guard';
import { SongsComponent } from './component-back/songs/songs.component';
import { SongEditComponent } from './component-back/song-edit/song-edit.component';
import { VideoEditComponent } from './component-back/video-edit/video-edit.component';
import { VideosBackComponent } from './component-back/videos-back/videos-back.component';



export const routes: Routes = [
  { path:'', redirectTo: '/home', pathMatch:'full'},
  {path: 'home',  component: HomeComponent},
  {path:'videos', component: VideosComponent},
  {path:'artist/:id', component: ArtistComponent},
  {path: 'login', component: LoginComponent},

  {path: 'admin',  component: AdminComponent, canActivate: [PortalAuthGuard] },
  {path: 'music',  component: SongsComponent, canActivate: [PortalAuthGuard] },
  {path: 'music/edit/:id',  component: SongEditComponent, canActivate: [PortalAuthGuard] },
  {path: 'video/edit/:id',  component: VideoEditComponent, canActivate: [PortalAuthGuard] },
  {path: 'videos/admin',  component: VideosBackComponent, canActivate: [PortalAuthGuard] },
  {path: 'artist-backend/:id', component: ArtistBackComponent, canActivate: [PortalAuthGuard]},
  {path: 'signup', component:SignupComponent, canActivate: [PortalAuthGuard]},
  {path: '404', component: PageNotFoundComponent},
  {path: '**', redirectTo: '/404'}

];



@NgModule({

  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports:[RouterModule,CommonModule],
  declarations: []
})
export class RoutingModule { }
