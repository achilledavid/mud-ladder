import { Component } from '@angular/core';
import { SidebarService } from './SERVICES/sidebar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'MUD';

  constructor(public sidebarService: SidebarService) { }

  public toggleSidebar() {
    if (this.sidebarService.getSidebarState()) this.sidebarService.closeSidebar();
    else this.sidebarService.openSidebar();
  }
}
