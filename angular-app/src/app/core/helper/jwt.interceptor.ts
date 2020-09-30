import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { StorageService } from '../services/storage.service';

@Injectable()
// Intercepts HTTP request to add a JWT auth token to the Authorization header if:
// - the user is logged in
// - the request is to the application api URL 
export class JwtInterceptor implements HttpInterceptor {
    constructor(private storageService: StorageService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("JwtInterceptor intercepted HTTP request");
        // add auth header with jwt if user is logged in and request is to the api url
        const isAuthenticated = this.storageService.isAuthenticated();
        const isApiUrl = request.url.startsWith(environment.apiUrl);
        if (isAuthenticated && isApiUrl){
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.storageService.getCurrentToken()}`
                }
            });
        }
        return next.handle(request);
    }
}