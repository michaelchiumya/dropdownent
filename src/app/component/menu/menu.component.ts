import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
artists : any[];


  constructor(private ArtistService: ArtistService) {

  }

  ngOnInit(): void {
   this.artists =  this.ArtistService.getArtist().subscribe(arg=>this.artists = arg);

  }


}
