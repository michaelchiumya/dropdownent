import { Component, OnInit } from '@angular/core';
import { AlbumsService } from 'src/app/albums.service';
import { DataService } from 'src/app/data.service';
import { ArtistService } from 'src/app/artist.service';
import { Track } from 'ngx-audio-player';


@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  public songs : any;
  public albums :any;
  public playlist : Track[] = null;
  public artist :any;

  constructor(private AlbumsService: AlbumsService, private DataService: DataService, private ArtistService: ArtistService) { }

  ngOnInit(): void {
        this.songs = this.AlbumsService.showSongs();
        this.albums = this.AlbumsService.showAlbums();
        this.artist = this.ArtistService.getArtist();
       }

  songLoader(song :any){
    console.log('song '+song);
    var toAdd: Track[];
    toAdd = [{title: song.title, link: song.link}];
    this.playlist = toAdd;
    this.DataService.storeData(this.playlist);

  }

  albumLoader(album : Track[]){
    console.log('album '+ album);
    this.playlist = album;
    this.DataService.storeData(this.playlist);
  }

  playlistSong(song :any){
    var selectedSong = {title: song.title, link: song.link};
    this.playlist.push(selectedSong);
    this.DataService.storeData(this.playlist);
    }

    playlistAlbum(album :any){
       this.playlist.push(album);
       this.DataService.storeData(this.playlist);

  }

}
