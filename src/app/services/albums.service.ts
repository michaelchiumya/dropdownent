import { Injectable } from '@angular/core';
import { Track } from 'ngx-audio-player';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  private url = "https://dropdown-entertainment.herokuapp.com/api";
  constructor(private http:HttpClient) { }

  showAlbums(id)
  {
        return this.http.get(`${this.url}/albums/${id}`).pipe(map((data)=>data),
        catchError(error=>{
          return throwError('something went wrong..');
        })
        )
  }


}
