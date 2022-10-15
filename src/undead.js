import { Character } from './app';

export class Undead extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 25;
    this.defence = 25;
    this.health = 30;
    this.level = 30;
  }
}
