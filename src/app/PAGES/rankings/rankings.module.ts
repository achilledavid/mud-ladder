import { NgModule } from '@angular/core';
import { RankingsRoutingModule } from './rankings-routing.module';
import { CommonModule } from '@angular/common';
import { RankingsSinglesComponent } from './singles/singles.component';
import { RankingsDoublesComponent } from './doubles/doubles.component';
import { RankingsPlayersComponent } from './players/players.component';

@NgModule({
  declarations: [

    RankingsSinglesComponent,
    RankingsDoublesComponent,
    RankingsPlayersComponent
  ],
  imports: [
    CommonModule,
    RankingsRoutingModule,
  ],
  providers: [
  ]
})
export class RankingsModule { }
