import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity-board',
  templateUrl: './activity-board.component.html',
  styleUrls: ['./activity-board.component.css']
})
export class ActivityBoardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
  openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginRight = "250px";
  }

  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
  closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginRight = "0";
  }
}
