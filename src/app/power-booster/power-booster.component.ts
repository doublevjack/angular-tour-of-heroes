import { Component } from '@angular/core';

@Component({
  selector: 'app-power-booster',
  template: `
  <h2>Power Boost Calculator</h2>
  <div><label for="npower">Normal power</label><input id="npower" [(ngModel)]="power"></div>
  <div><label for="nfactor">Boost factor</label><input id="nfactor" [(ngModel)]="factor"></div>
  <div>
    <label>Super Hero Power</label> <b>{{power | exponentialStrength: factor}}</b>
  </div>
`
})
export class PowerBoosterComponent {
  power = 2;
  factor = 10;
}
