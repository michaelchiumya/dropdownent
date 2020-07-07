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

  post(data : any)
  {
    
     return  this.http.post<any>(`${this.url}/register`, data).pipe(map((data: any)=>{return data}));
  }

  update(data:any, id)
 {
  return this.http.put<any>(`${this.url}/user/${id}`,data).pipe(map((data: any)=> {return data}));
 }

 updatePassword(data:any, id)
 {
  return this.http.put<any>(`${this.url}/user/${id}/password`,data).pipe(map((data: any)=> {return data}));
 }

 destroy(id :number)
{
  return this.http.delete(`${this.url}/user/${id}`);
}


}
