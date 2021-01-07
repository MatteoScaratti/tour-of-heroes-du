import { Component, OnInit } from '@angular/core';
import {Hero} from '../model/hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Batman'
  };

  constructor() {
  }

  ngOnInit(): void {
  }
}
