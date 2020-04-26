import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  videos :any ;
  postUrl = "https://dropdown-entertainment.herokuapp.com/api/video";
  getUrl = "https://dropdown-entertainment.herokuapp.com/api/video";

  httpHeaders = new HttpHeaders()
     .set('Content-Type', 'application/json')
     .set('Cache-Control', 'no-cache');
  options = {
     headers: this.httpHeaders
      };

  constructor(private http:HttpClient) { }

  postVideo(data : any) {
    var body = JSON.stringify(data);
    return  this.http.post<any>(this.postUrl, body, this.options);
  }


  getVideo(): any{
    return this.http.get(this.getUrl).subscribe(data=>{
      console.log(data);
      this.videos = data;
    })
  }

  getVideosData(){
    return this.videos;
  }

}
