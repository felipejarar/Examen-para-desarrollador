import { Injectable, ɵConsole } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { USERS } from "../mocks/mock-users";
import { TASKS } from "../mocks/mock-tasks";

import { environment } from '../../../environments/environment';
import { User } from '../models/user.model';
import { Task } from '../models/task.model';


@Injectable()
// Intercepts HTTP Requests from the Angular App and send back a fake responses
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log("FakeBackendInterceptor intercepted the request");
        console.log(request);

        const { url, method, headers, body } = request;

        // Delayed observable to simulate delayed API request
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                case url.endsWith('/tasks') && method === 'GET':
                    return getTasks();
                case url.endsWith('/task') && method === 'POST':
                    return createTask();
                case url.endsWith('/task') && method === 'PUT':
                    return updateTask();
                case url.includes('/task/') && method === 'DELETE':
                    return deleteTask();
                default:
                    // pass through any requests not handled above
                    console.log(request);
                    return next.handle(request);
            }    
        }

        // ROUTE FUNCTIONS

        // User authentication
        function authenticate() {
            const { username, password } = body;
            const user = USERS.find(x => x.username === username && password === "password");
            if (!user) return error('Username or password is incorrect');
            return ok({
                id: user.id,
                username: user.username,
                token: 'fake-jwt-token'
            })
        }

        // Users retrieval
        function getUsers() {
            if (!isLoggedIn()) return unauthorized();
            return ok(USERS);
        }

        // Task create
        function createTask(){
            const task : Task = { 
                id: Math.floor(Math.random() * (9999 - 5000 + 1)) + 5000, 
                title: body.title,
                description: body.description, 
                assignees: USERS.filter(x => body.assignees.includes(x.id)), 
                status: "TODO", 
                start_date: new Date(), 
                end_date: new Date()
            };
            TASKS.unshift(task);
            return ok(task);
        }

        // Task update
        function updateTask(){
            let task = TASKS.find(x => x.id === body.id);
            task.title = body.title;
            task.description = body.description;
            task.assignees = USERS.filter(x => body.assignees.includes(x.id));
            task.status = body.status;
            return ok(task);
        }

        // Task delete
        function deleteTask(){
            const id : number = parseInt(url.split('/').slice(-1).pop());
            TASKS.splice(TASKS.findIndex(x => x.id === id), 1);
            return ok();
        }

        // TasksRetrieval
        function getTasks(){
            console.log("Processing fake getTasks function");
            if (!isLoggedIn()) return unauthorized();
            return ok(TASKS);
        }

    // HELPER functions

        // Success Response Status
        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }))
        }

        // Error Response Status
        function error(message) {
            return throwError({ error: { message } });
        }

        // Unauthorized Response Status
        function unauthorized() {
            return throwError({ status: 401, error: { message: 'Unauthorised' } });
        }

        // Check if session token is part of the header request
        function isLoggedIn() {
            return headers.get('Authorization') === 'Bearer fake-jwt-token';
        }
    }
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};