import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/services/artist.service';
import { AdminService } from 'src/app/services/admin.service';
import { Artist } from 'src/app/interface/artist';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  artistData : Artist[];
  fanForm : FormGroup
  noFan: any;
  newFan: any;

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
    this.ArtistService.getActiveArtist().subscribe((data: any)=>{
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
