import { Bowerman } from '../bowerman';

test('name in object', () => {
  const personData = new Bowerman('Bob', 'Bowerman');
  personData.levelUp();
  personData.damage(10);
  const received = personData;
  const expected = {
    name: 'Bob',
    type: 'Bowerman',
    health: 93,
    level: 2,
    attack: 30,
    defence: 30,
  };
  expect(received).toEqual(expected);
});
