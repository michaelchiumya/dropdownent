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


  public songs : any;
  public albums :any;
  public playlist :Track[];
  public list :any;

  constructor(private AlbumsService: AlbumsService,private DataService: DataService) { }

  ngOnInit(): void {
        this.songs = this.AlbumsService.showSongs();
        this.albums = this.AlbumsService.showAlbums();
  }

  songLoader(song :any){
    console.log('song '+song);
    var toAdd: Track[];
    toAdd = [{title: song.title, link: song.link}];
    this.DataService.storeData(toAdd);

  }

  albumLoader(album : Track[]){
    console.log('album '+ album);

    this.DataService.storeData(album);
  }

}
