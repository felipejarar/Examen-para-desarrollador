import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { User } from '../models/user.model';
import { Session } from "../models/session.model";
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  // An special Type of Observable. Components can't publish to this one
  private currentUserSubject: BehaviorSubject<User>; 

  // An Observable. Components can subscribe and publish to this one
  public currentUser: Observable<User>;
  
  constructor(
      private http: HttpClient,
      private storageService: StorageService
  ) {
    this.currentUserSubject = new BehaviorSubject<User>(storageService.getCurrentUser());
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string) {
    const requestURL : string = `${environment.apiUrl}/users/authenticate`;
    console.log(`Sending HTTP Request: ${requestURL}`);
    return this.http.post<any>(requestURL, { username, password })
        .pipe(map( 
         (response : Response) => {
          
          let token : string = (response['token'])? response['token'] : "undefined token";
          let id : number = (response['id'])? response['id'] : -1;
          let username : string = (response['username'])? response['username'] : "undefined username";
          
          let user : User = {id : id, username : username};
          let session : Session = { token : token, user : user };

          this.storageService.setCurrentSession(session);
          this.currentUserSubject.next(user);
          return user;
        })
    );
  }

  logout() {
    // remove user from local storage to log user out
    this.storageService.logout();
    this.currentUserSubject.next(null);
  }

  
}
