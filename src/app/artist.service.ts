import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {
configUrl = "http://178.62.65.145/api/artist";
  constructor(private http: HttpClient) { }

  postArtist(data : any){
    this.http.post(this.configUrl, data).subscribe((val)=>{console.log(val.toString)});
  }

  getArtist(): any{
    return [
      {
        name: 'PQ',
        biography: "PQ (real name is Pyken Mkwate) is a Malawian reggae/dancehall singer based in Lilongwe.He realized his musical talent at a tender age before recording songs in the studio. In 2012 he released his first solo reggae song titled Why on Tropical Escape Riddim (Chimney).Tema Tema and Dekha are the two mixtapes to his name with the former released in 2012 and the latter in 2014 under Drop Down Entertainment.",
        cover: '/assets/img/ns.jpg'
      }
    ]
  }
}
