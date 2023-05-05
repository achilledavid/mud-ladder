import { Component } from '@angular/core';
import { SidebarService } from 'src/app/SERVICES/sidebar.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent {
  constructor(public sidebarService: SidebarService) { }

  public toggleSidebar() {
    if (this.sidebarService.getSidebarState()) this.sidebarService.closeSidebar();
    else this.sidebarService.openSidebar();
  }
}
