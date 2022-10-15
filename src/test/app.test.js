import { Character } from '../app';

test('level in app', () => {
  try {
    const newPerson = new Character('B', 'Bowerman', 10, 20, 0, 40);
    newPerson.levelUp();
  } catch (err) {
    expect(err.message).toBe('Нельзя повысить level умершего');
  }
});

test('damage in app', () => {
  const newPerson = new Character('B', 'Bowerman', 10, 20, 10, 40);
  newPerson.damage(10);
  const result = newPerson;
  const expected = {
    name: 'B',
    type: 'Bowerman',
    health: 4,
    level: 20,
    attack: 10,
    defence: 40,
  };
  expect(result).toEqual(expected);
});
