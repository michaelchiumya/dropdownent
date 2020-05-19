import { Component, OnInit, OnDestroy } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';
import { Artist } from 'src/app/interface/artist';
import { PortalAuthService } from 'src/app/services/portal-auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit,OnDestroy {

artists : Artist[];
user : any ;
name :string;
display ;

  constructor(
    private ArtistService: ArtistService,
    private PortalAuth: PortalAuthService,
    private route: Router
    ) {}

  ngOnInit(): void
 {
    this.getArtistList();

    this.PortalAuth.userDetails().subscribe((data)=>{
      this.display = data
      console.log('data', this.display)
    })

  }

  getArtistList()
  {
    this.ArtistService.getArtist().subscribe((data: any)=>{
      console.log(data);
      this.artists = data;
    });
  }

  logout()
   {
     sessionStorage.removeItem('token');
     this.user= null;
     this.PortalAuth.subject.next('sign in!')
    //  this.PortalAuth.logout().subscribe((res)=>{
    //    console.log(res);
    //  });
      this.route.navigate(['/login']);
   }

ngOnDestroy()
{
   this.ArtistService.getArtist().unsubscribe();
}

}
