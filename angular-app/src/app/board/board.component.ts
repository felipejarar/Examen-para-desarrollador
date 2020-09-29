import { Component, OnInit } from '@angular/core';
import { BordSidebarInteractionService } from './bord-sidebar-interaction.service'

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor(private _sidebarInteractionService: BordSidebarInteractionService) { }

  ngOnInit(): void {
    this._sidebarInteractionService.openStatus$.subscribe(
      status => {
        if (status){
          this.openNav();
        } else{
          this.closeNav();
        }
      }
    )
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
