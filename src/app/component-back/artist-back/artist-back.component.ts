import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';
import { AuthService } from 'src/app/services/auth.service';
import { Artist } from 'src/app/interface/artist';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-artist-back',
  templateUrl: './artist-back.component.html',
  styleUrls: ['./artist-back.component.css']
})
export class ArtistBackComponent implements OnInit {

  artist : any;
  artists : Artist[];
  updateform: FormGroup;
  imageform: FormGroup;
  access_token = '';

  constructor(private ArtistService: ArtistService,private fb: FormBuilder, private AuthService:AuthService) { }

  ngOnInit(): void
  {
       this.getArtistList();
       this.updateform = this.fb.group({
            artistId: ['', [Validators.required]],
            status: ['', [Validators.required]],
            name: ['', [Validators.required]],
            biography: ['', [Validators.required]]
            });

      this.imageform = this.fb.group({
          artistId: ['', [Validators.required]],
          image: ['', [Validators.required]]
          });

          this.AuthService.getAccess().subscribe((res)=> {
            this.access_token = res['token']
           });
}

getAppCredentials(): void
{
    this.AuthService.getAppUserDetails(this.access_token).subscribe((res)=>
    {
      this.artist = res;
      console.log(this.artist);

    });
}

getAuthentication(): void
{
      this.AuthService.getAccess().subscribe((res)=>{
        this.access_token = res['access_token'];
      });
}

getArtistList()
{
  this.ArtistService.getArtist().subscribe((data: any)=>{
    console.log(data);
    this.artists = data;
  });
}


onImageSelect(event){
  if(event.target.files.length > 0)
  {
    const image = event.target.files[0];
    this.imageform.patchValue({
      image : image
    });
  }
}

UpdateImageSubmit(){
  var formData = new FormData();
  var id =  this.imageform.get('artistId').value;

  formData.append('image', this.imageform.get('image').value);
  formData.append('id', id);
   this.ArtistService.postImage(formData, id).subscribe(
              response=>{ console.log(response); },
              error  => { console.log("Rrror", error); }
          );
       console.log(formData.get('image'),id);
}

UpdateFormSubmit(){
  if(this.updateform.valid){
       console.log(this.updateform);
       let id = this.updateform.get('artistId').value;
       this.ArtistService.updateArtist(this.updateform.value, id).subscribe(
              response=>{ console.log(response); },
              error  => { console.log("Rrror", error); }
          );

   }else{
    console.log('form not valid');
   }
}


}
