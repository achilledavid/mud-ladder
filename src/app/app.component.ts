import { TokenService } from './SERVICES/token.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MUD';

  constructor(public tokenService: TokenService) {
    this.tokenService.redirectToLoginIfNotLoggedIn();
  }

  isLoggedIn(): boolean {
    return this.tokenService.isLoggedIn();
  }
}
