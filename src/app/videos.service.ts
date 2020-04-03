import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor() { }

  getVideos(){
    return [
      {title:'Don Wagon interview on Timveni', link: 'https://www.youtube.com/embed/oYXXdEWOb_M', screenshot: '/assets/img/dwt.jpg'},
      {title: 'Don Wagon interview part 2',link: 'https://www.youtube.com/embed/y7DKAmfCLo0',screenshot:'/assets/img/dwt.jpg'},
      {title: 'PQ- Why (video)',link: 'https://www.youtube.com/embed/XLmcp6Eq1lo',screenshot:'/assets/img/pqp.png'}
    ]
  }
}
