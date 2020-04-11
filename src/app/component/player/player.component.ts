import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';
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



  constructor(private DataService: DataService) {

  }
  ngOnInit(): void {

    this.msaapDisplayTitle = false;
    this.msaapDisplayPlayList = false;
    this.pageSizeOptions = [5, 10, 15, 20];
    this.msaapDisplayVolumeControls = true;
    this.DataService.data.subscribe(data => this.msaapPlaylist = data);
        console.log(this.msaapPlaylist);
  }

minimisePlayer(){
if(this.msaapDisplayTitle == true && this.msaapDisplayPlayList == true){
  this.msaapDisplayTitle = false;
  this.msaapDisplayPlayList = false;
}else if(this.msaapDisplayTitle == false && this.msaapDisplayPlayList == false){
  this.msaapDisplayTitle = true;
  this.msaapDisplayPlayList = true;
}

}


//DataService.data.subscribe(data => {
//   //do what ever needs doing when data changes
// })

}
