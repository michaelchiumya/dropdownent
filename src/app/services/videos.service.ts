import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  videos :any ;
  url = "https://dropdown-entertainment.herokuapp.com/api";


  httpHeaders = new HttpHeaders()
     .set('Content-Type', 'application/json')
     .set('Cache-Control', 'no-cache');
     options = {
           headers: this.httpHeaders
        };

  constructor(private http:HttpClient) { }

  postVideo(data : any) {
    var body = JSON.stringify(data);
    return  this.http.post<any>(`${this.url}/video`, body, this.options);
  }


  getVideo(): any{
    return this.http.get(`${this.url}/video`).subscribe(data=>{
      console.log(data);
      this.videos = data;
    })
  }

  getVideosData(){
    return this.videos;
  }

}
