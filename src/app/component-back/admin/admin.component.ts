import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';
import { VideosService } from 'src/app/services/videos.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MusicService } from 'src/app/services/music.service';
import { Admin } from 'src/app/interface/admin';
import { Artist } from 'src/app/interface/artist';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  artistForm :  FormGroup;
  videoForm :   FormGroup;
  addSongForm : FormGroup;
  admin : Admin;
  artists: Artist[];

  songError :any;
  songSuccess: any;
  artistError: any;
  artistSuccess: any;
  videoError: any;
  videoSuccess: any;

  @ViewChild('asong') asong: ElementRef;
  @ViewChild('vimage') vimage: ElementRef;

  constructor(
    private fb: FormBuilder,
    private ArtistService: ArtistService,
    private VideosService: VideosService,
    private MusicService: MusicService,
    private route: Router
    )
   { }

  ngOnInit(): void
   {
    this.getArtistList();
    this.artistForm =  this.fb.group({
        name: ['', [Validators.required]],
        biography: ['',Validators.required]
      });

   this.videoForm =  this.fb.group({
      artistId: ['', [Validators.required]],
      title: ['', [Validators.required]],
      link: ['',Validators.required],
      file: ['',Validators.required]
    });

 this.addSongForm =  this.fb.group({
    artistId: ['', [Validators.required]],
    title: ['', [Validators.required]],
    album: ['', [Validators.required]],
    file: ['',Validators.required]
     });

}

getArtistList()
{
  this.ArtistService.getArtist().subscribe((data: any)=>{
    this.artists = data;
      },
    (error)=>{
       this.artistError = error
    });
}

onArtistSubmit()
{
  if(this.artistForm.valid)
  {
     this.ArtistService.postArtist(this.artistForm.value).subscribe(
       (data)=> {this.artistSuccess = data},
       (error)=>{ this.artistError= error}

     );
     console.log(this.artistSuccess)
       this.artistForm.reset();
  }
}

onArtistImageSelect(event)
 {
    if (event.target.files.length > 0)
    {
      const file = event.target.files[0];
      this.artistForm.get('image').setValue(file);
    }
}

// onSongCoverSelect(event)
//  {
//     if (event.target.files.length > 0)
//     {
//       const file = event.target.files[0];
//       this.addSongForm.get('file').patchValue({
//         file : file
//       })
//     }
// }

onSongSelect(event)
{
    if(event.target.files.length > 0)
     {
       const file = event.target.files[0];
       this.addSongForm.get('file').patchValue({
          file : file
       })

     }
  }

 onSongSubmit()
 {
  if(this.addSongForm.valid)
  {
     var formData = new FormData();
       formData.append('artistId', this.addSongForm.get('artistId').value);
       formData.append('title', this.addSongForm.get('title').value);
       formData.append('album', this.addSongForm.get('album').value);
       formData.append('file', this.addSongForm.get('file').value);

      this.MusicService.postSong(formData).subscribe(
           response=>{ this.songSuccess = response },
           error  => { this.songError = error}
       )
       this.addSongForm.reset();
       this.asong.nativeElement.value = null;
   }

 }

onVideoImageSelect(event)
{
  if(event.target.files.length > 0)
     {
       const file = event.target.files[0];
       this.videoForm.patchValue({
         file : file
       });
     }
}

onVideoSubmit()
  {
    if(this.videoForm.valid)
    {
      var formData = new FormData();
      formData.append('artistId', this.videoForm.get('artistId').value);
      formData.append('title', this.videoForm.get('title').value);
      formData.append('link', this.videoForm.get('link').value);
      formData.append('file', this.videoForm.get('file').value);

         this.VideosService.postVideo(formData).subscribe(
               response=>{this.videoSuccess = response},
               error  => { this.videoError = error }
           );
           this.videoForm.reset();
           this.vimage.nativeElement.value = null;
    }

   }

}
