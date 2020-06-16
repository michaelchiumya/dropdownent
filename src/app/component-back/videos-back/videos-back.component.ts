import { Component, OnInit } from '@angular/core';
import { Video } from 'src/app/interface/video';
import { VideosService } from 'src/app/services/videos.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-videos-back',
  templateUrl: './videos-back.component.html',
  styleUrls: ['./videos-back.component.css']
})
export class VideosBackComponent implements OnInit {

  videos : Video[];
  searchResults$ = new BehaviorSubject<any>(null);
  searchQuery: any;

  constructor(
    private VideoService : VideosService

    ) { }

  ngOnInit()
  {
    this.loadVideos();
  }

  loadVideos()
  {
    this.VideoService.getVideos().subscribe(data=>{
     this.videos = data
     this.searchResults$.next(data);
    })
  }

  deleteSong(id)
  {
    //this.VideoService.destroyVideo(id).subscribe();
  }

  search(searchTerm)
  {
    this.searchResults$.next(
      this.videos.filter(v =>
        {
        return v.title.toLowerCase().includes(searchTerm.toLowerCase());
       })
    );
  }

}
