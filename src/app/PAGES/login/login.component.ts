import { Router } from '@angular/router';
import { ConnectionService } from '../../SERVICES/connection.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TokenService } from 'src/app/SERVICES/token.service';
import { Location } from '@angular/common';
import Swal from 'sweetalert2';

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
  public loading: boolean = false;

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
    this.loading = true;
    if (!this.verifyInformations(form.value.username, form.value.password)) return;
    this.connectionService.login(form.value.username, form.value.password).subscribe(
      (token: string) => {
        this.successfulLogin(form.value.username);
      },
      (error: any) => {
        this.loading = false;
        error.message === 'Invalid username or password' ? this.invalid_informations = true : this.invalid_informations = false;
        if (error.message != 'Invalid username or password') this.errorWhileLoggingModal();
      }
    );
  }

  successfulLogin(name: string) {
    this.loading = false;
    this.successfulLoginModal(name);
    this.router.navigate(['/home']);
    this.invalid_informations = false;
  }

  successfulLoginModal(name: string) {
    Swal.fire({
      title: 'Welcome back, ' + name + ' !',
      text: 'You are now logged in !',
      icon: 'success',
      confirmButtonText: 'Continue',
      buttonsStyling: false,
      customClass: {
        confirmButton: 'button button--main button--big'
      }
    });
  }

  errorWhileLoggingModal() {
    Swal.fire({
      title: 'Oops...',
      text: 'Something went wrong while logging in !',
      icon: 'error',
      confirmButtonText: 'Try again',
      buttonsStyling: false,
      customClass: {
        confirmButton: 'button button--main button--big',
      }
    });
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