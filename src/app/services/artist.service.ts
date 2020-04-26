import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ArtistService {

 private artists : any;
 private postUrl = "https://dropdown-entertainment.herokuapp.com/api/artist";
 private getUrl ="https://dropdown-entertainment.herokuapp.com/api/artists";


 private httpHeaders = new HttpHeaders()
     .set('Content-Type', 'application/json')
     .set('Cache-Control', 'no-cache');

 private options = {  headers: this.httpHeaders };

  constructor(private http: HttpClient) { }

  postArtist(data : any) {
    var body = JSON.stringify(data);
    return  this.http.post<any>(this.postUrl, body, this.options);
  }

  postSong(data : any) {
    //var body = JSON.stringify(data);
    return  this.http.post<any>("https://dropdown-entertainment.herokuapp.com/api/song" , data);
  }

  getArtist(): any{
    return this.http.get(this.getUrl);
  }

  getArtistsData(){
    return this.artists;
  }

  getArtistById(id :number){
     return this.http.get(this.postUrl+"/"+id);
  }

  destroyArtist(id :number){
    return this.http.delete(this.postUrl+"/"+id);
 }
}
