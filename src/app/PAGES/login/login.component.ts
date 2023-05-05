import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  login() {
    this.router.navigate(['/home']);
  }
}
