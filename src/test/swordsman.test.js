import { Swordsman } from '../swordsman';

test('name in object', () => {
  const personData = new Swordsman('Shawn', 'Sworsman', 30, 30);
  personData.levelUp();
  personData.damage(10);
  const received = personData;
  const expected = {
    name: 'Shawn',
    type: 'Sworsman',
    health: 91.2,
    level: 31,
    attack: 48,
    defence: 12,
  };
  expect(received).toEqual(expected);
});
