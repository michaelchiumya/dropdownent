import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';
import { Artist } from 'src/app/interface/artist';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-artist-back',
  templateUrl: './artist-back.component.html',
  styleUrls: ['./artist-back.component.css']
})
export class ArtistBackComponent implements OnInit {
  artists : Artist[];
  updateform: FormGroup;
  imageform: FormGroup;

  constructor(private ArtistService: ArtistService,private fb: FormBuilder) { }

  ngOnInit(): void {
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

}

getArtistList(){
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
