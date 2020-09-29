import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {LoginObject} from "./login-object.model";
import {Session} from "../../core/models/session.model";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient) {}

  private basePath = '/api/authenticate/';

  login(loginObj: LoginObject) {
    return this.http.post(this.basePath + 'login', loginObj)
      .pipe(map( (user : Response)=> {
        return user.json();
      }
    ))
  }

  logout(loginObj: LoginObject) {
    return this.http.post(this.basePath + 'logout', loginObj)
      .pipe(map( (user : Response) => {
        return user.json();
      }
    ))
  }
  
}
