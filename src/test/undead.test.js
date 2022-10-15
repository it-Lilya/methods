import { Undead } from '../undead';

test('name in object', () => {
  const personData = new Undead('Martin', 'Undead', 30, 30);
  personData.levelUp();
  personData.damage(10);
  const received = personData;
  const expected = {
    name: 'Martin',
    type: 'Undead',
    health: 93,
    level: 31,
    attack: 30,
    defence: 30,
  };
  expect(received).toEqual(expected);
});
