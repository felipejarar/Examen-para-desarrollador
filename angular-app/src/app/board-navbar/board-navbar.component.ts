import { Component, OnInit } from '@angular/core';
import { BordSidebarInteractionService } from '../board/bord-sidebar-interaction.service';

@Component({
  selector: 'app-board-navbar',
  templateUrl: './board-navbar.component.html',
  styleUrls: ['./board-navbar.component.css']
})
export class BoardNavbarComponent implements OnInit {

  constructor(private _sidebarInteractionService: BordSidebarInteractionService) { }

  ngOnInit(): void {
  }

  openSideBar(): void {
    this._sidebarInteractionService.setOpenStatus(true);
  }

}
