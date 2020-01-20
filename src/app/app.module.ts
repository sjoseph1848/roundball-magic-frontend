import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameService } from './game.service';
import { NavComponent } from './nav/nav.component';
import { HeadlineComponent } from './home/headline/headline.component';
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeadlineComponent
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
