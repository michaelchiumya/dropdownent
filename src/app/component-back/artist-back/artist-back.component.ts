import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Artist } from 'src/app/interface/artist';

@Component({
  selector: 'app-artist-back',
  templateUrl: './artist-back.component.html',
  styleUrls: ['./artist-back.component.css']
})
export class ArtistBackComponent implements OnInit {
  id : string;
  artist = new Artist()
  updateform: FormGroup;
  imageform: FormGroup;

  constructor(
    private ArtistService: ArtistService,
    private fb: FormBuilder,
    private route: ActivatedRoute,

    ) { }

  ngOnInit(): void
  {
       this.updateform = this.fb.group({
            id: ['', [Validators.required]],
            active: ['', [Validators.required]],
            name: ['', [Validators.required]],
            biography: ['', [Validators.required]]
            });

      this.imageform = this.fb.group({
          image: ['',[Validators.required]]
          });

      this.loadArtist()
}

loadArtist(){
  this.id = this.route.snapshot.paramMap.get('id');
  var numId = Number(this.id);
  this.ArtistService.getArtistById(numId).subscribe((arg)=>{
    this.artist = arg
  })
}

onImageSelect(event)
{
  if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.imageform.get('image').setValue(file,{emitModelToViewChange: true})
    }
}

UpdateImageSubmit(){
  var formData = new FormData();
  var id =  this.id;
  formData.append('image', this.imageform.get('image').value);
   this.ArtistService.postImage(formData, id).subscribe();
}

UpdateFormSubmit(){

  if(this.updateform.valid)
     {
      this.ArtistService.updateArtist(this.updateform.value, this.id).subscribe(
              response=>{ console.log(response); },
              error  => { console.log("Rrror", error); }
          );
    }
}

deleteArtist(id)
 {
   this.ArtistService.destroyArtist(id).subscribe((response)=>{
     console.log(response)
   })
 }
}
