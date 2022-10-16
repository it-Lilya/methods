import { Character } from '../app';

test('name in app', () => {
  try {
    new Character('B', 'Bowerman');
  } catch(err) {
    expect(err.message).toBe('Ошибка в name')
  }
}
)

test('type in app', () => {
  try {
    new Character('Boo', 'bowerman');
  } catch(err) {
    expect(err.message).toBe('Ошибка в type')
  }
}
)

test('level in app', () => {
  try {
    const newPerson = new Character('Boo', 'Bowerman');
    newPerson.level = 0;
    newPerson.levelUp();
  } catch (err) {
    expect(err.message).toBe('Нельзя повысить level умершего');
  }
});

test('damage in app', () => {
  const newPerson = new Character('Boo', 'Bowerman', 10, 20);
  newPerson.damage(2);
  const result = newPerson;
  const expected = {
    name: 'Boo',
    type: 'Bowerman',
    health: 98.4,
    level: 1,
    attack: 10,
    defence: 20,
  };
  expect(result).toEqual(expected);
});

test('damage in app', () => {
  const newPerson = new Character('Boo', 'Bowerman', 10, 20);
  newPerson.health = -1;
  newPerson.damage(2);
  const result = newPerson;
  const expected = {
    name: 'Boo',
    type: 'Bowerman',
    health: -1,
    level: 1,
    attack: 10,
    defence: 20,
  };
  expect(result).toEqual(expected);
});