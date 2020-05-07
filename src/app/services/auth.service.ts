import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs/internal/observable/throwError';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

   apiURL: string = 'https://dropdown-entertainment.herokuapp.com/api';

   constructor(private http: HttpClient) {}

public getAccess()
{
    var Data = {
           "email": "michaelchiumya@gmail.com",
           'password': 'BlackBoyJoyDev'
         };

    // const header = new HttpHeaders({
    //   'content-type': 'application/json'
    //     });
    
    return this.http.post(`${this.apiURL}/login`, Data).pipe( catchError(this.handleError));
}

public getAppUserDetails(access_token)
{
  const myheader = new HttpHeaders({
          Authorization: 'Bearer  ' + access_token
        });
  return this.http.get(`${this.apiURL}/udetails`, {headers: myheader});
}


private handleError(err: HttpErrorResponse | any)
 {
     console.error('An error occurred', err);
      return throwError(err.message || err);
 }

}
