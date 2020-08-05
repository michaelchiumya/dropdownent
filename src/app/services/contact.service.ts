import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private url = "https://dropdown-entertainment.herokuapp.com/api";

  constructor(private http:HttpClient) { }

  send(data : any)
  {
    return  this.http.post<any>(`${this.url}/inquiry`, data).pipe(map((data: any)=>{return data}));
  }
  getNotifications(data : any)
  {
    return  this.http.get<any>(`${this.url}/inquiry`, data).pipe(map((data: any)=>{return data}));
  }

}
