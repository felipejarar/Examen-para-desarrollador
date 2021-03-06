import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { User } from 'src/app/core/models/user.model';
import { TaskService } from 'src/app/core/services/task.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-new-task-form',
  templateUrl: './new-task-form.component.html'
})
export class NewTaskFormComponent implements OnInit {

  @Output() private onSubmission = new EventEmitter<any>();

  form : FormGroup;  
  form_submitted : boolean = false;
  form_error : string = '';
  data_users : User[] = [];

  constructor( private fb: FormBuilder,
    private userService: UserService,
    private taskService: TaskService
  ) { }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  ngOnInit(): void {
    // Initialize Form
    this.form = this.fb.group({
      title: ['', Validators.required], 
      description: [''], 
      assignees: ['']
    });
    // Get relevant data
    this.userService.getAll().subscribe(
      users => { this.data_users = users } 
    );
  }

  onSubmit(){
    this.form_submitted = true;
    if (this.form.invalid) return; 
    // Send HTTP Request
    this.taskService.create({
      title: this.f.title.value,
      description: this.f.description.value,
      assignees: this.f.assignees.value }
    ).subscribe({
      // Success handler
      next: () => {
        this.form_submitted = false;
        this.onSubmission.emit(this.form.value);
        this.form.reset();
      },
      // Error handler
      error: error => {
        this.form_error = error;
      }
    });
  }
  
}
