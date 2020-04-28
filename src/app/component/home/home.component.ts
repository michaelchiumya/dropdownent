import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';
import { Artist } from 'src/app/interface/artist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  artistData : Artist[];
  constructor(private ArtistService: ArtistService ) { }

  ngOnInit(): void {
   this.getArtistList();
  }

  getArtistList(){
    this.ArtistService.getArtist().subscribe((data: any)=>{
      console.log(data);
      this.artistData = data;
    });
  }

}
