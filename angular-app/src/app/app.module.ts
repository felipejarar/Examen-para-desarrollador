// Angular Imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Main Components
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

// Subcomponets
import { ActivityCardComponent } from './activity-card/activity-card.component';
import { ActivityCardListComponent } from './activity-card-list/activity-card-list.component';
import { BoardSidebarComponent } from './board-sidebar/board-sidebar.component';
import { BoardComponent } from './board/board.component';
import { BoardNavbarComponent } from './board-navbar/board-navbar.component';

// Interceptors
import { ErrorInterceptor } from './core/helper/error.interceptor';
import { fakeBackendProvider } from './core/helper/fake-backend';
import { JwtInterceptor } from './core/helper/jwt.interceptor';

 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,

    ActivityCardComponent,
    ActivityCardListComponent,
    BoardSidebarComponent,
    BoardComponent,
    BoardNavbarComponent
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
