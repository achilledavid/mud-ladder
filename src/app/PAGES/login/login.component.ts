import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { User } from 'src/app/MODELS/user.model';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  public invalid_informations: boolean = false;
  public password_visibility: boolean = false;

  constructor(private router: Router) { }

  getPasswordType() {
    return this.password_visibility ? 'text' : 'password';
  }

  togglePasswordVisibility() {
    this.password_visibility = !this.password_visibility;
  }

  login(form: NgForm) {
    const user = {
      username: form.value.username,
      password: form.value.password,
    };
    console.log(user);
    sessionStorage.setItem('JWT_TOKEN', JSON.stringify(user));
  }
}
