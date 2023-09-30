import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './PAGES/home/home.component';
import { LoginComponent } from './PAGES/login/login.component';
import { SignUpComponent } from './PAGES/sign-up/sign-up.component';
import { AboutUsComponent } from './PAGES/about-us/about-us.component';
import { ConnectionService } from './SERVICES/connection.service';
import { RankedComponent } from './PAGES/ranked/ranked.component';
import { UnrankedComponent } from './PAGES/unranked/unranked.component';
import { HistoryComponent } from './PAGES/history/history.component';
import { ChatComponent } from './PAGES/chat/chat.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'login/:verify_code', component: LoginComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'home', component: HomeComponent, canActivate: [ConnectionService] },
  { path: 'rankings', loadChildren: () => import('./PAGES/rankings/rankings.module').then(m => m.RankingsModule), canActivate: [ConnectionService] },
  { path: 'ranked', component: RankedComponent, canActivate: [ConnectionService] },
  { path: 'unranked', component: UnrankedComponent, canActivate: [ConnectionService] },
  { path: 'history', component: HistoryComponent, canActivate: [ConnectionService] },
  { path: 'chat', component: ChatComponent, canActivate: [ConnectionService] },
  { path: '', redirectTo: '/about-us', pathMatch: 'full' },
  { path: '**', redirectTo: '/about-us', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }