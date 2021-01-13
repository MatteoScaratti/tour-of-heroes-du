import {Component, OnInit} from '@angular/core';
import {Hero} from '../model/hero';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  selectedHero: Hero;
  listOfHeroes: Hero[];

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe(res => {
      this.listOfHeroes = res;
    });
  }

  changeHero(hero: Hero): void {
    this.selectedHero = hero;
  }
}
