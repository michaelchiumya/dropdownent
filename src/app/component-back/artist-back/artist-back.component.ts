import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild('aimage') aimage: ElementRef;

  imgError :any;
  imgSuccess :any;
  updateSuccess :any
  updateError: any;
  deleteError: any;

  constructor(
    private ArtistService: ArtistService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router

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
   this.ArtistService.postImage(formData, id).subscribe(
     (res)=>{this.imgSuccess = res},
     (error)=>{this.imgError = error}
   );
   this.aimage.nativeElement.value = null;
}

UpdateFormSubmit(){

  if(this.updateform.valid)
     {
      this.ArtistService.updateArtist(this.updateform.value, this.id).subscribe(
              response=>{ this.updateSuccess=response},
              error  => { this.updateError=error}
          );
    }
}

deleteArtist(id)
 {
   this.ArtistService.destroyArtist(id).subscribe(
     (response)=>{ },
     (error)=>{this.deleteError = error}
      )
   this.router.navigate(['admin']);
 }
}
