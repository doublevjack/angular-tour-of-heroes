export class Hero {
    id: number;
    name: string;
    birthday: Date| null| undefined;
}
export interface Flyer { canFly: boolean; }
export const HEROES = [
    {name: 'Winstorm', canFly: true},
    {name: 'Bombasto', canFly: false},
    {name: 'Magneto', canFly: false},
    {name: 'Tornado', canFly: true}
];
