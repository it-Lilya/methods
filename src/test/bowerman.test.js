import { Bowerman } from '../bowerman';

test('name in object', () => {
  const personData = new Bowerman('Bob', 'Bowerman', 30, 30);
  personData.levelUp();
  personData.damage(10);
  const received = personData;
  const expected = {
    name: 'Bob',
    type: 'Bowerman',
    health: 94.8,
    level: 31,
    attack: 12,
    defence: 48,
  };
  expect(received).toEqual(expected);
});
