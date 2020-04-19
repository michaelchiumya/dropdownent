import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/artist.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  artistData :any ;
  constructor(private ArtistService: ArtistService ) { }

  ngOnInit(): void {
    this.artistData = this.ArtistService.getArtistsBlock();
  }

}
