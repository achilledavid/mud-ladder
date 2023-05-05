import { ConnectionService } from './../../SERVICES/connection.service';
import { Component } from '@angular/core';
import { SidebarService, sidebar_item } from 'src/app/SERVICES/sidebar.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent {
  sidebar_items: Array<sidebar_item> = [];

  constructor(public sidebarService: SidebarService, private connectionService: ConnectionService) {
    this.sidebar_items = this.sidebarService.getItems();
  }

  public toggleSidebar() {
    if (this.sidebarService.getSidebarState()) this.sidebarService.closeSidebar();
    else this.sidebarService.openSidebar();
  }

  logout() {
    this.connectionService.logout();
  }
}