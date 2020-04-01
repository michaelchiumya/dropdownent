import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  constructor() { }

  getArtist(){
    return [
      {
        name: 'PQ',
        Biography: "PQ (real name is Pyken Mkwate) is a Malawian reggae/dancehall singer based in Lilongwe.He realized his musical talent at a tender age before recording songs in the studio. In 2012 he released his first solo reggae song titled Why on Tropical Escape Riddim (Chimney).Tema Tema and Dekha are the two mixtapes to his name with the former released in 2012 and the latter in 2014 under Drop Down Entertainment.",
        cover: '/assets/img/pq.jpg'
      }
    ]
  }
}
