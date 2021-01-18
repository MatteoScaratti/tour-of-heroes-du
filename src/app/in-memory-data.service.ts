import {Injectable} from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Hero} from './model/hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const heroes: Hero[] = [
      {id: 1, name: 'Superman'},
      {id: 2, name: 'IronMan'},
      {id: 3, name: 'Capitan america'},
      {id: 4, name: 'Hulk'},
      {id: 5, name: 'Chuck Norris'},
    ];

    return {heroes};
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 1;
  }
}
