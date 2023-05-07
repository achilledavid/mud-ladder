import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/SERVICES/token.service';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent {
  constructor(private tokenService: TokenService, private router: Router) {
    if (this.isLoggedIn()) this.router.navigate(['/home']);
  }

  isLoggedIn() {
    return this.tokenService.isLoggedIn();
  }

  goToSignIn() {
    this.router.navigate(['/login']);
  }
}
