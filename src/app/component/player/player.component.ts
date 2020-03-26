import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';
import { AlbumsService } from 'src/app/albums.service';
import { DataService } from 'src/app/data.service';



@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  playlist :Track[] ;
  msaapDisplayTitle :boolean;
  msaapDisplayPlayList :boolean;
  pageSizeOptions :any;
  msaapDisplayVolumeControls :boolean;
  msaapPlaylist : Track[];



  constructor(private AlbumsService: AlbumsService,private DataService: DataService) {

  }
  ngOnInit(): void {

    this.msaapDisplayTitle = true;
    this.msaapDisplayPlayList = true;
    this.pageSizeOptions = [5, 10, 15, 20];
    this.msaapDisplayVolumeControls = true;
    this.DataService.data.subscribe(data => this.msaapPlaylist = data);
        console.log(this.msaapPlaylist);
  }






//DataService.data.subscribe(data => {
//   //do what ever needs doing when data changes
// })

}
