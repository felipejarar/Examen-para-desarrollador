import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ActivityCardComponent } from './activity-card/activity-card.component';
import { ActivityCardListComponent } from './activity-card-list/activity-card-list.component';
import { BoardSidebarComponent } from './board-sidebar/board-sidebar.component';
import { BoardComponent } from './board/board.component';
import { BoardNavbarComponent } from './board-navbar/board-navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    ActivityCardComponent,
    ActivityCardListComponent,
    BoardSidebarComponent,
    BoardComponent,
    BoardNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
