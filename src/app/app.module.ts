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
import { RankingsComponent } from './PAGES/rankings/rankings.component';
import { RankingsModule } from './PAGES/rankings/rankings.module';
import { RankedComponent } from './PAGES/ranked/ranked.component';
import { UnrankedComponent } from './PAGES/unranked/unranked.component';
import { HistoryComponent } from './PAGES/history/history.component';
import { ChatComponent } from './PAGES/chat/chat.component';

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
    AboutUsComponent,
    RankingsComponent,
    RankedComponent,
    UnrankedComponent,
    HistoryComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RankingsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
