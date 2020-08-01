import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';
import { AdminService } from 'src/app/services/admin.service';
import { Artist } from 'src/app/interface/artist';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { fadeAnimation } from 'src/app/_animations/fadeAnimation';
import { ngxLoadingAnimationTypes } from 'ngx-loading';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [fadeAnimation],
  host: { '[@fadeAnimation]': '' }
})
export class HomeComponent implements OnInit {
  artistData : Artist[];
  fanForm : FormGroup;
  noFan: any;
  newFan: any;

  loading = false;
  public primaryColour ='#dd0031';
  public secondaryColour =  '#006ddd';
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;


  constructor(
    private ArtistService: ArtistService,
    private AdminService : AdminService,
    private fb :FormBuilder
    ) { }

  ngOnInit(): void {
   this.getArtistList();
   this.fanForm = this.fb.group({
     email: ['', [Validators.required]]
   });



  }

  getArtistList(){
    this.loading = true;
    this.ArtistService.getActiveArtist().subscribe(
      (data: any)=>
      {
        this.loading = false;
        this.artistData = data;
      });
  }

  funpageSubmit()
  {
    this.AdminService.postFan(this.fanForm.value).subscribe(
      (data)=> {this.newFan = data},
      (error)=>{ this.noFan = error}
    );
  }

}
