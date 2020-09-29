import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { ActivityCardComponent } from './activity-card/activity-card.component';
import { ActivityCardListComponent } from './activity-card-list/activity-card-list.component';
import { ActivityBoardComponent } from './activity-board/activity-board.component';


@NgModule({
  declarations: [
    AppComponent,
    ActivityCardComponent,
    ActivityCardListComponent,
    ActivityBoardComponent
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
