import { Component, OnInit } from '@angular/core';
import { MusicService } from 'src/app/services/music.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-songs',
  templateUrl: './songs.component.html',
  styleUrls: ['./songs.component.css']
})
export class SongsComponent implements OnInit {
  songs: any
  SongUpdateForm : FormGroup
  songCoverForm :FormGroup

  constructor(private MusicService : MusicService,private fb :FormBuilder) { }

  ngOnInit()
  {
    this.MusicService.getAllSongs().subscribe((data)=>{
      this.songs = data
    })

    this.SongUpdateForm =  this.fb.group({
      id :[],
      active: ['', [Validators.required]],
      album: ['', [Validators.required]],
    });

    this.songCoverForm =  this.fb.group({
      file: ['', [Validators.required]],
    });
  }

onSongCoverSelect(event)
{
  if(event.target.files.length > 0)
  {
    const file = event.target.files[0];
    this.songCoverForm.patchValue({
      file : file
    });
  }
}


UpdateSongSubmit(){

 if(this.SongUpdateForm.valid){
   let id : any = this.SongUpdateForm.get('id')
     this.MusicService.updateSong(this.SongUpdateForm.value, id).subscribe();
  }
}

deleteSong(id)
{
  this.MusicService.destroySong(id).subscribe();
}



}
