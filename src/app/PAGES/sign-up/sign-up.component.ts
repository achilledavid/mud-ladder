import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/SERVICES/token.service';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { User } from 'src/app/MODELS/user.model';
import { ConnectionService } from 'src/app/SERVICES/connection.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  public invalid_informations: boolean = false;
  public invalid_first_name: boolean = false;
  public invalid_last_name: boolean = false;
  public invalid_username: boolean = false;
  public existing_username: boolean = false;
  public weak_password: boolean = false;
  public passwords_dont_match: boolean = false;
  public invalid_email: boolean = false;
  public existing_email: boolean = false;
  public password_visibility: boolean = false;
  public password_type: string = 'password';
  public error_message: string = '';

  constructor(private router: Router, private tokenService: TokenService, private location: Location, private connectionService: ConnectionService) {
    if (this.tokenService.isLoggedIn()) this.router.navigate(['/home']);
  }

  isLoggedIn() {
    return this.tokenService.isLoggedIn();
  }

  togglePasswordVisibility() {
    this.password_visibility = !this.password_visibility;
    this.password_type = this.password_visibility ? 'text' : 'password';
  }

  signup(form: NgForm) {
    const user: User = {
      first_name: form.value.first_name,
      last_name: form.value.last_name,
      username: form.value.username,
      email: form.value.email,
      password: form.value.password,
      picture_id: '',
    };
    if (!this.verifyInformations(user.first_name, user.last_name, user.username, user.email, user.password, form.value.password_confirmation)) {
      return;
    } else {
      this.connectionService.signup(user).subscribe((response: any) => {
        if (response !== 'success') response.then((value: any) => {
          this.error_message = value;
          if (this.error_message === 'username') {
            this.existing_username = true;
            this.existing_email = false;
            this.invalid_informations = false;
          } else if (this.error_message === 'email') {
            this.existing_username = false;
            this.existing_email = true;
            this.invalid_informations = false;
          } else {
            this.existing_username = false;
            this.existing_email = false;
            this.invalid_informations = true;
          }
        }); else {
          this.existing_username = false;
          this.existing_email = false;
          this.invalid_informations = false;
        }
      });
    }
  }

  verifyInformations(first_name: string, last_name: string, username: string, email: string, password: string, password_confirmation: string) {
    if (!this.verifyFirstName(first_name)) return false;
    else if (!this.verifyLastName(last_name)) return false;
    else if (!this.verifyUsername(username)) return false;
    else if (!this.verifyPasswordStrenght(password)) return false;
    else if (!this.verifyPasswords(password, password_confirmation)) return false;
    else if (!this.verifyEmail(email)) return false;
    else return true;
  }

  verifyFirstName(first_name: string) {
    if (first_name === '' || first_name === undefined || first_name === null || first_name.length < 3 || first_name.length > 20) {
      this.invalid_first_name = true;
      return false;
    } else {
      this.invalid_first_name = false;
      return true;
    }
  }

  verifyLastName(last_name: string) {
    if (last_name === '' || last_name === undefined || last_name === null || last_name.length < 3 || last_name.length > 20) {
      this.invalid_last_name = true;
      return false;
    } else {
      this.invalid_last_name = false;
      return true;
    }
  }

  verifyUsername(username: string) {
    if (username === '' || username === undefined || username === null || username.length < 3 || username.length > 20 || !username.match(/^[a-zA-Z0-9]+$/)) {
      this.invalid_username = true;
      return false;
    } else {
      this.invalid_username = false;
      return true;
    }
  }

  verifyPasswordStrenght(password: string) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[^\s]{8,}$/;
    if (!password.match(regex)) {
      this.weak_password = true;
      return false;
    } else {
      this.weak_password = false;
      return true;
    }
  }

  verifyPasswords(password: string, password_confirmation: string) {
    if (password !== password_confirmation) {
      this.passwords_dont_match = true;
      return false;
    } else {
      this.passwords_dont_match = false;
      return true;
    }
  }

  verifyEmail(email: string) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(regex)) {
      this.invalid_email = true;
      return false;
    } else {
      this.invalid_email = false;
      return true;
    }
  }

  goBack() {
    this.location.back();
  }
}
