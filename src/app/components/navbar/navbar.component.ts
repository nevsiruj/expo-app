// navbar.compomnent.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  navOpen = false;

  toggleNav() {
    this.navOpen = !this.navOpen;
    console.log('navOpen:', this.navOpen);
  }
  constructor() {}

  ngOnInit() {}
}
