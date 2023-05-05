import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { sidebar_item } from 'src/app/SERVICES/sidebar.service';

@Component({
  selector: 'sidebar-item',
  templateUrl: './sidebar-item.component.html',
  styleUrls: ['./sidebar-item.component.scss']
})
export class SidebarItemComponent {
  @Input() item!: sidebar_item;
  opened: boolean = false;

  constructor(private router: Router) { }

  toggleMenu() {
    if (this.item.menu) this.opened = !this.opened;
    else this.goToLink(this.item.link);
  }

  goToLink(link: any) {
    this.router.navigate([link]);
  }
}
