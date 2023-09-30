import { Router, ActivatedRoute } from '@angular/router';
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
  public email_not_verified: boolean = false;
  public loading: boolean = false;

  constructor(private connectionService: ConnectionService, private router: Router, private tokenService: TokenService, private location: Location, private route: ActivatedRoute) {
    if (this.tokenService.isLoggedIn()) this.router.navigate(['/home']);
    this.checkIfVerfidyCodeInUrl();
  }

  checkIfVerfidyCodeInUrl() {
    const verify_code = this.route.snapshot.paramMap.get('verify_code');
    if (verify_code) {
      this.verifyCode(verify_code);
    }
  }

  verifyCode(code: string) {
    this.connectionService.verifyCode(code).subscribe(
      (response: any) => {
        this.verifiedEmailModal();
      },
      (error: any) => {
        this.errorWhileVerifyingEmailModal();
      });
  }

  verifiedEmailModal() {
    Swal.fire({
      title: 'Success',
      text: 'Your email has been verified !',
      icon: 'success',
      confirmButtonText: 'Ok',
      buttonsStyling: false,
      customClass: {
        confirmButton: 'button button--main button--big',
      }
    });
  }

  errorWhileVerifyingEmailModal() {
    Swal.fire({
      title: 'Oops...',
      text: 'Something went wrong while verifying your email !',
      icon: 'error',
      confirmButtonText: 'Try again',
      buttonsStyling: false,
      customClass: {
        confirmButton: 'button button--main button--big',
      }
    });
  }

  isLoggedIn() {
    return this.tokenService.isLoggedIn();
  }

  togglePasswordVisibility() {
    this.password_visibility = !this.password_visibility;
    this.password_type = this.password_visibility ? 'text' : 'password';
  }

  login(form: NgForm) {
    this.resetErrors();
    this.loading = true;
    if (!this.verifyInformations(form.value.username, form.value.password)) {
      this.loading = false;
      return;
    }
    this.connectionService.login(form.value.username, form.value.password).subscribe(
      (token: string) => {
        this.successfulLogin(form.value.username);
      },
      (error: any) => {
        this.loading = false;
        if (error.message === 'Invalid username or password') this.invalid_informations = true;
        else if (error.message === 'Email not verified') this.email_not_verified = true;
        else this.errorWhileLoggingModal();
      }
    );
  }

  successfulLogin(name: string) {
    this.loading = false;
    this.resetErrors();
    this.router.navigate(['/home']);
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

  resetErrors() {
    this.invalid_informations = false;
    this.invalid_username = false;
    this.invalid_password = false;
    this.email_not_verified = false;
  }
}