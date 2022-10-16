export class Character {
  constructor(name, type, attack, defence)  {
    const types = ['Bowerman', 'Deamon', 'Magician', 'Swordsman', 'Undead', 'Zombie'];

    if (name.length < 2 || name.length > 100 || typeof (name) !== 'string') {
      throw new Error('Ошибка в name');
    } else {
      this.name = name;
    }
    if(!types.includes(type)) {
      return new Error('Ошибка в type');
    } else {
      this.type = type;
    }
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  }
  levelUp() {
    if (this.level > 0) {
      this.level = this.level + 1;
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
