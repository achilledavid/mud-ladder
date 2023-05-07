import { Component } from '@angular/core';
import { TokenService } from 'src/app/SERVICES/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public decodedToken: any = {};

  constructor(private tokenService: TokenService) {
    this.decodedToken = this.tokenService.decodeToken();
  }
}
