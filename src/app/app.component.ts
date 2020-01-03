import { Component, OnInit } from '@angular/core';
import { Game } from './game';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'roundball-magic';

  public game = new Game(
    "John",
    "Bob",
    10
    );
  public games: any;

    constructor(private gameService:GameService){}

      ngOnInit(){
        this.gameService.getGame()
        .subscribe((data: any) => {
          this.game = new Game(
            data.data[0].home_team.full_name,
            data.data[0].home_team.city,
            data.data[0].home_team_score
          );
          console.log(this.game);
        })

        this.gameService.getGame()
        .subscribe((data: any) => {
          this.games = data.data;
          console.log(this.games)
        })
      }

}
