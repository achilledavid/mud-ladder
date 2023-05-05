import { Token } from '@angular/compiler';
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
}
