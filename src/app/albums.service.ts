import { Injectable } from '@angular/core';
import { Track } from 'ngx-audio-player';


@Injectable({
  providedIn: 'root'
})
export class AlbumsService {

  constructor() { }

  loadSongs(): Track[]{
    return [
      {
        title: 'Title',
        link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
      },
      {
        title: 'Title 2',
        link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'

      },
      {
        title: 'Title 3',
        link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3'

      },
      {
        title: 'Title 4',
        link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3'
      },
      {
        title: 'Title 5',
        link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
      },
      {
        title: 'Title 6',
        link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'

      },
      {
        title: 'Title 3',
        link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3'

      },
      {
        title: 'Title 7',
        link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3'
      },
      {
        title: 'Title 8',
        link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
      },
      {
        title: 'Title 9',
        link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'

      },
      {
        title: 'Title 3',
        link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3'

      },
      {
        title: 'Title 4',
        link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3'
      },
      ];
  }

  showSongs(){
    return [
      {
        id: 1,
        title: 'Title',
        cover:'/assets/img/pqp.png',
        link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp1'

      },
      {
        id: 2,
        title: 'Title 2',
        cover:'/assets/img/pqrb.jpg',
        link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3'
      },
      {
        id: 3,
        title: 'Title 3',
        cover:'/assets/img/pqs.jpg',
        link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3'
      },
      {
        id: 4,
        title: 'Title 4',
        cover:'/assets/img/ns.jpg',
        link: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3'
      },
      ];

  }
}
