import { Component, OnInit } from '@angular/core';
import { NavService } from './nav.service';



@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  showMenu: boolean = false;
  hideMenu: boolean = false;
  aba: string = 'myTasks';
  time = Date.now();
  

  constructor(private service: NavService) {
    
  }

  ngOnInit(): void {
    this.time
  }

  onShowMenu(){
    this.showMenu = this.service.onShowMenu();
    this.hideMenu = !this.hideMenu;
  }

}
