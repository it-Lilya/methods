export class Character {
  constructor(name, type, health, level, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = health;
    this.level = level;
    this.attack = attack;
    this.defence = defence;
  }

  // eslint-disable-next-line consistent-return
  levelUp() {
    if (this.level > 0) {
      this.level += 1;
      this.attack += ((this.attack / 100) * 20);
      this.defence += ((this.defence / 100) * 20);
      this.health = 100;
    } else {
      return new Error('Нельзя повысить level умершего');
    }
  }

  damage(points) {
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
