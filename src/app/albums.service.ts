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
            link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3'
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
        album:'Tema Tema',
        cover:'/assets/img/pqs.jpg',
        songs:[
          {
            title: 'Wangongole',
            link: 'https://www.malawi-music.com/songs/P.Q%20-%20Wangongole%20(www_malawi-music_com).mp3'
          },

          {
            title: 'Alibe pabwino feat. Blaze',
            link: 'https://www.malawi-music.com/songs/PQ%20-%20Alibe%20Pabwino%20(Feat%20Blaze).mp3'
         }]
      }
      ];
  }

  showSongs(){
    return [
      {
        id: 1,
        title: 'Sindidzakula',
        album:'Single',
        cover:'/assets/img/pqp.png',
        link: 'https://www.malawi-music.com/songs/Sindidzakula%20Feat%20Krazie%20G%20&%20Martse%20-%20PQ%20(www.malawi-music.com).mp3'

      },
      {
        id: 2,
        title: 'Rainbow feat Macia',
        album:'Single',
        cover:'/assets/img/pqrb.jpg',
        link: 'https://www.malawi-music.com/songs/PQ%20-%20Rainbow%20ft%20Macia%20(Prod%20By%20Cuff%20B).mp3'
      },
      {
        id: 3,
        title: 'Uptown Girl feat Blasto',
        album:'Single',
        cover:'/assets/img/pqs.jpg',
        link: 'https://www.malawi-music.com/songs/PQ%20-%20Uptown%20Girl%20(Feat.%20Blasto).mp3'
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
