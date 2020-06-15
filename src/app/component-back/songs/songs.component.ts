import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Song } from 'src/app/interface/song';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {

  songs : Song[];
  searchResults$ = new BehaviorSubject<any>(null);
  searchQuery: any;

  constructor(
    private MusicService : MusicService,
    private fb :FormBuilder
    ) { }

  ngOnInit()
  {
    this.loadSongs();
  }

  loadSongs()
  {
    this.MusicService.getAllSongs().subscribe((data)=>{
     this.songs = data
     this.searchResults$.next(data);
    })
  }

  deleteSong(id)
  {
    this.MusicService.destroySong(id).subscribe();
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
