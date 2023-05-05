import { ConnectionService } from './../../SERVICES/connection.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  public invalid_informations: boolean = false;
  public password_visibility: boolean = false;

  constructor(private connectionService: ConnectionService) { }

  getPasswordType() {
    return this.password_visibility ? 'text' : 'password';
  }

  togglePasswordVisibility() {
    this.password_visibility = !this.password_visibility;
  }

  login(form: NgForm) {
    this.connectionService.login(form.value.username, form.value.password);
  }
}
