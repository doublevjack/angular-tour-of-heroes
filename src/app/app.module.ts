import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroBirthdayComponent } from './hero-birthday/hero-birthday.component';
import { PowerBoosterComponent } from './power-booster/power-booster.component';
import { FlyingHeroesComponent } from './flying-heroes/flying-heroes.component';

import { ExponentialStrengthPipe } from './app_pipes/exponential-strength.pipe';
import { FlyingHeroesPipe, FlyingHeroesImpurePipe } from './app_pipes/flying-heroes.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroBirthdayComponent,
    PowerBoosterComponent,
    ExponentialStrengthPipe,
    FlyingHeroesPipe,
    FlyingHeroesImpurePipe,
    FlyingHeroesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
