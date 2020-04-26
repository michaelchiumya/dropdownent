import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Track } from 'ngx-audio-player';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 private dataSource = new BehaviorSubject<Track[]>
 ( [{
  title: null,
  link: null
}] );

 public data : Observable<Track[]> = this.dataSource.asObservable();

  constructor() { }

  storeData(data :Track[] ){
    return this.dataSource.next(data);
  }

}
