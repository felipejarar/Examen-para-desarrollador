// Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Main Components
import { LoginComponent } from './modules/login/login.component';
import { HomeComponent } from './modules/home/home.component';

// Interceptors
import { ErrorInterceptor } from './core/helper/error.interceptor';
import { fakeBackendProvider } from './core/helper/fake-backend';
import { JwtInterceptor } from './core/helper/jwt.interceptor';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { TaskboardComponent } from './modules/home/subcomponents/taskboard/taskboard.component';
import { NewTaskFormComponent } from './modules/home/subcomponents/new-task-form/new-task-form.component';
import { EditTaskFormComponent } from './modules/home/subcomponents/edit-task-form/edit-task-form.component';

 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    TaskboardComponent,
    NewTaskFormComponent,
    EditTaskFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
