import { Character } from './app';

export class Swordsman extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 40;
    this.defence = 10;
    this.health = 30;
    this.level = 30;
  }
}
