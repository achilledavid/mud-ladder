import { ConnectionService } from './../../../SERVICES/connection.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  public opened: boolean = false;

  constructor(private router: Router, private connectionService: ConnectionService) {
    this.router.events.subscribe((event) => {
      if (this.opened) this.closeProfileModal();
    });
  }

  public toggleProfileModal(): void {
    this.opened = !this.opened;
  }

  public closeProfileModal(): void {
    this.opened = false;
  }

  public logout(): void {
    this.connectionService.logout();
  }
}
