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

  postVideo(data : any)
  {
    return  this.http.post<any>(`${this.url}/video`, data).pipe(map((data: any)=>{return data}));
  }

  updateVideo(data : any, id)
  {
    return  this.http.put<any>(`${this.url}/video/${id}`, data).pipe(map((data: any)=> {return data}));
  }

  activateVideo(data : any, id)
  {
    return  this.http.put<any>(`${this.url}/video/activate/${id}`, data).pipe(map((data: any)=> {return data}));
  }

  getVideos(): any
  {
    return this.http.get(`${this.url}/videos`).pipe(map((data: Video[])=>data));
  }

  getActiveVideos(): any
  {
    return this.http.get(`${this.url}/active/videos`).pipe(map((data: Video[])=>data));
  }

  getVideo(id)
  {
   return this.http.get(`${this.url}/video/${id}`).pipe(map((data: Video)=>data))
  }

 destroyVideo(id :number)
 {
  return this.http.delete(`${this.url}/video/${id}`).pipe(map((data: any)=> {return data}));
 }



}
