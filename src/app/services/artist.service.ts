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
 private postUrl = "https://dropdown-entertainment.herokuapp.com/api/artist";
 private getUrl ="https://dropdown-entertainment.herokuapp.com/api/artists";


 private httpHeaders = new HttpHeaders()
     .set('Content-Type', 'application/json')
     .set('Cache-Control', 'no-cache');

 private options = {  headers: this.httpHeaders };

  constructor(private http: HttpClient) { }

  postArtist(data : any) {
    var body = JSON.stringify(data);
     return  this.http.post<any>(this.postUrl, body, this.options).pipe(map((data: any)=>{
       return data;
    }),
    catchError(error => {
      return throwError('something went wrong...');
    })
    );
  }

  postSong(data : any) {
    return  this.http.post<any>("https://dropdown-entertainment.herokuapp.com/api/song" , data).pipe(map((data: any)=>{
      return data;
   }),
   catchError(error => {
     return throwError('something went wrong...');
   })
   );
  }

  postImage(data : any, id: string) {
    return  this.http.post<any>("https://dropdown-entertainment.herokuapp.com/api/artist/"+id +"/image" , data).pipe(map((data: any)=>{
      return data;
   }),
   catchError(error => {
     return throwError('something went wrong...');
   })
   );
  }

  getArtist():any{
    return this.http.get(this.getUrl).pipe(map((data: Artist[])=>data),
    catchError(error=>{
      return throwError('something went wrong..');
    })
    )
  }

updateArtist(data:any, id: string){
  return this.http.put<any>("https://dropdown-entertainment.herokuapp.com/api/artist/"+id, data).pipe(map((data: any)=>{
    return data;
 }),
 catchError(error => {
   return throwError('something went wrong...');
 })
 );
}


  getArtistById(id :number){
     return this.http.get(this.postUrl+"/"+id).pipe(map((data: Artist[])=>data),
     catchError(error=>{
       return throwError('something went wrong getting data..');
     })
     )
  }

  destroyArtist(id :number){
    return this.http.delete(this.postUrl+"/"+id);
 }
}
