import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';
import { Artist } from 'src/app/interface/artist';
import { PortalAuthService } from 'src/app/services/portal-auth.service';
import { Router } from '@angular/router';
import { Admin } from 'src/app/interface/admin';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit,OnDestroy {

artists : Artist[];
user : any ;
name :string;
display :any;


  constructor(
    private ArtistService: ArtistService,
    private PortalAuth: PortalAuthService,
    private route: Router
    ) {}

  ngOnInit(): void
 {
    this.getArtistList();
    this.PortalAuth._subject$.subscribe((data)=>{

      this.display = data
    })
    this.getAdmin();

}

getAdmin()
{
  this.PortalAuth.userDetails().subscribe((data)=>{
    this.display = data
  })
}

getArtistList()
  {
    this.ArtistService.getActiveArtist().subscribe((data: any)=>{
      this.artists = data;
    });
  }

  logout()
  {
    sessionStorage.removeItem('token');
     this.user= null;
     this.display= null;
     this.PortalAuth.logout().subscribe((res)=>{
       console.log(res);
     });
      this.route.navigate(['/login']);
   }

ngOnDestroy()
{
   this.ArtistService.getActiveArtist().unsubscribe();
}

}
