import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';
import { Admin } from '../interface/admin';

@Injectable({
  providedIn: 'root'
})
export class PortalAuthService {
  private apiURL = 'https://dropdown-entertainment.herokuapp.com/api';

  constructor(private http:HttpClient) { }

  gettoken(){
    return !!localStorage.getItem("token");
    }


   login(data){
      const header = new HttpHeaders({
        'content-type': 'application/json'
          });
      return this.http.post(`${this.apiURL}/login`, data, {'headers' :header, observe: 'response' }).pipe( catchError(this.handleError));
    }

    userDetails(){
      let body = {}
      return this.http.post(`${this.apiURL}/udetails`, body).pipe(map((data: Admin)=>data),
      catchError(error=>{
        return throwError('something went wrong..');
      })
      )
    }

    logout(){
      const header = new HttpHeaders({
        'content-type': 'application/json'

          });
      return this.http.post(`${this.apiURL}/logout`, {'headers' :header, observe: 'response' }).pipe( catchError(this.handleError));
    }

  private handleError(err: HttpErrorResponse | any)
  {
      console.error('An error occurred', err);
       return throwError(err.message || err);
  }

}
