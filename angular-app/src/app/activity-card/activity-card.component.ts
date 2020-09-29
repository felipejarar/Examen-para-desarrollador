import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-card',
  templateUrl: './activity-card.component.html',
  styleUrls: ['./activity-card.component.css']
})
export class ActivityCardComponent implements OnInit {

  constructor() { }

  displayOptionsButton : boolean;

  ngOnInit(): void {
    this.displayOptionsButton = false;
  }

  OnMouseEnterBehaviour(): void {
    this.displayOptionsButton = true;
    console.log(this.displayOptionsButton);
  }

  OnMouseLeaveBehaviour(): void{
    this.displayOptionsButton = false;
    console.log(this.displayOptionsButton);
  }

}
