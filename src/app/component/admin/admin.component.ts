import { Component, OnInit } from '@angular/core';
import { ArtistService } from 'src/app/artist.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private ArtistService: ArtistService) { }

  ngOnInit(): void {
  }


}
