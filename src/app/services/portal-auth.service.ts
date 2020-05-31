import { Injectable } from '@angular/core';
import {  HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError, Subject, Observable } from 'rxjs';
import { catchError, map, tap, switchMap, take } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';
import { Admin } from '../interface/admin';

@Injectable({
  providedIn: 'root'
})
export class PortalAuthService {

  private apiURL = 'https://dropdown-entertainment.herokuapp.com/api';
  private subject$ =  new Subject<Admin>();

  constructor(private http:HttpClient) { }


  get _subject$()
  {
    return this.subject$;
  }
  gettoken()
  {
    return !!sessionStorage.getItem("token");
  }

  login(data)
  {
      return this.http.post(`${this.apiURL}/login`, data,
       { observe: 'response' }).pipe(map((data)=>
        {
        return data;
       })
     );
  }

  userDetails()
  {
      let body = {}
      return this.http.post(`${this.apiURL}/udetails`, body).pipe(tap((data :Admin)=>
      {
        this.subject$.next(data)
      }
        ),

      catchError((error) =>
      {
        return throwError('something went wrong...');
      })
   );
}

logout()
  {

      return this.http.post(`${this.apiURL}/logout`, { observe: 'response' })
      .pipe( catchError(this.handleError));
    }

  private handleError(err: HttpErrorResponse | any)
  {
      console.error('An error occurred', err);
       return throwError(err.message || err);
  }

}
