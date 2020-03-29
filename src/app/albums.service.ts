import { Injectable } from '@angular/core';
import { Track } from 'ngx-audio-player';


@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor() { }

  showAlbums(): any{
    return [
      {
        album:'Mad Settings',
        cover:'/assets/img/pqp.png',
        songs:[
          {
            title: 'Mad settingz 1',
            link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp1'
          },

          {
            title: 'Mad settingz 2',
            link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3'
          }
        ]},

      {
        album:'Sindidzakula',
        cover:'/assets/img/ns.jpg',
        songs:[
          {
            title: 'Sindidzakula 1',
            link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3'
          },

          {
            title: 'Sindidzakula',
            link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3'
          }]
      },

       {
        album:'Best of PQ',
        cover:'/assets/img/pqs.jpg',
        songs:[
          {
            title: 'Best of 1',
            link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3'
          },

          {
            title: 'Best of 2',
            link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
         }]
      }
      ];
  }

  showSongs(){
    return [
      {
        id: 1,
        title: 'Title',
        album:'Single',
        cover:'/assets/img/pqp.png',
        link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp1'

      },
      {
        id: 2,
        title: 'Title 2',
        album:'Single',
        cover:'/assets/img/pqrb.jpg',
        link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
      },
      {
        id: 3,
        title: 'Title 3',
        album:'Single',
        cover:'/assets/img/pqs.jpg',
        link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
      },
      {
        id: 4,
        title: 'Title 4',
        album:'Single',
        cover:'/assets/img/ns.jpg',
        link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
      },
      ];

  }
}
