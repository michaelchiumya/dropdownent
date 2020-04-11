import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ArtistComponent } from './component/artist/artist.component';
import { VideosComponent } from './component/videos/videos.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { AdminComponent } from './component/admin/admin.component';



export const routes: Routes = [
  { path:'', redirectTo: '/home', pathMatch:'full'},
  {path: 'home',  component: HomeComponent},
  {path: 'admin',  component: AdminComponent},
  {path:'artist', component: ArtistComponent},
  {path:'videos', component: VideosComponent},
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
