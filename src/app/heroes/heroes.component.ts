import { Component, OnInit } from '@angular/core';
import { Hero } from '../app_classes/hero';
import { MOCK_HEROES } from '../app_classes/mock-heroes';
// @Component({
//   selector: 'app-heroes',
//   templateUrl: './heroes.component.html',
//   styleUrls: ['./heroes.component.css']
// })
@Component({
  selector: 'app-heroes',
  template: '<div>{{hero.name}}</div>',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  hero: Hero = {
    id: 1, name: 'Winstorm', birthday: null
  };
  created = new Date(2018, 7, 23, 15, 15);
  heroes = MOCK_HEROES;
  constructor() { }

  ngOnInit() {
  }

}
