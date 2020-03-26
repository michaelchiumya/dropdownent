import { Component, OnInit } from '@angular/core';
import { AlbumsService } from 'src/app/albums.service';
import { DataService } from 'src/app/data.service';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {


  public albums : any;
  public playlist :Track[];
  public list :any;

  constructor(private AlbumsService: AlbumsService,private DataService: DataService) { }

  ngOnInit(): void {
        this.albums = this.AlbumsService.showSongs();
  }


  songLoader(song :any){

    console.log(song);
    var toAdd: Track[];
    toAdd = [{title: song.title, link: song.link}];
    this.DataService.storeData(toAdd);


  }

}
