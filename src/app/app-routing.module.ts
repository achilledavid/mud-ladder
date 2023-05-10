import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './PAGES/home/home.component';
import { LoginComponent } from './PAGES/login/login.component';
import { SignUpComponent } from './PAGES/sign-up/sign-up.component';
import { AboutUsComponent } from './PAGES/about-us/about-us.component';
import { ConnectionService } from './SERVICES/connection.service';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login/:verify_code', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'home', component: HomeComponent, canActivate: [ConnectionService] },
  { path: '', redirectTo: '/about-us', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }