import { Component, OnInit } from '@angular/core';
import { Track } from 'ngx-audio-player';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  msaapDisplayTitle = true;
msaapDisplayPlayList = true;
msaapPageSizeOptions = [2,4,6];
msaapDisplayVolumeControls = true;

// Material Style Advance Audio Player Playlist
msaapPlaylist: Track[] = [
  {
    title: 'Audio One Title',
    link: 'Link to Audio One URL'
  },
  {
    title: 'Audio Two Title',
    link: 'Link to Audio Two URL'
  },
  {
    title: 'Audio Three Title',
    link: 'Link to Audio Three URL'
  },
];

}
