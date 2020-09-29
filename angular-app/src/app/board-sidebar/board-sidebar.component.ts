import { Component, OnInit } from '@angular/core';
import { BordSidebarInteractionService } from '../board/bord-sidebar-interaction.service';

@Component({
  selector: 'app-board-sidebar',
  templateUrl: './board-sidebar.component.html',
  styleUrls: ['./board-sidebar.component.css']
})
export class BoardSidebarComponent implements OnInit {

  constructor(private _sidebarInteractionService: BordSidebarInteractionService) { }

  ngOnInit(): void {

  }

  closeSideBar(){
    this._sidebarInteractionService.setOpenStatus(false);
  }


}
