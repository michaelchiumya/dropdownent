import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Song } from '../interface/song';

@Injectable({
  providedIn: 'root'
})
export class MusicService {
  private url = "https://dropdown-entertainment.herokuapp.com/api";
  constructor(private http: HttpClient) { }

  postSong(data : any)
  {
    return  this.http.post<any>(`${this.url}/song`, data).pipe(map((data: any)=>{return data}));
  }

  postImage(data : any, id: string)
  {
    return  this.http.post<any>(`${this.url}/song/${id}/image`, data).pipe(map((data: any)=>{return data}));
  }

  updateSong(data : any, id)
  {
    return  this.http.put<any>(`${this.url}/song/${id}`, data).pipe(map((data: any)=> {return data}));
  }

  getSongs(id)
  {
   return this.http.get(`${this.url}/songs/${id}`).pipe(map((data: Song[])=>data))
  }

  getActiveSongs(id)
  {
   return this.http.get(`${this.url}/songs/active/${id}`).pipe(map((data: Song[])=>data))
  }

  getAllSongs()
 {
  return this.http.get(`${this.url}/songs`).pipe(map((data: Song[])=>data))
 }

 destroySong(id :number)
 {
  return this.http.delete(`${this.url}/song/${id}`);
}

}
