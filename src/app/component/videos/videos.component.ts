import { Component, OnInit } from '@angular/core';
import { VideosService } from 'src/app/services/videos.service';
import { Video } from 'src/app/interface/video';
import { BehaviorSubject } from 'rxjs';
import { ngxLoadingAnimationTypes } from 'ngx-loading';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

    videos: Video[];
    searchQuery: any;
    modalId: string ='modal';
    searchResults$ = new BehaviorSubject<any>(null);

    loading = false;
    public primaryColour ='#dd0031';
    public secondaryColour =  '#006ddd';
    public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;

  constructor(
    private VideosService: VideosService
    ) {}

  ngOnInit(): void
  {
    this.loadVideos();
  }

  loadVideos()
  {
    this.loading = true;
    this.VideosService.getActiveVideos().subscribe((res)=>{
      this.loading = false;
      this.videos = res;
      this.searchResults$.next(res);
    })
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
