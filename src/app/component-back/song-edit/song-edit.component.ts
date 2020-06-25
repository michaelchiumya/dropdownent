import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MusicService } from 'src/app/services/music.service';
import { ActivatedRoute } from '@angular/router';
import { Song } from 'src/app/interface/song';

@Component({
  selector: 'app-song-edit',
  templateUrl: './song-edit.component.html',
  styleUrls: ['./song-edit.component.css']
})
export class SongEditComponent implements OnInit {

  SongUpdateForm : FormGroup;
  songCoverForm : FormGroup;
  SongActiveForm : FormGroup;

  imgError :any;
  imgSuccess :any;
  updateSuccess :any
  updateError: any;

  activeError: any;
  activeSuccess :any;

  songs = new Song;
  id :any;

  @ViewChild('simage') simage: ElementRef;

  constructor(
    private fb :FormBuilder,
    private MusicService : MusicService,
    private route:  ActivatedRoute
  ) {}

  ngOnInit(): void
  {
    this.SongUpdateForm =  this.fb.group({
      title: ['', [Validators.required]],
      album: ['', [Validators.required]]
    });

    this.songCoverForm =  this.fb.group({
      file: ['', [Validators.required]],
      album: ['',  [Validators.required]]
    });

    this.SongActiveForm =  this.fb.group({
      active: ['', [Validators.required]],
    });

    this.id = this.route.snapshot.paramMap.get('id');

    this.loadSong();
  }

 loadSong()
 {
  this.MusicService.getSong(this.id).subscribe((data)=>{
    this.songs = data;
  })
 }

UpdateSongSubmit(){
  if(this.SongUpdateForm.valid)
     {
      this.MusicService.updateSong(this.SongUpdateForm.value, this.id).subscribe(
        (data)=>{this.updateSuccess = data},
        (error)=>{this.updateError = error}
      );
    }
 }

 activateSongSubmit(){
  if(this.SongActiveForm.valid)
     {
      this.MusicService.activateSong(this.SongActiveForm.value, this.id).subscribe(
        (data)=>{this.activeSuccess = data},
        (error)=>{this.activeError = error}
      );
    }
 }

onSongCoverSelect(event)
 {
   if(event.target.files.length > 0)
   {
     const file = event.target.files[0];
     this.songCoverForm.get('file').setValue(file)
   }
 }

 UpdateImageSubmit(){
  var formData = new FormData();

  formData.append('file', this.songCoverForm.get('file').value);
  formData.append('album', this.songs.album );
   this.MusicService.postImage(formData, this.id).subscribe(
     (res)=>{this.imgSuccess = res},
     (error)=>{this.imgError = error}
   );
   this.simage.nativeElement.value = null;
}

}
