import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RankingsComponent } from './rankings.component';
import { RankingsPlayersComponent } from './players/players.component';
import { RankingsSinglesComponent } from './singles/singles.component';
import { RankingsDoublesComponent } from './doubles/doubles.component';

const routes: Routes = [
  {
    path: '', component: RankingsComponent, children: [
      { path: 'players', component: RankingsPlayersComponent },
      { path: '1v1', component: RankingsSinglesComponent },
      { path: '2v2', component: RankingsDoublesComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class RankingsRoutingModule { }