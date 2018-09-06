import { Component, OnInit } from '@angular/core';
import { Flyer, HEROES } from '../app_classes/hero';
@Component({
  selector: 'app-flying-heroes',
  templateUrl: './flying-heroes.component.html',
  styleUrls: ['./flying-heroes.component.css']
})

export class FlyingHeroesComponent implements OnInit {
  heroes: Flyer[] = [];
  canFly = true;
  mutate = true;
  constructor() {
    this.reset();
  }

  ngOnInit() {
  }
  addHero(name: string) {
    name = name.trim();
    if (!name) { return; }
    const hero = { name, canFly: this.canFly };
    if (this.mutate) {
      this.heroes = this.heroes.concat(hero);
    } else {
      this.heroes.push(hero);
    }
    this.canFly = !this.canFly;
  }
  reset() { this.heroes = []; this.canFly = true; this.mutate = true; /* this.heroes = HEROES.slice();*/ }
}
