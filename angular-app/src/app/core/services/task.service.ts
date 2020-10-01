import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Task } from '../models/task.model';
import { title } from 'process';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  // Get all tasks 
  getAll(){
    console.log("get All tasks");
    return this.http.get<Task[]>( `${environment.apiUrl}/tasks`);
  }

  // Create Task 
  create(obj: any){
    let title : string = obj.title;
    let description : string = obj.description;
    let assignees : number[] = obj.assignees;
    return this.http.post<any>(`${environment.apiUrl}/task`, { 
      title, description, assignees
    });
  }

  // Update Task
  update(obj: any){
    let id : number = obj.id;
    let title : string = obj.title;
    let description : string = obj.description;
    let assignees : number[] = obj.assignees;
    let status : string = obj.status;
    return this.http.put<any>(`${environment.apiUrl}/task`, { 
      id, title, description, assignees, status 
    });
  }

  // Delete Task
  delete(id: number){
    return this.http.delete<any>(`${environment.apiUrl}/task/${id}`);
  }

}
