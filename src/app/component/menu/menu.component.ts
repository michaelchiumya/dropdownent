import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';
import { Artist } from 'src/app/interface/artist';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
artists : Artist[];


  constructor(private ArtistService: ArtistService) {

  }

  ngOnInit(): void {
    this.getArtistList();
  }

  getArtistList(){
    this.ArtistService.getArtist().subscribe((data: any)=>{
      console.log(data);
      this.artists = data;
    });
  }

}
