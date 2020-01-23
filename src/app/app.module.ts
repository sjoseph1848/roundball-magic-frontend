import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameService } from './game.service';
import { NavComponent } from './nav/nav.component';
import { HeadlineComponent } from './home/headline/headline.component';
import { HomeComponent } from './home/home/home.component';
import { GamesComponent } from './games/games/games.component';
import { PlayersComponent } from './players/players/players.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './home/news/news.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeadlineComponent,
    HomeComponent,
    GamesComponent,
    PlayersComponent,
    FooterComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
