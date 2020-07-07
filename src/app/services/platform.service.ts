import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {



 private url = "https://dropdown-entertainment.herokuapp.com/api";

 constructor(private http: HttpClient) { }


  postPlatform(data : any)
  {

     return  this.http.post<any>(`${this.url}/platform`, data).pipe(map((data: any)=>{return data}));
  }

getAll() :any
{
    return this.http.get(`${this.url}/platform`).pipe(map((data: any)=>data))
}

update(data:any, id: string)
{
  return this.http.put<any>(`${this.url}/platform/${id}`,data).pipe(map((data: any)=> {return data}));
}

getById(id :number)
{
  return this.http.get(`${this.url}/platform/${id}`).pipe(map((data: any)=>{ return data }))
}

destroy(id :number)
{
  return this.http.delete(`${this.url}/platform/${id}`).pipe(tap((arg)=>{ return arg }));
}

}
