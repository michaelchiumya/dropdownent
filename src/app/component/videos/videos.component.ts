import { Component, OnInit } from '@angular/core';
import { VideosService } from 'src/app/services/videos.service';
import { Video } from 'src/app/interface/video';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {
    videos: Video[];
    modalId: string ='modal';

  constructor(
    private VideosService: VideosService
    ) {}

  ngOnInit(): void {
      this.VideosService.getVideos().subscribe((res)=>{
        this.videos = res;
      })
  }

}
