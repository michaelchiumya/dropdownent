import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';
import { DataService } from 'src/app/services/data.service';
import { trigger, transition, animate, state, style } from '@angular/animations';



@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
  animations: [
    trigger('openClose', [

      state('open', style({
        transform: 'rotate(180deg)',
        position :' relative'
      })),
      state('closed', style({
        transform: 'rotate(0)',
        position :' relative'
      })),
      transition('open => closed', [
        animate('400ms ease-out')
      ]),
      transition('closed => open', [
        animate('450ms ease-out')
      ]),
    ]),
  ],
})
export class PlayerComponent implements OnInit {

  playlist :Track[] ;
  msaapDisplayTitle :boolean;
  msaapDisplayPlayList :boolean;
  pageSizeOptions :any;
  msaapDisplayVolumeControls :boolean;
  msaapPlaylist : Track[];
  isOpen = true
  constructor(private DataService: DataService) {}

  ngOnInit(): void {

    this.msaapDisplayTitle = false;
    this.msaapDisplayPlayList = false;
    this.pageSizeOptions = [5, 10, 15, 20];
    this.msaapDisplayVolumeControls = true;
    this.DataService.data.subscribe(data => this.msaapPlaylist = data);
        console.log(this.msaapPlaylist);
  }

minimisePlayer(){
  this.isOpen = !this.isOpen;
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
