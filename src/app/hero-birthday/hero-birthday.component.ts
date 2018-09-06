import { Component, OnInit } from '@angular/core';
import { Hero } from '../app_classes/hero';
@Component({
  selector: 'app-hero-birthday',
  templateUrl: './hero-birthday.component.html',
  styleUrls: ['./hero-birthday.component.css']
})
export class HeroBirthdayComponent implements OnInit {
  // birthday = new Date(1987, 10, 1); // Nov 01 1987
  hero: Hero = {
    id: 1987,
    name: 'Vo Van Cang',
    birthday: new Date(1987, 10, 1)
  };
  toggle = true; // start with true == shortDate
  // functions
  toggleFormat() { this.toggle = !this.toggle; }
  get format() { return this.toggle ? 'shortDate' : 'fullDate'; }
  constructor() { }

  ngOnInit() {
  }

}
