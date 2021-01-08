import {Component, OnInit} from '@angular/core';
import {Hero, HEROES} from '../model/hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  selectedHero: Hero;
  listOfHeroes = HEROES;

  constructor() {
  }

  ngOnInit(): void {
  }

  changeHero(hero: Hero): void {
    this.selectedHero = hero;
  }
}
