import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { first } from 'rxjs/operators';

import { Task } from 'src/app/core/models/task.model';
import { User } from 'src/app/core/models/user.model';
import { TaskService } from 'src/app/core/services/task.service';

@Component({
  selector: 'app-taskboard',
  templateUrl: './taskboard.component.html'
})
export class TaskboardComponent implements OnInit {

  constructor(private taskService : TaskService) {}

  tasks : Task[] = [];
  selectedTask : Task = null;

  ngOnInit(): void {
    this.taskService.getAll().pipe().subscribe( tasks => {
      this.tasks = tasks;
    });
  }

  // Modal functions

  @ViewChild('closeNewTaskModal')   private closeNewTaskModal : ElementRef;

  onNewTaskSubmit(){ this.closeNewTaskModal.nativeElement.click(); }
  
  editTask(id: number){
    this.selectedTask = this.tasks.find( x => x.id === id );
  }

  @ViewChild('closeEditTaskModal')  private closeEditTaskModal : ElementRef;

  onEditTaskSubmit(){
    this.closeEditTaskModal.nativeElement.click();
    this.selectedTask = null;
  }

  removeTask(id: number){
    this.selectedTask = this.tasks.find( x => x.id === id );
  }

  confirmRemoval(){
    this.taskService.delete(this.selectedTask.id).subscribe({
      // Success handler
      next: () => {
        console.log("Delete Request Success");
      },
      // Error handler
      error: error => {
        console.log("Delete Request Error");
      }
    });
  }

  // Helpers

  formatAssigneesColumn(users : User[]){
    if (users.length == 0) return "...";
    return users.map( u => {return u.username})
        .reduce((acum, value) => acum.concat("; ", value));
  }

  
}
