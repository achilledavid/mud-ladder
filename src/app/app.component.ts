import { TokenService } from './SERVICES/token.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MUD';

  constructor(public tokenService: TokenService) { }

  public userIsLoggedIn(): boolean {
    if (this.tokenService.token === '' && !sessionStorage.getItem('token')) return false;
    else return true;
  }
}
