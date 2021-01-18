import { Injectable } from '@angular/core';
import {Hero, HEROES} from './model/hero';
import {Observable, of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  heroUrl = 'api/heroes';
  httpOptions = {
    headers: new HttpHeaders({'Content-type': 'application/json'})
  };

  constructor(private httpClient: HttpClient) { }

  getHeroes(): Observable<Hero[]>{
    return this.httpClient.get<Hero[]>(this.heroUrl);
  }

  getHeroById(id: number): Observable<Hero>{
    return this.httpClient.get<Hero>(this.heroUrl + '/' + id);
  }

  updateHero(hero: Hero): Observable<Hero>{
    return this.httpClient.put<Hero>(this.heroUrl, hero, this.httpOptions);
  }

  addHero(hero: Hero): Observable<Hero>{
    return this.httpClient.post<Hero>(this.heroUrl, hero, this.httpOptions);
  }

  deleteHero(heroId: number): Observable<Hero>{
    return this.httpClient.delete<Hero>(this.heroUrl + '/' + heroId, this.httpOptions);
  }
}
