import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MusicService } from 'src/app/services/music.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-song-edit',
  templateUrl: './song-edit.component.html',
  styleUrls: ['./song-edit.component.css']
})
export class SongEditComponent implements OnInit {

  SongUpdateForm : FormGroup;
  songCoverForm : FormGroup;
  SongActiveForm : FormGroup;
  update: any;
  noUpdate: any;
  songs :any;
  id :any;

  constructor(
    private fb :FormBuilder,
    private MusicService : MusicService,
    private route:  ActivatedRoute
  ) {}

  ngOnInit(): void
  {
    this.SongUpdateForm =  this.fb.group({
      id :['', [Validators.required]],
      title:[],
      active: ['', [Validators.required]],
      album: ['', [Validators.required]],
      song : [],
      cover : [],
      artist_id : []
    });

    this.songCoverForm =  this.fb.group({
      file: ['', [Validators.required]],
    });

    this.SongActiveForm =  this.fb.group({
      active: ['', [Validators.required]],
    });

    this.loadSong();

  }

loadSong()
{
  this.id = this.route.snapshot.paramMap.get('id');
  this.MusicService.getSong(this.id).subscribe((data)=>{
    this.songs = data
  })
}

UpdateSongSubmit(){
  if(this.SongUpdateForm.valid){
    let aid : any = this.SongUpdateForm.get('id').value;
      this.MusicService.updateSong(this.SongUpdateForm.value, aid).subscribe(
        (data)=>{this.update = data},
        (error)=>{this.noUpdate = error}
      );
   }
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


}
