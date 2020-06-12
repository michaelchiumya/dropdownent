import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from 'src/app/interface/video';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  url = "https://dropdown-entertainment.herokuapp.com/api";

  constructor(private http:HttpClient) { }

  postVideo(data : any) {
    return  this.http.post<any>(`${this.url}/video`, data);
  }

  getVideos(): any{
    return this.http.get(`${this.url}/videos`).pipe(map((data: Video[])=>data));
  }


}
