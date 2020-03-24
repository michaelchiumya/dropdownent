import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ArtistComponent } from './component/artist/artist.component';

export const routes: Routes = [
  {path: 'home',  component: HomeComponent},
  {path:'artist', component: ArtistComponent},
  { path:'',redirectTo:'/home',pathMatch:'full'}
];



@NgModule({
  declarations: [],
  imports: [
    [RouterModule.forRoot(routes)]
  ],
  exports:[RouterModule]
})
export class RoutingModule { }
