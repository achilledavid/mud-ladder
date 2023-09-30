import { UserService } from './../../SERVICES/user.service';
import { Component } from '@angular/core';
import { User } from 'src/app/MODELS/user.model';
import { TokenService } from 'src/app/SERVICES/token.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {
  public decodedToken: any = {};
  public user: User = new User();

  constructor(private tokenService: TokenService, private userService: UserService) {
    this.decodedToken = this.tokenService.decodeToken();
    this.getUser(this.decodedToken.username);
  }

  getUser(username: string): void {
    this.userService.getByUsername(username).subscribe((response: Response) => {
      response.json().then((user: User) => {
        this.user = user;
      });
    });
  }
}
