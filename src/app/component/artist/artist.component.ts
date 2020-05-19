import { Component, OnInit, OnDestroy } from '@angular/core';
import {Router, NavigationEnd,ActivatedRoute } from '@angular/router';
import { AlbumsService } from 'src/app/services/albums.service';
import { DataService } from 'src/app/services/data.service';
import { ArtistService } from 'src/app/services/artist.service';
import { MusicService } from 'src/app/services/music.service'
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})

export class ArtistComponent implements OnInit,OnDestroy {

  songs : any[];
  albums :any;
  private playlist : Track[];
  id :string;
  artist : any;


  constructor(
    private AlbumsService: AlbumsService,
    private DataService: DataService,
    private MusicService: MusicService,
    private ArtistService: ArtistService,
    private activeRoute: ActivatedRoute,
    private route: Router
    ) {}

  ngOnInit(): void
   {
          this.activeRoute.params.subscribe((res)=>{
            this.getArtist(res.id)
            this.getSongs(res.id)
           })
          this.albums = this.AlbumsService.showAlbums()
  }

  getArtist(id)
  {
    this.ArtistService.getArtistById(id).subscribe(arg=> this.artist= arg);
  }

  getSongs(id)
  {
    this.MusicService.getSongs(id).subscribe(arg=> this.songs= arg);
  }

  songLoader(song :any)
  {
    this.playlist = [];
    var toAdd = {title: song.title, link: song.song};
    this.playlist.push(toAdd);
    this.DataService.storeData(this.playlist);
  }

  albumLoader(album :any)
  {
    this.playlist = [];
    this.playlist.push(album);
    this.DataService.storeData(album);
  }

  playlistSong(song :any)
  {
    var selectedSong = {title: song.title, link: song.song};
    this.playlist.push(selectedSong);
    this.DataService.storeData(this.playlist);
  }

  playlistAlbum(album :any)
  {
       album.forEach(element => {
        this.playlist.push( {title: element.title, link: element.link });
       });
       this.DataService.storeData(this.playlist);
  }

ngOnDestroy()
{
  //this.ArtistService.getArtist().unsubscribe()
}

}
