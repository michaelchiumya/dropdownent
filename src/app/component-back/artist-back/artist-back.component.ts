import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';
import { Artist } from 'src/app/interface/artist';

@Component({
  selector: 'app-artist-back',
  templateUrl: './artist-back.component.html',
  styleUrls: ['./artist-back.component.css']
})
export class ArtistBackComponent implements OnInit {
  artists : Artist[];

  constructor(private ArtistService: ArtistService) { }

  ngOnInit(): void {
    this.ArtistService.getArtist()
      .subscribe(arg => this.artists = arg );
  }

}
