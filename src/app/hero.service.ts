import { Injectable } from '@angular/core';
import {Hero, HEROES} from './model/hero';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }
  getHeroes(): Observable<Hero[]>{
    return of(HEROES);
  }
}
