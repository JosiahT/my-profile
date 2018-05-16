import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menu-nav',
  templateUrl: './menu-nav.component.html',
  styleUrls: ['./menu-nav.component.css']
})
export class MenuNavComponent implements OnInit {
  private selected = '/';
  constructor() { }

  ngOnInit() {
  }
  selectNav($event) {
    console.log($event);
    this.selected = $event.srcElement.pathname;
  }
}
