import { Component } from '@angular/core';
import { MoreOneWinner } from "../more-one-winner/more-one-winner";
import { ProducersWithIntervalVictories } from "../producers-with-interval-victories/producers-with-interval-victories";
import { StudiosMostWins } from "../studios-most-wins/studios-most-wins";
import { WinnersByYear } from "../winners-by-year/winners-by-year";

@Component({
  selector: 'app-dashboard',
  imports: [MoreOneWinner, ProducersWithIntervalVictories, StudiosMostWins, WinnersByYear],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {

}
