import { Component, Input, OnInit } from '@angular/core';
import { faPencilAlt } from '@fortawesome/free-solid-svg-icons';
import { Activity } from './activity';
@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.css']
})

export class ActivityCardComponent implements OnInit {

  constructor() { }

  faPencilAlt = faPencilAlt;

  @Input() card : Activity;

  ngOnInit(): void {
    if (!this.card){
      this.card = new Activity();
      this.card.title = "title";
    }
   }


}
