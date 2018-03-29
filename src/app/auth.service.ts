import { Injectable, Output, EventEmitter } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class AuthService {

  public token: string;
  @Output() loggedIn: EventEmitter<boolean> = new EventEmitter();

  constructor(public http: HttpClient) {
  }

  getLoggedInStatus(){
    return this.loggedIn;
  }

  login(username: string, password: string):Observable<any>{

    return this.http.post('http://127.0.0.1:8000/rest-auth/login/', {
        'username': username,
        'password': password,
      }).pipe(
        map(res => {
          this.token = res['key'];
          this.loggedIn.emit(true);
        }),
        catchError(this.handleError('login', {}))
      )
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    }
  }

  logout(): Observable<any>{
    return this.http.post('http://127.0.0.1:8000/rest-auth/logout/', {}).pipe(
      map(res=> {
        if (res['detail'] == 'Successfully logged out.'){
          console.log('logging Out');
          this.token = null;
          this.loggedIn.emit(false);
        }
      })
    )
  }

}
