import { Router } from '@angular/router';
import { ConnectionService } from '../../SERVICES/connection.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TokenService } from 'src/app/SERVICES/token.service';
import { Location } from '@angular/common';

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

  constructor(private connectionService: ConnectionService, private router: Router, private tokenService: TokenService, private location: Location) {
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
    this.connectionService.login(form.value.username, form.value.password).subscribe(
      (token: string) => {
        this.router.navigate(['/home']);
        this.invalid_informations = false;
      },
      (error: any) => {
        this.invalid_informations = true;
      }
    );
  }

  signup() {
    this.router.navigate(['/sign-up']);
  }

  forgotPassword() {
    this.router.navigate(['/forgot-password']);
  }

  verifyInformations(username: string, password: string) {
    if (!this.verifyUsername(username)) return false;
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

  goBack() {
    this.location.back();
  }
}