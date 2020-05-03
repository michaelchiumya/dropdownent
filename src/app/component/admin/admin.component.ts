import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';
import { VideosService } from 'src/app/services/videos.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { PortalAuthService } from 'src/app/services/portal-auth.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})

export class AdminComponent implements OnInit {
  artistForm :  FormGroup;
  videoForm :   FormGroup;
  addSongForm : FormGroup;
  admin : any;
  token :string = '';

  constructor(
    private fb: FormBuilder,
    private ArtistService: ArtistService,
    private VideosService: VideosService,
    private PortalAuth: PortalAuthService,
    private route: Router
    )
   { }

  ngOnInit(): void
   {
    this.token = localStorage.getItem('token');
    this.PortalAuth.userDetails(this.token).subscribe((res)=>{
         this.admin = res;
        });

    this.artistForm =  this.fb.group({
        name: ['', [Validators.required]],
        biography: ['',Validators.required]
      });

   this.videoForm =  this.fb.group({
       artistId: ['', [Validators.required]],
      title: ['', [Validators.required]],
      link: ['',Validators.required]
    });

 this.addSongForm =  this.fb.group({
    artistId: ['', [Validators.required]],
    title: ['', [Validators.required]],
    album: ['', [Validators.required]],
    file: ['',Validators.required]
     });
}

onSongSelect(event)
{
    if(event.target.files.length > 0)
     {
       const file = event.target.files[0];
       this.addSongForm.patchValue({
         file : file
       });
     }
  }

onArtistImageSelect(event)
 {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.artistForm.get('image').setValue(file);
    }
  }

 onSongSubmit()
 {
  if(this.addSongForm.valid){
     var formData = new FormData();
       formData.append('artistId', this.addSongForm.get('artistId').value);
       formData.append('title', this.addSongForm.get('title').value);
       formData.append('album', this.addSongForm.get('album').value);
       formData.append('file', this.addSongForm.get('file').value);
       console.log(formData);

      console.log(this.addSongForm.valid);
      this.ArtistService.postSong(formData).subscribe(
           response=>{ console.log(response); },
           error  => { console.log("Rrror", error); }
       );

       this.artistForm.reset();
   }else{
       console.log('form not valid');
     }
 }

  onArtistSubmit()
   {
     if(this.artistForm.valid){
       console.log(this.artistForm.valid);
        this.ArtistService.postArtist(this.artistForm.value).subscribe(
              response=>{ console.log(response); },
              error  => { console.log("Rrror", error); }
           );
          this.artistForm.reset();
     }else{
       console.log('form not valid');
      }
  }


  onVideoSubmit()
  {
    if(this.videoForm.valid){
        console.log(this.videoForm.valid);
         this.VideosService.postVideo(this.videoForm.value).subscribe(
               response=>{ console.log(response); },
               error  => { console.log("Rrror", error); }
           );
         this.videoForm.reset();
    }else{
      console.log('form not valid');
      }
   }


   logout()
   {
     localStorage.removeItem('token');
     this.PortalAuth.logout().subscribe((res)=>{
       console.log(res);
     });
      this.route.navigate(['/home']);
   }

}
