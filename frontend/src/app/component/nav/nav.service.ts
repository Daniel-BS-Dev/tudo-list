import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NavService {

  showMenu: boolean = false;

  constructor() { }

  onShowMenu(){
    return this.showMenu = !this.showMenu;
  
  }
}
