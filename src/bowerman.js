import { Character } from './app';

export class Bowerman extends Character {
  constructor(name, type) {
    super(name, type);
    this.attack = 10;
    this.defence = 40;
    this.health = 30;
    this.level = 30;
  }
}
