import { Component, OnInit } from '@angular/core';
import { Game } from '../../game';
import { GameService } from '../../game.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {
  title = 'roundball-magic';

  public games: any;
  public todaysGames: any;

  constructor(private gameService:GameService) { }

  ngOnInit(){
    this.gameService.getGame()
    .subscribe((data: any) => {
      this.games = data.data;
      console.log(this.games)
    })

    this.gameService.getTodaysGames()
    .subscribe((data: any) => {
      this.todaysGames = data.data.api.games;
      console.log(data);
      console.log(this.todaysGames)
    })
  }

}
