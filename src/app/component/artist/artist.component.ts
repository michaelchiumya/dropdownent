import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from 'src/app/services/albums.service';
import { DataService } from 'src/app/services/data.service';
import { ArtistService } from 'src/app/services/artist.service'
import { Track } from 'ngx-audio-player';
import { CarouselConfig, CarouselAlignMode } from 'ng-carousel-cdk';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})

export class ArtistComponent implements OnInit {

  songs : any[];
  albums :any;
  private playlist : Track[];
  private id :string;
  artist :any;
  config: CarouselConfig ;


  constructor(
    private AlbumsService: AlbumsService,
    private DataService: DataService,
    private ArtistService: ArtistService,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {

        this.id = this.route.snapshot.paramMap.get('id');
        var numId = Number(this.id);
        this.ArtistService.getArtistById(numId).subscribe(arg=> this.artist= arg);
        this.config = {items: this.songs, shouldLoop: false, slideWidth: 80, autoplayEnabled: false}
        console.log(this.artist);
       }

  songLoader(song :any){
    // console.log('song '+song);
    this.playlist = [];
    var toAdd = {title: song.title, link: song.link};
    this.playlist.push(toAdd);
    this.DataService.storeData(this.playlist);

  }

  albumLoader(album :any){
    //console.log('album '+ album);
    this.playlist = [];
    this.playlist.push(album);
    this.DataService.storeData(album);
  }

  playlistSong(song :any){
    var selectedSong = {title: song.title, link: song.link};
    this.playlist.push(selectedSong);
    this.DataService.storeData(this.playlist);
    }

    playlistAlbum(album :any){
       album.forEach(element => {
        this.playlist.push( {title: element.title, link: element.link });
       });
       //console.log(this.playlist);
       this.DataService.storeData(this.playlist);
       }



}
