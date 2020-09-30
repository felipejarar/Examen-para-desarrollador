import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from '../core/services/authentication.service';

import { USERS } from '../core/mocks/mock-users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup;  
  mockUsers = USERS;  // Delete Later
  loading   = false;
  submitted = false;
  error     = '';
  
  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService
  ) { 
    // redirect to home if already logged in
    if (this.authenticationService.currentUserValue) { 
        this.router.navigate(['/']);
    }
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }


  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
  
  onSubmit(){
    this.submitted = true;

    // Stop here is form is invalid
    if (this.loginForm.invalid){
      console.log("Login Form is invalid"); return;
    }

    // Form is valid
    console.log("Proceeding with the authentication");
    this.loading = true;

    this.authenticationService.login(
      this.f.username.value, 
      this.f.password.value
      ).pipe(
        first()
      ).subscribe({
        next: () => {
          console.log("Successful I guess");
          // get return url from route parameters or default to '/'
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigate([returnUrl]);
        },
        error: error => {
          console.log(error);
            this.error = error;
            this.loading = false;
        }
    });
    
  }
  

}
