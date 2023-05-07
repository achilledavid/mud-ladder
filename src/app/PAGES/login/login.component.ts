import { Router } from '@angular/router';
import { ConnectionService } from '../../SERVICES/connection.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TokenService } from 'src/app/SERVICES/token.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  public invalid_informations: boolean = false;
  public password_visibility: boolean = false;
  public password_type: string = 'password';

  constructor(private connectionService: ConnectionService, private router: Router, private tokenService: TokenService) {
    if (this.tokenService.isLoggedIn()) this.router.navigate(['/home']);
  }

  isLoggedIn() {
    return this.tokenService.isLoggedIn();
  }

  togglePasswordVisibility() {
    this.password_visibility = !this.password_visibility;
    this.password_type = this.password_visibility ? 'text' : 'password';
  }

  login(form: NgForm) {
    this.connectionService.login(form.value.username, form.value.password);
  }

  signup() {
    this.router.navigate(['/sign-up']);
  }

  forgotPassword() {
    this.router.navigate(['/forgot-password']);
  }
}