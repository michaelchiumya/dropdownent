import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
    return  this.http.post<any>(`${this.url}/song`, data).pipe(map((data: any)=>
    {
      return data;
   }),
   catchError(error => {
     return throwError('something went wrong...');
   })
   );
  }

  postImage(data : any, id: string) {
    return  this.http.post<any>(`${this.url}/artist/${id}/image`, data).pipe(map((data: any)=>{
      return data;
   }),
   catchError(error => {
     return throwError('something went wrong...');
   })
   );
  }

  getSongs(id )
  {
      return this.http.get(`${this.url}/songs/${id}`).pipe(map((data: Song[])=>data),
      catchError(error=>{
        return throwError('something went wrong..');
      })
      )
    }

}
