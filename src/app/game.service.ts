import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient) { }

  getGame(){
    let url = `https://www.balldontlie.io/api/v1/games`;
    return this.http.get(url);
    }

  getTodaysGames(){
    let url = `https://us-central1-nba-bracket-b1361.cloudfunctions.net/api/games`;
    return this.http.get(url);
  }

  }

