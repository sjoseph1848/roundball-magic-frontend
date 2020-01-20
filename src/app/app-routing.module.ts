import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { GamesComponent } from './games/games/games.component';
import { PlayersComponent } from './players/players/players.component';


const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: '',redirectTo: '/home',pathMatch:'full'},
  {path: 'games', component:GamesComponent},
  {path: 'players', component: PlayersComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
