import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { StorageService } from '../services/storage.service';

@Injectable()
// Intercepts HTTP Responses from the API to check if there were any errors
// 401 Status Response automatically logs out the user
// Other errors are rethrown up to the calling service, so an alert with the error can be displayed on screen
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private storageService: StorageService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("ErrorInterceptor intercepted HTTP request");
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.storageService.logout();
                location.reload();
            }

            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}