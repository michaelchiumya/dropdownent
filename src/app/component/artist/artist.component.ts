import { Component, OnInit, OnDestroy, Output } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { AlbumsService } from 'src/app/services/albums.service';
import { DataService } from 'src/app/services/data.service';
import { ArtistService } from 'src/app/services/artist.service';
import { MusicService } from 'src/app/services/music.service';
import { PlatformService } from 'src/app/services/platform.service';
import { Track } from 'ngx-audio-player';
import { BehaviorSubject } from 'rxjs';
import { fadeAnimation } from 'src/app/_animations/fadeAnimation';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { NgxNotificationsService } from 'ngx-notification-9';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css'],

  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})

export class ArtistComponent implements OnInit{

 private playlist : Track[];

  id :string;
  artist : any;
  songs : any[];
  albums :any;
  platform :any;

  primaryColour ='#dd0031';
  secondaryColour =  '#006ddd';
  ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;

  searchQuery: any;
  searchResults$ = new BehaviorSubject<any>(null);

  loading = false;
  playing = false;

  options = {
             timeOut: 3000,
             position: ["middle", "left"],
             showProgressBar: true,
             pauseOnHover: true,
             clickToClose: true
            }


  constructor(
    private AlbumsService: AlbumsService,
    private DataService: DataService,
    private MusicService: MusicService,
    private PlatformService: PlatformService,
    private ArtistService: ArtistService,
    private activeRoute: ActivatedRoute,
    private _playNotifications: NgxNotificationsService

    ) {}

  ngOnInit(): void
   {
    this.activeRoute.params.subscribe((res)=>{
        this.getArtist(res.id)
          this.getSongs(res.id)
          this.getAlbums(res.id)
          this.getPlatform(res.id)
           });


  }


  getArtist(id)
  {
    this.loading = true
    this.ArtistService.getArtistById(id).subscribe((arg)=>{
      this.loading = false
      this.artist= arg
    } );
  }

  getPlatform(id)
  {
    this.PlatformService.getById(id).subscribe((arg)=>this.platform = arg);
  }

  getSongs(id)
  {
    this.loading = true
    this.MusicService.getActiveSongs(id).subscribe((arg)=> {
      this.loading = false
      this.songs= arg
      this.searchResults$.next(arg)
    }
      );

  }

  getAlbums(id)
  {
    this.loading = true
    this.AlbumsService.showAlbums(id).subscribe((arg)=>{
      this.loading = false;
      this.albums = arg;
    } );
  }

  songLoader(song :any)
  {
    this._playNotifications.create(song.title + ' by ' + this.artist.name, 'now playing..');
    this.playing = true;
    this.playlist = [];
    var toAdd = {title: song.title, link: song.song};
    this.playlist.push(toAdd);
    this.DataService.storeData(this.playlist);
  }

  albumLoader(album :any)
  {
    this._playNotifications.create(album[0].album + ' album by ' + this.artist.name, 'now playing....');
    this.playing = true;
    this.playlist = [];
    album.forEach(element => {
      this.playlist.push( {title: element.title, link: element.song });
     });
    this.DataService.storeData(this.playlist);
  }

  playlistSong(song :any)
  {
    this._playNotifications.create(song.title + ' by ' + this.artist.name, 'added to playlist')
    var selectedSong = {title: song.title, link: song.song};
    this.playlist.push(selectedSong);
    this.DataService.storeData(this.playlist);
  }

  playlistAlbum(album :any)
  {
    this._playNotifications.create(album[0].title + ' album by' + this.artist.name, 'added to playlist')
      album.forEach(element => {
        this.playlist.push( {title: element.title, link: element.song });
       });

      this.DataService.storeData(this.playlist);
  }

  goToPlatform(url)
  {
    window.location.href = url;
  }

  search(searchTerm)
  {
    this.searchResults$.next(
      this.songs.filter(v =>
        {
        return v.title.toLowerCase().includes(searchTerm.toLowerCase());
       })
    );
  }


}
