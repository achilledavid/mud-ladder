import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './COMPONENTS/sidebar/sidebar.component';
import { SidebarItemComponent } from './COMPONENTS/sidebar/sidebar-item/sidebar-item.component';
import { LoginComponent } from './PAGES/login/login.component';
import { NavbarComponent } from './COMPONENTS/navbar/navbar.component';
import { HomeComponent } from './PAGES/home/home.component';
import { FormsModule } from '@angular/forms';
import { UserProfileComponent } from './COMPONENTS/navbar/user-profile/user-profile.component';
import { SignUpComponent } from './PAGES/sign-up/sign-up.component';
import { AboutUsComponent } from './PAGES/about-us/about-us.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarItemComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    UserProfileComponent,
    SignUpComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
