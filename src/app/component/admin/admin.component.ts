import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/artist.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  artistForm : FormGroup;

  constructor(private fb:FormBuilder, private ArtistService: ArtistService) { }

  ngOnInit(): void {
    this.artistForm = this.fb.group({
      name: [''],
      biography: ['']
    });
  }

  onArtistImageSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.artistForm.get('image').setValue(file);

    }


  }

  onArtistSubmit() {
    // this.artistForm.get('name').setValue('name');
    // this.artistForm.get('biobraphy').setValue('biography');

   let formData = new FormData();
   formData.append('name', this.artistForm.get('name').value);
   formData.append('biobraphy', this.artistForm.get('biography').value);
   //formData.append('image', this.artistForm.get('image').value);
    this.ArtistService.postArtist(formData);
    console.log( 'form', formData);

  }


}
