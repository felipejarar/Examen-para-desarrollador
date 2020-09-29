import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class BordSidebarInteractionService {

  private _openStatusMessageSource = new Subject<boolean>();
  openStatus$ = this._openStatusMessageSource.asObservable();

  constructor() { }

  setOpenStatus(status: boolean){
    this._openStatusMessageSource.next(status);
  }
  
}
