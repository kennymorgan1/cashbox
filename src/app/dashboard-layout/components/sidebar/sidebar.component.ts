import { Component, OnInit } from '@angular/core';

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: '/dashboard', title: 'Dashboard', icon: 'ion-ios-home', class: '' },
  { path: '/users', title: 'Users', icon: 'ion-ios-home', class: ''},
  { path: '/add-user', title: 'Add user', icon: 'ion-ios-home', class: ''},
  { path: '/attributes', title: 'Attributes', icon: 'ion-ios-home', class: ''},
  { path: '/add-attribute', title: 'Add attriburte', icon: 'ion-ios-home', class: ''}
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }

}
