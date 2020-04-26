import { Component, OnInit } from '@angular/core';
import { VideosService } from 'src/app/services/videos.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
    videos: any;
    modalId: string ='modal';

  constructor(private VideosService: VideosService) { }

  ngOnInit(): void {
    this.videos = this.VideosService.getVideosData();
  }

}
