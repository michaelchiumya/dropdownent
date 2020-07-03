import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';
import { Song } from 'src/app/interface/song';
import { Router } from '@angular/router';
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
  deleteError :any;

  constructor(
    private MusicService : MusicService,
    private router : Router
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

  delete(id)
 {
   this.MusicService.destroy(id).subscribe(
     (response)=>{ },
     (error)=>{this.deleteError = error}
      )
   this.router.navigate(['admin']);
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
