import { Pipe, PipeTransform } from '@angular/core';
import { Flyer } from '../app_classes/hero';

@Pipe({name: 'flyingHeroes' })
export class FlyingHeroesPipe implements PipeTransform {
    transform(allHeroes: Flyer[]) {
        return allHeroes.filter(hero => hero.canFly);
    }
}

// tslint:disable-next-line:use-pipe-transform-interface
@Pipe({name: 'flyingHeroesImpure', pure: false })
export class FlyingHeroesImpurePipe extends FlyingHeroesPipe {}
