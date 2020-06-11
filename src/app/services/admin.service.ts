import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private url = "https://dropdown-entertainment.herokuapp.com/api";
  constructor(private http: HttpClient) { }

  postFan(data :any)
  {
    return  this.http.post<any>(`${this.url}/fan`, data).pipe(map((data: any)=>{return data}));
  }
}
