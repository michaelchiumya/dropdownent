import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError} from 'rxjs';
import { catchError, map} from 'rxjs/operators';
import { Artist } from '../interface/artist';


@Injectable({
  providedIn: 'root'
})
export class ArtistService {

 private artists : Artist[];
 private url = "https://dropdown-entertainment.herokuapp.com/api";


 private httpHeaders = new HttpHeaders()
     .set('Content-Type', 'application/json')
     .set('Cache-Control', 'no-cache');

 private options = {  headers: this.httpHeaders };

  constructor(private http: HttpClient) { }

  postArtist(data : any) {
    var body = JSON.stringify(data);
     return  this.http.post<any>(`${this.url}/artist`, body, this.options).pipe(map((data: any)=>{
       return data;
    }),
    catchError(error => {
      return throwError('something went wrong...');
    })
    );
  }

  postSong(data : any) {
    return  this.http.post<any>(`${this.url}/song` , data).pipe(map((data: any)=>{
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

  getArtist():any{
    return this.http.get(`${this.url}/artists`).pipe(map((data: Artist[])=>data),
    catchError(error=>{
      return throwError('something went wrong..');
    })
    )
  }

updateArtist(data:any, id: string){
  return this.http.put<any>(`${this.url}/artist/${id}`, data).pipe(map((data: any)=>{
    return data;
 }),
 catchError(error => {
   return throwError('something went wrong...');
 })
 );
}


  getArtistById(id :number){
     return this.http.get(`${this.url}/artist/${id}`).pipe(map((data: Artist[])=>data),
     catchError(error=>{
       return throwError('something went wrong getting data..');
     })
     )
  }

  destroyArtist(id :number){
    return this.http.delete(`${this.url}/artist/${id}`);
 }
}
