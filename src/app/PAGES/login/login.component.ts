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
  public invalid_username: boolean = false;
  public invalid_password: boolean = false;
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
    if (!this.verifyInformations(form.value.username, form.value.password)) return;
    else this.connectionService.login(form.value.username, form.value.password);
  }

  signup() {
    this.router.navigate(['/sign-up']);
  }

  forgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

  verifyInformations(username: string, password: string) {
    if (!this.verifyUsername(username)) return false;
    else if (!this.verifyPassword(password)) return false;
    else return true;
  }

  verifyUsername(username: string) {
    if (username.length < 3) {
      this.invalid_username = true;
      return false;
    } else {
      this.invalid_username = false;
      return true;
    }
  }

  verifyPassword(password: string) {
    if (password.length < 8 || password.length > 32) {
      this.invalid_password = true;
      return false;
    } else {
      this.invalid_password = false;
      return true;
    }
  }
}