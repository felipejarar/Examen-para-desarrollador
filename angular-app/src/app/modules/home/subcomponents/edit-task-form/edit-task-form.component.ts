import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Task, TaskStatus} from 'src/app/core/models/task.model';
import { User } from 'src/app/core/models/user.model';
import { TaskService} from 'src/app/core/services/task.service';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-edit-task-form',
  templateUrl: './edit-task-form.component.html'
})
export class EditTaskFormComponent implements OnInit {

  @Input() 
  private task : Task ;

  @Output()
  private onSubmission = new EventEmitter<any>();

  form : FormGroup;  
  form_submitted : boolean = false;
  form_error : string = '';
  
  data_users : User[] = [];
  data_statuses : string[] = [];

  constructor( 
    private fb: FormBuilder,
    private userService: UserService,
    private taskService: TaskService
  ) { }

  // Getter
  get f() { return this.form.controls; }


  ngOnInit(): void {
    if (!this.task){
      // Check required parameters
      throw new Error("Attribute 'task' is required"); 
    }
    // Initalize form
    this.updateForm();

    // Initialize data
    this.userService.getAll().subscribe( users => { this.data_users = users } );
    this.data_statuses = TaskStatus.getAllStatus();  
  }
  
  ngOnChanges(changes: SimpleChanges) {
    if (changes.task){
      this.updateForm();
    }
  }

  onSubmit(){
    this.form_submitted = true;
    if (this.form.invalid) return;
    // Send HTTP Request
    this.taskService.update({
      id : this.task.id,
      title : this.f.title.value,
      description : this.f.description.value,
      assignees : this.f.assignees.value,
      status : this.f.status.value
    })
    .subscribe({
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

  // Helpers
  updateForm(){
    this.form = this.fb.group({ 
      title : [this.task.title, Validators.required],
      description : [this.task.description],
      assignees : [this.task.assignees.map( x => x.id )],
      status : [this.task.status, Validators.required]
    })      
  }

  

}
