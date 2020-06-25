import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';
import { VideosService } from 'src/app/services/videos.service';
import { PlatformService } from 'src/app/services/platform.service';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
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
  platformForm : FormGroup;
  admin : Admin;
  artists: Artist[];

  songError :any;
  songSuccess: any;
  artistError: any;
  artistSuccess: any;
  videoError: any;
  videoSuccess: any;
  platformError :any;
  platformSuccess :any;

  @ViewChild('asong') asong: ElementRef;
  @ViewChild('vimage') vimage: ElementRef;

  constructor(
    private fb: FormBuilder,
    private ArtistService: ArtistService,
    private VideosService: VideosService,
    private MusicService: MusicService,
    private PlatformService: PlatformService,
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

     this.platformForm =  this.fb.group({
      name: ['', [Validators.required]],
      link: ['',Validators.required],
      artistId: ['', [Validators.required]],
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

onSongSelect(event)
{
    if(event.target.files.length > 0)
     {
      const file = event.target.files[0];
      this.addSongForm.get('file').setValue(file);
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
           (response)=>{ this.songSuccess = response },
           (error)  => { this.songError = error}
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
               (response) => {this.videoSuccess = response},
               (error) => { this.videoError = error }
           );
           this.videoForm.reset();
           this.vimage.nativeElement.value = null;
    }
}

onPlatformSubmit()
{
    if(this.platformForm.valid)
    {
      let platform = this.platformForm.get('name').value;
      switch (platform) {
        case 'deezer':
            this.platformForm.addControl('image', new FormControl('', Validators.required));
            this.platformForm.addControl('name', new FormControl('', Validators.required));
            this.platformForm.get('image').setValue('https://img.icons8.com/color/32/000000/deezer.png');
            this.platformForm.get('name').setValue(platform);
          break;
        case 'spotify':
          this.platformForm.addControl('image', new FormControl('', Validators.required));
          this.platformForm.addControl('name', new FormControl('', Validators.required));
          this.platformForm.get('image').setValue('https://img.icons8.com/color/32/000000/spotify--v1.png');
          this.platformForm.get('name').setValue(platform);
            break;
        case 'tidal':
          this.platformForm.addControl('image', new FormControl('', Validators.required));
          this.platformForm.addControl('name', new FormControl('', Validators.required));
          this.platformForm.get('image').setValue('https://img.icons8.com/material/32/000000/tidal.png');
          this.platformForm.get('name').setValue(platform);
              break;
        case 'apple music':
                this.platformForm.addControl('image', new FormControl('', Validators.required));
                this.platformForm.addControl('name', new FormControl('', Validators.required));
                this.platformForm.get('image').setValue('/assets/img/logos/apple.png');
                this.platformForm.get('name').setValue(platform);
                  break;
      case 'malawi music':
                this.platformForm.addControl('image', new FormControl('', Validators.required));
                this.platformForm.addControl('name', new FormControl('', Validators.required));
                this.platformForm.get('image').setValue('/assets/img/logos/mmlogo.jpg');
                this.platformForm.get('name').setValue(platform);
                break;
        default:
             this.platformForm.invalid
          break;
       }

         this.PlatformService.postPlatform(this.platformForm.value).subscribe(
               (response) => {this.platformSuccess = response},
               (error) => { this.platformError = error }
           );
           this.videoForm.reset();
    }
}

}
