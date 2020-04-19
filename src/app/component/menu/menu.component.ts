import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/artist.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
artists : any;
  constructor(private ArtistService: ArtistService) {
     this.artists = this.ArtistService.getArtistsBlock();
  }

  ngOnInit(): void {
  }

}
